// shadows.ts

/**
 * Design Token: Shadows
 * Cross-platform shadow system for React Native
 */

export const Shadows = {
  /**
   * Small shadow
   * Chips, tags, tiny elements
   */
  sm: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,

    elevation: 2,
  },

  /**
   * Medium shadow
   * Cards, buttons, inputs
   */
  md: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,

    elevation: 4,
  },

  /**
   * Large shadow
   * Modals, floating containers
   */
  lg: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 8,
  },

  /**
   * Extra large shadow
   * Hero cards, floating UI
   */
  xl: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,

    elevation: 12,
  },

  /**
   * Semantic Shadows
   */

  // Standard card
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4,

    elevation: 4,
  },

  // Elevated card
  elevatedCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 8,
  },

  // Default button
  button: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 3,
  },

  // Floating action button
  fab: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 6,
  },

  // Modal / Bottom sheet
  modal: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,

    elevation: 10,
  },

  // No shadow
  none: {
    shadowColor: "transparent",

    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: 0,
    shadowRadius: 0,

    elevation: 0,
  },
} as const;

export type ShadowsType = typeof Shadows;
