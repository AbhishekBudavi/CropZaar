import React from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { inputStyles, Colors, spacing } from "@/constants";

export interface InputProps extends Omit<TextInputProps, "style"> {
  /** Input label (floating) */
  label?: string;
  /** Error message to display */
  error?: string;
  /** Helper text below input */
  helperText?: string;
  /** Input size: small, medium, or large */
  size?: "sm" | "md" | "lg";
  /** Whether input is disabled */
  disabled?: boolean;
  /** Left icon/element */
  leftIcon?: React.ReactNode;
  /** Right icon/element */
  rightIcon?: React.ReactNode;
  /** Custom container style */
  containerStyle?: ViewStyle;
  /** Custom input style */
  inputStyle?: TextStyle;
}

const getSizeHeight = (size: string) => {
  const sizes: Record<string, number> = {
    sm: 36,
    md: 44,
    lg: 52,
  };
  return sizes[size] || 44;
};

/**
 * Reusable Input Component
 *
 * Features:
 * - Floating label
 * - Error states
 * - Helper text
 * - Icon support (left/right)
 * - Multiple sizes
 * - Accessibility support
 *
 * @example
 * <Input
 *   label="Phone"
 *   placeholder="Enter phone number"
 *   error={error}
 *   helperText="10 digits required"
 * />
 */
export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      label,
      error,
      helperText,
      size = "md",
      disabled = false,
      leftIcon,
      rightIcon,
      containerStyle,
      inputStyle,
      placeholderTextColor,
      ...textInputProps
    },
    ref,
  ) => {
    const height = getSizeHeight(size);

    return (
      <View 
        style={[
          { flex: 1, marginBottom: error || helperText ? spacing.md : 0 }, 
          containerStyle
        ]}
      >
        {label && (
          <Text style={inputStyles.label}>
            {label}
          </Text>
        )}

        <View
          style={[
            inputStyles.inputBox,
            { height, borderColor: error ? "#D32F2F" : Colors.input.border },
            disabled && { opacity: 0.6 },
          ]}
        >
          {leftIcon && (
            <View style={{ marginLeft: spacing.md, marginRight: -6 }}>
              {leftIcon}
            </View>
          )}

          <TextInput
            ref={ref}
            style={[
              inputStyles.input,
              { height: height - 16 }, // Account for padding
              inputStyle
            ]}
            placeholderTextColor={placeholderTextColor || Colors.input.placeholder}
            editable={!disabled}
            {...textInputProps}
          />

          {rightIcon && (
            <View style={{ marginRight: spacing.md, marginLeft: -6 }}>
              {rightIcon}
            </View>
          )}
        </View>

        {error && (
          <Text
            style={inputStyles.error}
            accessibilityRole="alert"
          >
            {error}
          </Text>
        )}

        {helperText && (
          <Text style={inputStyles.helperText}>
            {helperText}
          </Text>
        )}
      </View>
    );
  },
);

Input.displayName = "Input";
