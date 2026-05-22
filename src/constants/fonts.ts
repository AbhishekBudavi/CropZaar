/**
 * Typography Design Tokens
 */

export const FontFamily = {
  heading: "Poppins-Bold",

  body: "Poppins-Regular",

  medium: "Poppins-Medium",

  semiBold: "Poppins-SemiBold",

  bold: "Poppins-Bold",

  mono: "SpaceMono",
} as const;

// ─── Font Sizes ─────────────────────────────

export const FontSizes = {
  xs: 11,
  sm: 13,
  md: 15,
  base: 16,
  lg: 18,
  xl: 22,
  "2xl": 28,
  "3xl": 36,
  "4xl": 44,
} as const;

// ─── Font Weights ───────────────────────────

export const FontWeights = {
  regular: "400" as const,
  medium: "500" as const,
  semiBold: "600" as const,
  bold: "700" as const,
  extraBold: "800" as const,
} as const;

// ─── Line Heights ───────────────────────────

export const LineHeights = {
  tight: 1.15,
  normal: 1.4,
  relaxed: 1.65,
} as const;

// ─── Letter Spacing ─────────────────────────

export const LetterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
} as const;
