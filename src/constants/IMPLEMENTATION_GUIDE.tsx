/**
 * IMPLEMENTATION GUIDE
 *
 * Step-by-step guide to implement design tokens in your CropZaar app
 */

// ============================================================================
// STEP 1: Import tokens in your component
// ============================================================================

import { colors, radius, spacing, typography } from "@/constants/design-tokens";
import React from "react";
import { Pressable, Text, View } from "react-native";

// ✅ GOOD - Using tokens
const LoginButton = () => (
  <Pressable style={{ backgroundColor: colors.primary }}>
    <Text style={{ ...typography.button, color: colors.white }}>Login</Text>
  </Pressable>
);

// ❌ BAD - Hardcoded values
const BadLoginButton = () => (
  <Pressable style={{ backgroundColor: "#2ECC71" }}>
    <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>
      Login
    </Text>
  </Pressable>
);

// ============================================================================
// STEP 2: Build consistent layouts using spacing scale
// ============================================================================

const ConsistentLayout = () => (
  <View style={{ padding: spacing.lg, gap: spacing.md }}>
    {/* padding.lg = 24px, gap.md = 16px - consistent rhythm */}
  </View>
);

// ============================================================================
// STEP 3: Use semantic tokens for context-specific styling
// ============================================================================

import {
    semanticColors,
    semanticRadius,
    semanticSpacing,
} from "@/constants/design-tokens";

const SemanticComponent = () => (
  <View
    style={{
      backgroundColor: semanticColors.card.background,
      borderColor: semanticColors.card.border,
      borderRadius: semanticRadius.card.default,
      padding: semanticSpacing.padding.card,
    }}
  >
    <Text style={{ color: semanticColors.text.primary }}>Card content</Text>
  </View>
);

// ============================================================================
// STEP 4: Create reusable styled components
// ============================================================================

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onPress,
  variant = "primary",
  disabled = false,
}) => {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => ({
        backgroundColor: isPrimary ? colors.primary : colors.white,
        borderRadius: radius.md,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        borderWidth: isPrimary ? 0 : 1,
        borderColor: colors.primary,
        opacity: disabled ? 0.6 : pressed ? 0.8 : 1,
      })}
    >
      <Text
        style={{
          ...typography.button,
          color: isPrimary ? colors.white : colors.primary,
          textAlign: "center",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

// ============================================================================
// STEP 5: Compose components into screens
// ============================================================================

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.backgroundInverted,
        paddingHorizontal: semanticSpacing.padding.screen,
        paddingVertical: semanticSpacing.padding.screen,
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

      {/* Form Card */}
      <View
        style={{
          backgroundColor: colors.white,
          borderRadius: semanticRadius.card.default,
          padding: semanticSpacing.padding.card,
          marginBottom: spacing.lg,
          gap: spacing.lg,
        }}
      >
        {/* Email Input */}
        <View>
          <Text
            style={{
              ...typography.label,
              color: colors.textPrimary,
              marginBottom: spacing.sm,
            }}
          >
            Email
          </Text>
          <View
            style={{
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: semanticRadius.input.default,
              paddingHorizontal: spacing.md,
              paddingVertical: spacing.sm,
            }}
          >
            <Text
              style={{
                ...typography.body.md,
                color: email ? colors.textPrimary : colors.textTertiary,
              }}
            >
              {email || "Enter your email"}
            </Text>
          </View>
        </View>

        {/* Password Input */}
        <View>
          <Text
            style={{
              ...typography.label,
              color: colors.textPrimary,
              marginBottom: spacing.sm,
            }}
          >
            Password
          </Text>
          <View
            style={{
              backgroundColor: colors.white,
              borderWidth: 1,
              borderColor: colors.border,
              borderRadius: semanticRadius.input.default,
              paddingHorizontal: spacing.md,
              paddingVertical: spacing.sm,
            }}
          >
            <Text
              style={{
                ...typography.body.md,
                color: password ? colors.textPrimary : colors.textTertiary,
              }}
            >
              {password ? "••••••••" : "Enter your password"}
            </Text>
          </View>
        </View>
      </View>

      {/* Primary Action Button */}
      <Button label="Sign In" onPress={() => console.log("Login")} />

      {/* Secondary Action */}
      <Pressable style={{ marginTop: spacing.xl, alignItems: "center" }}>
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

// ============================================================================
// STEP 6: Use TypeScript for type safety
// ============================================================================

// ✅ GOOD - TypeScript catches typos
const colorValue: string = colors.primary;

// ❌ COMPILE ERROR - Property 'pimary' does not exist on type 'typeof colors'
// const badColor = colors.pimary;

// ✅ GOOD - Type-safe variant selection
type ButtonVariant = keyof typeof semanticColors.button;

// ============================================================================
// STEP 7: Theme variants (future enhancement)
// ============================================================================

interface Theme {
  colors: typeof colors;
  spacing: typeof spacing;
  radius: typeof radius;
}

const lightTheme: Theme = {
  colors,
  spacing,
  radius,
};

// Later: Create darkTheme variant
// const darkTheme: Theme = { /* dark colors */ };

// ============================================================================
// STEP 8: Update tailwind.config.js for NativeWind
// ============================================================================

/*
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
        'primary-dark': colors.primaryDark,
        'primary-light': colors.primaryLight,
        accent: colors.accent,
        'text-primary': colors.textPrimary,
        'text-secondary': colors.textSecondary,
        border: colors.border,
        background: colors.backgroundInverted,
      },
      spacing: {
        xs: `${spacing.xs}px`,
        sm: `${spacing.sm}px`,
        md: `${spacing.md}px`,
        lg: `${spacing.lg}px`,
        xl: `${spacing.xl}px`,
      },
      borderRadius: {
        sm: `${radius.sm}px`,
        md: `${radius.md}px`,
        lg: `${radius.lg}px`,
        xl: `${radius.xl}px`,
      },
    },
  },
};
*/

// ============================================================================
// FINAL CHECKLIST
// ============================================================================

/*
✅ Import tokens from '@/constants/design-tokens'
✅ Use semantic tokens (semanticColors, semanticSpacing, etc.) for context
✅ Never hardcode color hex values
✅ Always use spacing scale (xs, sm, md, lg, xl)
✅ Apply typography presets consistently
✅ Use border radius semantic values
✅ Create reusable components with token-based styling
✅ TypeScript strict mode enabled for type safety
✅ tailwind.config.js updated with token values
✅ Document component variants and usage
*/

export default LoginScreen;
