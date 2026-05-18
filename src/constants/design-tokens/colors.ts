/**
 * Design Token: Colors
 *
 * Semantic color naming system that scales across the entire app.
 * These colors are independent of UI context, making them easy to
 * swap globally if design requirements change.
 */

// Primary Palette - Core brand colors
export const colors = {
  // Primary Green - Main brand color for CTAs and primary actions
  primary: "#2ECC71", // Vibrant, fresh green
  primaryDark: "#27AE60", // Darker shade for hover/active states
  primaryLight: "#D5F4E6", // Light background for secondary usage

  // Secondary Palette - Accent colors
  accent: "#FF8C42", // Orange for highlights and CTAs
  accentLight: "#FFE4CC", // Light orange for backgrounds

  // Neutral Palette - Text, borders, backgrounds
  textPrimary: "#1A1A1A", // Dark heading text, primary content
  textSecondary: "#666666", // Secondary text, descriptive content
  textTertiary: "#999999", // Muted text, placeholders

  // Borders & Dividers
  border: "#CCCCCC", // Input borders, dividers
  borderLight: "#E8E8E8", // Subtle borders, light dividers
  borderDark: "#999999", // Strong borders, emphasis

  // Backgrounds
  background: "#FFFFFF", // Card backgrounds, content areas
  backgroundAlt: "#F9F9F9", // Alternative backgrounds, subtle sections
  backgroundInverted: "#F0F8F3", // Light green background as per design

  // Status Colors (semantic meaning)
  success: "#27AE60", // Success messages (reuse primary dark)
  error: "#E74C3C", // Error states, destructive actions
  warning: "#F39C12", // Warning messages
  info: "#3498DB", // Informational messages

  // Special States
  disabled: "#CCCCCC", // Disabled buttons/inputs
  disabledText: "#999999", // Disabled text

  // Transparent variants (for overlays, modals)
  overlay: "rgba(0, 0, 0, 0.5)",
  overlayLight: "rgba(0, 0, 0, 0.2)",

  // White/Black
  white: "#FFFFFF",
  black: "#000000",
} as const;

/**
 * Semantic color aliases
 * These provide context-specific naming for common patterns
 * Use these in components instead of direct color values
 */
export const semanticColors = {
  // Button colors
  button: {
    primary: colors.primary,
    primaryHover: colors.primaryDark,
    secondary: colors.background,
    secondaryHover: colors.backgroundAlt,
    disabled: colors.disabled,
  },

  // Input colors
  input: {
    background: colors.background,
    border: colors.border,
    borderFocus: colors.primary,
    text: colors.textPrimary,
    placeholder: colors.textTertiary,
  },

  // Card colors
  card: {
    background: colors.white,
    border: colors.borderLight,
    shadow: "rgba(0, 0, 0, 0.08)",
  },

  // Text colors
  text: {
    primary: colors.textPrimary,
    secondary: colors.textSecondary,
    tertiary: colors.textTertiary,
    accent: colors.accent,
  },

  // Background colors
  bg: {
    primary: colors.background,
    secondary: colors.backgroundAlt,
    success: "#D5F4E6",
    error: "#FADBD8",
    warning: "#FCF3CF",
    info: "#D6EAF8",
  },
} as const;

// Type exports for TypeScript inference
export type Color = typeof colors;
export type SemanticColor = typeof semanticColors;
