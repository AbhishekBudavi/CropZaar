/**
 * Auth Feature — useOtp Hook
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Owns ALL logic for the OTP screen:
 *   digit management  →  validation  →  verify API  →  resend API
 *   →  countdown timer  →  store dispatch  →  navigation
 *
 * OtpScreen is completely dumb — it just renders components and calls these.
 *
 * OTP digit model:
 *   digits is a string[] of length OTP_LENGTH, e.g. ['1','2','3','','','']
 *   Each OtpDigitInput controls one index.
 *   onDigitChange pastes single chars and auto-focuses the next box.
 *   onBackspace clears the current box and focuses the previous one.
 *
 * Data flow:
 *   User fills boxes
 *     → isOtpComplete becomes true
 *     → onVerify() fires automatically (or user taps Verify)
 *     → validates all 6 digits are numeric
 *     → dispatch AUTH_LOADING_START
 *     → verifyOtp(phone, otp, sessionId)
 *     → SUCCESS: dispatch VERIFY_OTP_SUCCESS → navigate to home/profile-setup
 *     → FAILURE: dispatch AUTH_FAILURE → show error, shake boxes
 *
 * Resend flow:
 *   Cooldown timer counts from RESEND_COOLDOWN_SECONDS → 0
 *   When 0, canResend = true, user can tap Resend
 *   resendOtp() → dispatch RESEND_OTP_SUCCESS (new sessionId stored)
 *   Timer resets
 */

import { router, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  OTP_LENGTH,
  type AuthRouteParams,
  type ResendOtpPayload,
  type UseOtpReturn,
  type VerifyOtpPayload,
} from "..";
import { resendOtp, verifyOtp } from "../services/Authservice";
import { useAuthStore } from "../store/Authstore";

const RESEND_COOLDOWN_SECONDS = 30;
const OTP_DIGITS_REGEX = /^\d+$/;

// ─── Hook ─────────────────────────────────────────────────────────────────
export function useOtp(): UseOtpReturn {
  const { state, dispatch } = useAuthStore();
  const { maskedPhone } = useLocalSearchParams<AuthRouteParams["otp"]>();

  // ── Local state ──────────────────────────────────────────────────────
  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [localError, setLocalError] = useState<string | null>(null);
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(RESEND_COOLDOWN_SECONDS);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Countdown timer ──────────────────────────────────────────────────
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // ── Derived values ───────────────────────────────────────────────────
  const isOtpComplete = digits.every((d) => d.length === 1);
  const canResend = resendCooldown === 0 && !isResending;
  const otpString = digits.join("");

  // ── Auto-verify when all boxes filled ───────────────────────────────
  // Uncomment to trigger verify automatically on completion:
  // useEffect(() => {
  //   if (isOtpComplete) onVerify();
  // }, [isOtpComplete]);

  // ── Digit handlers ───────────────────────────────────────────────────
  const onDigitChange = useCallback(
    (value: string, index: number) => {
      // Strip non-digits and take only the last character
      const digit = value.replace(/\D/g, "").slice(-1);

      setDigits((prev) => {
        const next = [...prev];
        next[index] = digit;
        return next;
      });

      // Clear error as user types
      if (localError) setLocalError(null);
    },
    [localError],
  );

  const onBackspace = useCallback((index: number) => {
    setDigits((prev) => {
      const next = [...prev];
      next[index] = "";
      return next;
    });
  }, []);

  // ── Verify ────────────────────────────────────────────────────────────
  const onVerify = useCallback(async () => {
    // Validate all digits present
    if (!isOtpComplete) {
      setLocalError(`Please enter all ${OTP_LENGTH} digits`);
      return;
    }
    if (!OTP_DIGITS_REGEX.test(otpString)) {
      setLocalError("OTP must contain digits only");
      return;
    }
    if (!state.phone || !state.sessionId) {
      setLocalError("Session expired. Please go back and try again.");
      return;
    }

    dispatch({ type: "AUTH_LOADING_START" });

    try {
      const payload: VerifyOtpPayload = {
        phone: state.phone,
        otp: otpString,
        sessionId: state.sessionId,
      };

      const response = await verifyOtp(payload);

      if (!response.success) {
        throw new Error(response.message ?? "Invalid OTP");
      }

      dispatch({
        type: "VERIFY_OTP_SUCCESS",
        payload: {
          accessToken: response.accessToken ?? "",
          refreshToken: response.refreshToken ?? "",
          isNewUser: response.isNewUser ?? false,
        },
      });

      // Navigate: new users → profile setup, returning users → home
      if (response.isNewUser) {
        router.replace("/(auth)/profile-setup");
      } else {
        router.replace("/(app)/home");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Invalid OTP";
      dispatch({ type: "AUTH_FAILURE", payload: message });
      // Reset digits on wrong OTP so user starts fresh
      setDigits(Array(OTP_LENGTH).fill(""));
    }
  }, [isOtpComplete, otpString, state.phone, state.sessionId, dispatch]);

  // ── Resend ────────────────────────────────────────────────────────────
  const onResend = useCallback(async () => {
    if (!canResend || !state.phone || !state.sessionId) return;

    setIsResending(true);
    setLocalError(null);

    try {
      const payload: ResendOtpPayload = {
        phone: state.phone,
        sessionId: state.sessionId,
      };

      const response = await resendOtp(payload);

      if (!response.success) {
        throw new Error(response.message ?? "Could not resend OTP");
      }

      dispatch({
        type: "RESEND_OTP_SUCCESS",
        payload: { sessionId: response.sessionId ?? state.sessionId },
      });

      // Reset digits and restart countdown
      setDigits(Array(OTP_LENGTH).fill(""));
      setResendCooldown(RESEND_COOLDOWN_SECONDS);

      // Restart timer
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Resend failed";
      setLocalError(message);
    } finally {
      setIsResending(false);
    }
  }, [canResend, state.phone, state.sessionId, dispatch]);

  return {
    digits,
    isVerifying: state.isLoading,
    isResending,
    error: localError ?? state.error,
    resendCooldown,
    canResend,
    isOtpComplete,
    onDigitChange,
    onBackspace,
    onVerify,
    onResend,
  };
}
