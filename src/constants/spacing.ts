/**
 * Design Token: Spacing
 *
 * 8px base unit system (industry standard).
 * Scales from xs (4px) to 5xl (48px+).
 * Ensures visual consistency and rhythm across layouts.
 */

export const spacing = {
  // Micro spacing
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
  "4xl": 56,
  "5xl": 64,
} as const;

/**
 * Semantic spacing aliases
 * Used for specific layout contexts
 */
export const semanticSpacing = {
  // Padding
  padding: {
    button: spacing.md, // 16px - standard button padding
    card: spacing.lg, // 24px - standard card padding
    screen: spacing.lg, // 24px - screen edge padding
    input: spacing.md, // 16px - input padding
  },

  // Margin/Gaps
  gap: {
    xs: spacing.xs, // 4px - tight spacing
    sm: spacing.sm, // 8px - small gap
    md: spacing.md, // 16px - standard gap
    lg: spacing.lg, // 24px - large gap
    xl: spacing.xl, // 32px - extra large gap
  },

  // Specific layout spacing
  section: spacing.xl, // 32px between major sections
  element: spacing.md, // 16px between elements
  component: spacing.sm, // 8px between components
} as const;

// Type exports
export type Spacing = typeof spacing;
export type SemanticSpacing = typeof semanticSpacing;

/**
 * Helper to calculate responsive spacing
 * Useful when you need to adjust spacing for different screen sizes
 */
export const getResponsiveSpacing = (base: number, multiplier: number = 1) => {
  return base * multiplier;
};
