/**
 * Example: Login Button Component
 *
 * Demonstrates best practices for using design tokens with NativeWind.
 * This is a practical example for your CropZaar login screen.
 */

import { colors, radius, spacing, typography } from "@/constants/design-tokens";
import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";

interface LoginButtonProps {
  label: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

/**
 * Professional login button component using design tokens
 * Demonstrates:
 * - Semantic color usage
 * - Spacing consistency
 * - Responsive design
 * - State management (loading, disabled)
 * - TypeScript best practices
 */
export const LoginButton: React.FC<LoginButtonProps> = ({
  label,
  onPress,
  isLoading = false,
  disabled = false,
  variant = "primary",
}) => {
  // Compute styles based on state and variant
  const isInteractive = !disabled && !isLoading;

  const containerStyle: ViewStyle = {
    backgroundColor: getBackgroundColor(variant, disabled),
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48, // Minimum touch target size
    opacity: disabled ? 0.6 : 1,
  };

  const textStyle = {
    ...typography.button,
    color: getTextColor(variant, disabled),
  };

  return (
    <Pressable
      style={({ pressed }) => ({
        ...containerStyle,
        backgroundColor:
          isInteractive && pressed
            ? colors.primaryDark
            : containerStyle.backgroundColor,
        transform:
          isInteractive && pressed ? [{ scale: 0.98 }] : [{ scale: 1 }],
      })}
      onPress={onPress}
      disabled={!isInteractive}
    >
      {isLoading ? (
        <Text style={textStyle}>Loading...</Text>
      ) : (
        <Text style={textStyle}>{label}</Text>
      )}
    </Pressable>
  );
};

// Helper functions for dynamic styling
function getBackgroundColor(variant: string, disabled: boolean): string {
  if (disabled) return colors.disabled;

  switch (variant) {
    case "primary":
      return colors.primary;
    case "secondary":
      return colors.background;
    default:
      return colors.primary;
  }
}

function getTextColor(variant: string, disabled: boolean): string {
  if (disabled) return colors.disabledText;

  switch (variant) {
    case "primary":
      return colors.white;
    case "secondary":
      return colors.textPrimary;
    default:
      return colors.white;
  }
}

/**
 * Example: Login Card Component
 * Shows how to layer multiple tokens for complex layouts
 */
export const LoginCard: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <View
      style={{
        backgroundColor: colors.white,
        borderRadius: radius.lg,
        padding: spacing.lg,
        marginHorizontal: spacing.md,
        marginVertical: spacing.lg,
        borderWidth: 1,
        borderColor: colors.borderLight,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3, // For Android
      }}
    >
      {children}
    </View>
  );
};

/**
 * Example: Input Field with Tokens
 * Demonstrates text input styling with proper states
 */
export const LoginInput: React.FC<{
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  error?: string;
}> = ({ label, placeholder, value, onChangeText, error }) => {
  return (
    <View style={{ marginBottom: spacing.lg }}>
      <Text
        style={{
          ...typography.label,
          color: colors.textPrimary,
          marginBottom: spacing.sm,
        }}
      >
        {label}
      </Text>

      <View
        style={{
          borderWidth: 1,
          borderColor: error ? colors.error : colors.border,
          borderRadius: radius.md,
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.sm,
          backgroundColor: colors.white,
        }}
      >
        <Text
          style={{
            ...typography.body.md,
            color: value ? colors.textPrimary : colors.textTertiary,
          }}
        >
          {value || placeholder}
        </Text>
      </View>

      {error && (
        <Text
          style={{
            ...typography.caption,
            color: colors.error,
            marginTop: spacing.xs,
          }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};

/**
 * Example: Complete Login Screen Layout
 * Shows how to compose multiple components with tokens
 */
export const LoginScreenExample = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundInverted,
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.xl,
        justifyContent: "center",
      }}
    >
      {/* Header */}
      <Text
        style={{
          ...typography.heading.h1,
          color: colors.textPrimary,
          marginBottom: spacing.xl,
          textAlign: "center",
        }}
      >
        Welcome to CropZaar
      </Text>

      {/* Subtitle */}
      <Text
        style={{
          ...typography.body.lg,
          color: colors.textSecondary,
          marginBottom: spacing["2xl"],
          textAlign: "center",
        }}
      >
        Sign in to manage your crops
      </Text>

      {/* Form Card */}
      <LoginCard>
        <LoginInput
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />

        <LoginInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
      </LoginCard>

      {/* Login Button */}
      <LoginButton
        label="Sign In"
        onPress={() => console.log("Login pressed")}
      />

      {/* Forgot Password Link */}
      <Pressable style={{ marginTop: spacing.lg, alignItems: "center" }}>
        <Text
          style={{
            ...typography.body.md,
            color: colors.accent,
          }}
        >
          Forgot your password?
        </Text>
      </Pressable>

      {/* Sign Up Link */}
      <View
        style={{
          marginTop: spacing.xl,
          flexDirection: "row",
          justifyContent: "center",
          gap: spacing.sm,
        }}
      >
        <Text
          style={{
            ...typography.body.md,
            color: colors.textSecondary,
          }}
        >
          Don't have an account?
        </Text>
        <Pressable>
          <Text
            style={{
              ...typography.body.md,
              color: colors.primary,
              fontWeight: "600",
            }}
          >
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginButton;
