import { Button } from "@/components/ui/Button";
import { AuthScrollContainer } from "@/features/auth/components/AuthScrollContainer";
import { OtpInput } from "@/features/auth/components/Otpinput";
import { ResendButton } from "@/features/auth/components/Resendbutton";
import { useOtp } from "@/features/auth/hooks/useOtp";
import React from "react";
import { Text, View } from "react-native";

/**
 * OTP Verification Screen
 *
 * Allows user to verify their phone number via 6-digit OTP.
 *
 * Features:
 * - OTP digit input boxes with auto-focus management
 * - Error handling & display
 * - Resend functionality with cooldown timer
 * - Professional scrolling on small devices
 * - Keyboard doesn't cover form elements
 * - Verify button always accessible
 * - Works on iOS & Android
 */
export default function OtpScreen() {
  const {
    digits,
    isVerifying,
    isResending,
    error,
    resendCooldown,
    canResend,
    isOtpComplete,
    onDigitChange,
    onBackspace,
    onVerify,
    onResend,
  } = useOtp();

  return (
    <AuthScrollContainer backgroundColor="#FFFFFF">
      {/* Header */}
      <View className="mb-xl items-center px-lg pt-lg">
        <Text className="text-2xl font-bold text-text-heading mb-sm">
          Verify Your Phone
        </Text>
        <Text className="text-base font-normal text-text-body text-center">
          We've sent a 6-digit code to your phone
        </Text>
      </View>

      {/* OTP Input */}
      <View className="my-xl items-center px-lg">
        <OtpInput
          digits={digits}
          onDigitChange={onDigitChange}
          onBackspace={onBackspace}
          hasError={!!error}
        />
      </View>

      {/* Error Message */}
      {error && (
        <View className="bg-red-50 rounded-lg px-md py-sm mb-md mx-lg">
          <Text className="text-sm text-red-600 font-medium text-center">
            {error}
          </Text>
        </View>
      )}

      {/* Verify Button */}
      <View className="my-lg px-lg">
        <Button
          label={isVerifying ? "Verifying..." : "Verify"}
          variant="primary"
          size="lg"
          fullWidth
          disabled={!isOtpComplete || isVerifying}
          isLoading={isVerifying}
          onPress={onVerify}
        />
      </View>

      {/* Resend Section */}
      <View className="items-center my-lg px-lg">
        <ResendButton
          resendCooldown={resendCooldown}
          canResend={canResend}
          isResending={isResending}
          onResend={onResend}
        />
      </View>

      {/* Help Text */}
      <View className="mt-xl mx-lg mb-xl px-md py-md bg-grey-50 rounded-lg">
        <Text className="text-xs text-text-muted text-center leading-normal">
          Enter the 6 digits to verify your phone number
        </Text>
      </View>
    </AuthScrollContainer>
  );
}
