/**
 * Design Token: Typography/Fonts
 *
 * Comprehensive font system with scales for mobile-first design.
 * Includes font families, sizes, weights, and line heights.
 */

export const fontFamily = {
  // System fonts (fallback)
  sans: {
    regular: "System",
    ios: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    android: "Roboto",
  },

  // Primary font family (use custom fonts from assets/fonts if needed)
  primary: "System", // Change to custom font name when available
  secondary: "System",
  mono: "Menlo, monospace",
} as const;

/**
 * Font weights - matches most systems
 */
export const fontWeight = {
  light: "300",
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
} as const;

/**
 * Font sizes - mobile-first scale
 */
export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32,
  "5xl": 40,
} as const;

/**
 * Line heights - for text readability
 */
export const lineHeight = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,
} as const;

/**
 * Letter spacing (tracking) - in pixels
 */
export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
} as const;

/**
 * Semantic typography scales
 * Pre-composed typography tokens for common use cases
 */
export const typography = {
  // Headings
  heading: {
    // H1 - Page title
    h1: {
      fontSize: fontSize["4xl"], // 32px
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.tight,
      letterSpacing: letterSpacing.tight,
    },

    // H2 - Section heading
    h2: {
      fontSize: fontSize["3xl"], // 28px
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.tight,
      letterSpacing: letterSpacing.tight,
    },

    // H3 - Subsection heading
    h3: {
      fontSize: fontSize["2xl"], // 24px
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.tight,
      letterSpacing: letterSpacing.normal,
    },

    // H4 - Card heading
    h4: {
      fontSize: fontSize.lg, // 18px
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },

    // H5 - Component heading
    h5: {
      fontSize: fontSize.md, // 16px
      fontWeight: fontWeight.semibold,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Body text
  body: {
    // Large body text
    lg: {
      fontSize: fontSize.md, // 16px
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },

    // Regular body text
    md: {
      fontSize: fontSize.sm, // 14px
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.normal,
    },

    // Small body text
    sm: {
      fontSize: fontSize.xs, // 12px
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.normal,
      letterSpacing: letterSpacing.wide,
    },
  },

  // Special text types
  button: {
    fontSize: fontSize.md, // 16px
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.normal,
  },

  label: {
    fontSize: fontSize.sm, // 14px
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },

  caption: {
    fontSize: fontSize.xs, // 12px
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.normal,
    letterSpacing: letterSpacing.wide,
  },

  helper: {
    fontSize: fontSize.xs, // 12px
    fontWeight: fontWeight.normal,
    lineHeight: lineHeight.relaxed,
    letterSpacing: letterSpacing.normal,
  },
} as const;

// Type exports
export type FontFamily = typeof fontFamily;
export type FontWeight = typeof fontWeight;
export type FontSize = typeof fontSize;
export type LineHeight = typeof lineHeight;
export type LetterSpacing = typeof letterSpacing;
export type Typography = typeof typography;
