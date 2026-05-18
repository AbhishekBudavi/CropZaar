/**
 * Design Tokens - Unified Export
 *
 * Central point for all design tokens across the application.
 * Enables consistent styling and easy global updates.
 */

export * from "./colors";
export * from "./fonts";
export * from "./radius";
export * from "./spacing";

// Re-export everything in a namespace for convenience
export { colors, semanticColors } from "./colors";
export {
    fontFamily, fontSize, fontWeight, letterSpacing, lineHeight, typography
} from "./fonts";
export { radius, semanticRadius } from "./radius";
export { getResponsiveSpacing, semanticSpacing, spacing } from "./spacing";

/**
 * Complete design token system
 * Access all tokens via: import { tokens } from '@/constants/design-tokens'
 */
export const tokens = {
  colors: require("./colors").colors,
  semanticColors: require("./colors").semanticColors,
  spacing: require("./spacing").spacing,
  semanticSpacing: require("./spacing").semanticSpacing,
  radius: require("./radius").radius,
  semanticRadius: require("./radius").semanticRadius,
  fonts: {
    family: require("./fonts").fontFamily,
    weight: require("./fonts").fontWeight,
    size: require("./fonts").fontSize,
    lineHeight: require("./fonts").lineHeight,
    letterSpacing: require("./fonts").letterSpacing,
    typography: require("./fonts").typography,
  },
} as const;
