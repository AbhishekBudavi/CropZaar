/**
 * Auth Feature — Service Layer
 *
 * All network calls live here — completely isolated from UI and state.
 * Screens/hooks never call fetch() directly; they call these functions.
 *
 * Why a service layer?
 * - Easy to swap base URLs or auth headers in one place.
 * - Can be mocked in unit tests without touching components.
 * - Keeps hooks thin and readable.
 */

import type {
  ResendOtpPayload,
  ResendOtpResponse,
  SendOtpPayload,
  SendOtpResponse,
  VerifyOtpPayload,
  VerifyOtpResponse,
} from "..";

const BASE_URL =
  process.env.EXPO_PUBLIC_API_URL ?? "https://api.cropzaar.com/v1";

// ─── Helpers ──────────────────────────────────────────────────────────────
async function post<TBody, TResponse>(
  endpoint: string,
  body: TBody,
): Promise<TResponse> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(
      (errorData as { message?: string }).message ?? `HTTP ${res.status}`,
    );
  }

  return res.json() as Promise<TResponse>;
}

// ─── Auth API calls ───────────────────────────────────────────────────────

/**
 * Sends an OTP to the given phone number.
 * Returns a sessionId used in the OTP verification step.
 */
export async function sendOtp(
  payload: SendOtpPayload,
): Promise<SendOtpResponse> {
  return post<SendOtpPayload, SendOtpResponse>("/auth/send-otp", payload);
}

/**
 * Verifies the OTP sent to the phone number.
 * Returns access tokens and user status.
 */
export async function verifyOtp(
  payload: VerifyOtpPayload,
): Promise<VerifyOtpResponse> {
  return post<VerifyOtpPayload, VerifyOtpResponse>("/auth/verify-otp", payload);
}

/**
 * Resends an OTP to the given phone number.
 * Returns a new sessionId.
 */
export async function resendOtp(
  payload: ResendOtpPayload,
): Promise<ResendOtpResponse> {
  return post<ResendOtpPayload, ResendOtpResponse>("/auth/resend-otp", payload);
}
