/**
 * Auth Feature — useLogin Hook
 *
 * The ONLY file that wires together:
 *   form state  ←→  validation  ←→  service  ←→  store  ←→  navigation
 *
 * LoginScreen itself is dumb — it just renders components and calls these.
 *
 * Data flow:
 *   1. User types phone → onPhoneChange() updates local phoneNumber state
 *   2. onContinue() fires:
 *        a. Validates phone (10 digits, starts with 6-9)
 *        b. Dispatches LOGIN_START  →  store.isLoading = true
 *        c. Calls authService.sendOtp()
 *        d. On success → dispatches LOGIN_SUCCESS → navigates to /otp
 *        e. On failure → dispatches LOGIN_FAILURE → error shown in UI
 */

import { router } from "expo-router";
import { useCallback, useState } from "react";
import { sendOtp } from "../services/Authservice";
import { useAuthStore } from "../store/Authstore";

// ─── Validation ──────────────────────────────────────────────────────────
const INDIAN_PHONE_REGEX = /^[6-9]\d{9}$/;

function validatePhone(phone: string): string | null {
  if (!phone) return "Phone number is required";
  if (!/^\d+$/.test(phone)) return "Only digits allowed";
  if (phone.length !== 10) return "Enter a valid 10-digit number";
  if (!INDIAN_PHONE_REGEX.test(phone))
    return "Enter a valid Indian mobile number";
  return null; // valid
}

// ─── Return shape ─────────────────────────────────────────────────────────
export interface UseLoginReturn {
  phoneNumber: string;
  error: string | null;
  isLoading: boolean;
  isButtonEnabled: boolean;
  onPhoneChange: (text: string) => void;
  onContinue: () => Promise<void>;
}

// ─── Hook ─────────────────────────────────────────────────────────────────
export function useLogin(): UseLoginReturn {
  const { state, dispatch } = useAuthStore();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [localError, setLocalError] = useState<string | null>(null);

  // Button is enabled only when phone looks valid (real-time check, no full validation)
  const isButtonEnabled =
    phoneNumber.length === 10 && INDIAN_PHONE_REGEX.test(phoneNumber);

  const onPhoneChange = useCallback(
    (text: string) => {
      // Strip non-digits
      const cleaned = text.replace(/\D/g, "").slice(0, 10);
      setPhoneNumber(cleaned);
      // Clear error as user types
      if (localError) setLocalError(null);
    },
    [localError],
  );

  const onContinue = useCallback(async () => {
    // 1. Validate
    const validationError = validatePhone(phoneNumber);
    if (validationError) {
      setLocalError(validationError);
      return;
    }

    // 2. Dispatch phone to store + start loading
    dispatch({ type: "SET_PHONE", payload: `+91${phoneNumber}` });
    dispatch({ type: "LOGIN_START" });

    try {
      // 3. Call service
      const response = await sendOtp({ phone: `+91${phoneNumber}` });

      if (!response.success) {
        throw new Error(response.message ?? "Failed to send OTP");
      }

      // 4. Store session + navigate to OTP screen
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: { sessionId: response.sessionId ?? "" },
      });

      router.push("/(auth)/otp");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      dispatch({ type: "LOGIN_FAILURE", payload: message });
    }
  }, [phoneNumber, dispatch]);

  return {
    phoneNumber,
    error: localError ?? state.error,
    isLoading: state.isLoading,
    isButtonEnabled,
    onPhoneChange,
    onContinue,
  };
}
