/**
 * ContinueButton
 *
 * The primary action button on the login card.
 *
 * States:
 *   default   – bright green, tap-able
 *   disabled  – muted green, not interactive (phone is incomplete)
 *   loading   – shows ActivityIndicator, not tap-able
 *
 * Design note:
 *   Uses Pressable (not TouchableOpacity) for fine-grained pressed style
 *   control and better accessibility on Android.
 */

import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableStateCallbackType,
} from "react-native";
import { buttonStyles, buttonTextStyles, Colors } from "@/constants";

interface ContinueButtonProps {
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  label?: string;
}

export function ContinueButton({
  onPress,
  isLoading = false,
  disabled = false,
  label = "Continue",
}: ContinueButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <Pressable
      onPress={isDisabled ? undefined : onPress}
      style={({ pressed }) => [
        isDisabled ? buttonStyles.primaryDisabled : buttonStyles.primary,
        pressed && !isDisabled && { opacity: 0.8 },
      ]}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: isDisabled, busy: isLoading }}
    >
      {isLoading ? (
        <ActivityIndicator
          color="#FFFFFF"
          size="small"
          accessibilityLabel="Loading"
        />
      ) : (
        <Text style={buttonTextStyles.primary}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}
