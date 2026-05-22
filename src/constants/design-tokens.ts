/**
 * Design Tokens — Centralized design system
 *
 * This file re-exports all design tokens from the Tailwind config
 * for components that still need programmatic access to values.
 *
 * For new components, prefer using className with Tailwind utilities
 * rather than importing these raw tokens.
 */

// Colors
export const colors = {
  primary: "#2D7A3A",
  primaryDark: "#1F5424",
  accent: "#F97316",
  white: "#FFFFFF",
  black: "#000000",
  disabled: "#CCCCCC",
  background: "#F5F5F5",
  disabledText: "#999999",
  textPrimary: "#1A1A1A",
  borderLight: "#E0E0E0",
  error: "#D32F2F",
  border: "#DDDDDD",
  textTertiary: "#B0B0B0",
  backgroundInverted: "#2D2D2D",
  textSecondary: "#666666",
};

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  "2xl": 32,
  "3xl": 40,
  "4xl": 48,
  "5xl": 64,
};

// Border Radius
export const radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};

// Typography
export const typography = {
  button: {
    fontSize: 16,
    fontWeight: "600" as const,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700" as const,
    h1: {
      fontSize: 32,
      fontWeight: "700" as const,
    },
    h2: {
      fontSize: 28,
      fontWeight: "700" as const,
    },
    h3: {
      fontSize: 24,
      fontWeight: "600" as const,
    },
    h4: {
      fontSize: 18,
      fontWeight: "600" as const,
    },
  },
  body: {
    fontSize: 14,
    fontWeight: "400" as const,
    sm: {
      fontSize: 12,
      fontWeight: "400" as const,
    },
    md: {
      fontSize: 14,
      fontWeight: "400" as const,
    },
    lg: {
      fontSize: 16,
      fontWeight: "400" as const,
    },
  },
  label: {
    fontSize: 12,
    fontWeight: "500" as const,
  },
  caption: {
    fontSize: 12,
    fontWeight: "400" as const,
  },
};

// Semantic Colors
export const semanticColors = {
  primary: colors.primary,
  accent: colors.accent,
  button: {
    primary: "#2D7A3A",
    secondary: "#F97316",
    disabled: "#CCCCCC",
  },
  card: {
    background: "#FFFFFF",
    border: "#E0E0E0",
  },
  text: {
    primary: "#1A1A1A",
    secondary: "#666666",
  },
};

// Semantic Radius
export const semanticRadius = {
  sm: radius.sm,
  lg: radius.lg,
  card: {
    default: 12,
  },
  input: {
    default: 8,
  },
};

// Semantic Spacing
export const semanticSpacing = {
  padding: {
    ...spacing,
    button: 16,
    card: 24,
    screen: 16,
  },
  margin: spacing,
  gap: {
    sm: 8,
    md: 12,
    lg: 16,
  },
};
