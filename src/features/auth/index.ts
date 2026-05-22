/**
 * Auth Feature — Type Definitions
 *
 * Centralise every type used across auth components, hooks, services, and store.
 * This file is the single contract the entire feature follows.
 */

// ─── Slider ───────────────────────────────────────────────────────────────
export interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  image: any;
  accentText: string;
}

// ─── Login form ────────────────────────────────────────────────────────────
export interface LoginFormState {
  phoneNumber: string;
  isValid: boolean;
  isLoading: boolean;
  error: string | null;
}

// ─── Auth service payloads ─────────────────────────────────────────────────
export interface SendOtpPayload {
  phone: string; // e.g. "+919876543210"
}

export interface SendOtpResponse {
  success: boolean;
  message: string;
  /** Session token to be stored for OTP verification step */
  sessionId?: string;
}

// ─── Auth service responses ───────────────────────────────────────────────
export interface VerifyOtpPayload {
  phone: string;
  otp: string;
  sessionId: string;
}

export interface VerifyOtpResponse {
  success: boolean;
  message?: string;
  accessToken?: string;
  refreshToken?: string;
  isNewUser?: boolean;
}

export interface ResendOtpPayload {
  phone: string;
  sessionId: string;
}

export interface ResendOtpResponse {
  success: boolean;
  message?: string;
  sessionId?: string;
}

// ─── OTP hook return type ──────────────────────────────────────────────────
export interface UseOtpReturn {
  digits: string[];
  isVerifying: boolean;
  isResending: boolean;
  error: string | null;
  resendCooldown: number;
  canResend: boolean;
  isOtpComplete: boolean;
  onDigitChange: (value: string, index: number) => void;
  onBackspace: (index: number) => void;
  onVerify: () => Promise<void>;
  onResend: () => Promise<void>;
}

// ─── Auth route params ─────────────────────────────────────────────────────
export interface AuthRouteParams {
  otp: { maskedPhone?: string };
}

// ─── Constants ─────────────────────────────────────────────────────────────
export const OTP_LENGTH = 6;

// ─── Auth store state ──────────────────────────────────────────────────────
export interface AuthState {
  phone: string | null;
  sessionId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  isNewUser: boolean;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export type AuthAction =
  | { type: "SET_PHONE"; payload: string }
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: { sessionId: string } }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "AUTH_LOADING_START" }
  | {
      type: "VERIFY_OTP_SUCCESS";
      payload: {
        accessToken: string;
        refreshToken: string;
        isNewUser: boolean;
      };
    }
  | { type: "AUTH_FAILURE"; payload: string }
  | { type: "RESEND_OTP_SUCCESS"; payload: { sessionId: string } }
  | { type: "LOGOUT" }
  | { type: "CLEAR_ERROR" };
