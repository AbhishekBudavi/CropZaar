/**
 * Design Token: Border Radius
 *
 * Progressive radius scale for different UI elements.
 * Maintains visual hierarchy and consistency.
 */

export const BorderRadius = {
  // No radius
  none: 0,

  // Subtle rounding (buttons, inputs, small elements)
  sm: 4,

  // Standard rounding (cards, modals)
  md: 8,

  // Medium rounding (larger cards, containers)
  lg: 12,

  // Large rounding (special containers, badges)
  xl: 16,

  // Extra large rounding (hero sections)
  "2xl": 20,

  // Maximum rounding (circular elements, large badges)
  "3xl": 24,

  // Pill shape (fully rounded buttons, chips)
  full: 9999,
} as const;

/**
 * Semantic radius aliases
 * Component-specific radius values
 */
export const semanticRadius = {
  // Buttons
  button: {
    default: BorderRadius.md, // 8px - standard buttons
    large: BorderRadius.lg, // 12px - large buttons
    pill: BorderRadius.full, // fully rounded
  },

  // Inputs
  input: {
    default: BorderRadius.md, // 8px - text inputs
  },

  // Cards
  card: {
    default: BorderRadius.lg, // 12px - standard cards
    elevated: BorderRadius.xl, // 16px - elevated cards
  },

  // Images
  image: {
    thumbnail: BorderRadius.md, // 8px - small images
    default: BorderRadius.lg, // 12px - standard images
    large: BorderRadius.xl, // 16px - large images
  },

  // Chips/Badges
  chip: {
    default: BorderRadius.sm, // 4px - small chips
    large: BorderRadius.md, // 8px - large chips
    pill: BorderRadius.full, // fully rounded
  },

  // Modals/Drawers
  modal: BorderRadius.xl, // 16px - modal corners

  // Avatars
  avatar: BorderRadius.full, // fully rounded for circles
} as const;

// Type exports
export type BorderRadius = typeof BorderRadius;
export type SemanticRadius = typeof semanticRadius;
