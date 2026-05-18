/**
 * Design Token: Border Radius
 *
 * Progressive radius scale for different UI elements.
 * Maintains visual hierarchy and consistency.
 */

export const radius = {
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
    default: radius.md, // 8px - standard buttons
    large: radius.lg, // 12px - large buttons
    pill: radius.full, // fully rounded
  },

  // Inputs
  input: {
    default: radius.md, // 8px - text inputs
  },

  // Cards
  card: {
    default: radius.lg, // 12px - standard cards
    elevated: radius.xl, // 16px - elevated cards
  },

  // Images
  image: {
    thumbnail: radius.md, // 8px - small images
    default: radius.lg, // 12px - standard images
    large: radius.xl, // 16px - large images
  },

  // Chips/Badges
  chip: {
    default: radius.sm, // 4px - small chips
    large: radius.md, // 8px - large chips
    pill: radius.full, // fully rounded
  },

  // Modals/Drawers
  modal: radius.xl, // 16px - modal corners

  // Avatars
  avatar: radius.full, // fully rounded for circles
} as const;

// Type exports
export type Radius = typeof radius;
export type SemanticRadius = typeof semanticRadius;
