/**
 * ResendButton
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Shows either:
 *   A) "Resend in 24s"  — greyed out, not tappable
 *   B) "Resend OTP"     — green, tappable
 *
 * The countdown value comes from useOtp — this component is purely visual.
 *
 * Why not a full Button component?
 *   The resend action is inline text, not a full-width button.
 *   Using Pressable with text keeps it lightweight and easy to style.
 */

import React from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { textStyles, Colors, spacing } from "@/constants";

interface ResendButtonProps {
  resendCooldown: number;
  canResend: boolean;
  isResending: boolean;
  onResend: () => void;
}

export function ResendButton({
  resendCooldown,
  canResend,
  isResending,
  onResend,
}: ResendButtonProps) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: spacing.lg }}>
      <Text style={textStyles.muted}>Didn't receive the OTP? </Text>

      {isResending ? (
        <ActivityIndicator size="small" color={Colors.primary} style={{ marginLeft: spacing.xs }} />
      ) : canResend ? (
        <Pressable
          onPress={onResend}
          accessibilityRole="button"
          accessibilityLabel="Resend OTP"
        >
          {({ pressed }) => (
            <Text
              style={[
                textStyles.label,
                { color: Colors.primary, textDecorationLine: "underline", opacity: pressed ? 0.6 : 1 },
              ]}
            >
              Resend OTP
            </Text>
          )}
        </Pressable>
      ) : (
        <Text style={textStyles.muted}>
          Resend in {resendCooldown}s
        </Text>
      )}
    </View>
  );
}
