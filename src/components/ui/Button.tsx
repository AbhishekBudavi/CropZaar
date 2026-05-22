import React from "react";
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { buttonStyles, buttonTextStyles, Colors, spacing } from "@/constants";

export interface ButtonProps extends Omit<PressableProps, "style"> {
  /** Button text label */
  label: string;
  /** Button variant: primary, secondary, or outline */
  variant?: "primary" | "secondary" | "outline";
  /** Button size: small, medium, or large */
  size?: "sm" | "md" | "lg";
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether button is loading */
  isLoading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Custom container style */
  containerStyle?: ViewStyle;
  /** Custom text style */
  textStyle?: TextStyle;
  /** Called when button is pressed */
  onPress?: () => void | Promise<void>;
}

const getButtonStyle = (variant: string, size: string, disabled: boolean, fullWidth: boolean) => {
  let baseStyle = buttonStyles.base;
  
  // Variant styles
  if (variant === "primary") {
    baseStyle = disabled ? buttonStyles.primaryDisabled : buttonStyles.primary;
  } else if (variant === "secondary") {
    baseStyle = buttonStyles.secondary;
  } else if (variant === "outline") {
    baseStyle = buttonStyles.outline;
  }

  // Size modifiers
  if (size === "sm") {
    baseStyle = { ...baseStyle, ...buttonStyles.small };
  } else if (size === "lg") {
    baseStyle = { ...baseStyle, ...buttonStyles.large };
  }

  return { ...baseStyle, width: fullWidth ? "100%" : "auto" };
};

const getTextColor = (variant: string, disabled: boolean) => {
  if (variant === "primary") {
    return disabled ? Colors.white : Colors.button.primaryText;
  } else if (variant === "secondary") {
    return Colors.text.body;
  } else {
    return Colors.primary;
  }
};

/**
 * Reusable Button Component
 *
 * Features:
 * - Multiple variants (primary, secondary, outline)
 * - Multiple sizes (sm, md, lg)
 * - Loading state with spinner
 * - Accessibility support
 * - Disabled state
 *
 * @example
 * <Button
 *   label="Continue"
 *   variant="primary"
 *   size="md"
 *   onPress={handlePress}
 * />
 */
export const Button = React.forwardRef<
  React.ComponentRef<typeof Pressable>,
  ButtonProps
>(
  (
    {
      label,
      variant = "primary",
      size = "md",
      disabled = false,
      isLoading = false,
      fullWidth = false,
      containerStyle,
      textStyle,
      onPress,
      ...pressableProps
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;
    const buttonStyle = getButtonStyle(variant, size, isDisabled, fullWidth);
    const textColor = getTextColor(variant, isDisabled);

    return (
      <Pressable
        ref={ref}
        onPress={isDisabled ? undefined : onPress}
        disabled={isDisabled}
        style={({ pressed }) => [
          buttonStyle,
          pressed && !isDisabled && { opacity: 0.8 },
          containerStyle,
        ]}
        accessibilityRole="button"
        accessibilityState={{ disabled: isDisabled, busy: isLoading }}
        accessibilityLabel={label}
        {...pressableProps}
      >
        {isLoading && (
          <ActivityIndicator
            size={size === "sm" ? "small" : "small"}
            color={textColor}
            style={{ marginRight: spacing.sm }}
          />
        )}
        <Text
          style={[{ color: textColor, fontSize: 16, fontWeight: "600" }, textStyle]}
          numberOfLines={1}
          allowFontScaling={false}
        >
          {label}
        </Text>
      </Pressable>
    );
  },
);

Button.displayName = "Button";
    );
  },
);

Button.displayName = "Button";
