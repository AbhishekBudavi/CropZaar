/**
 * CropZaar Design System — Color Tokens
 *
 * Single source of truth for all colors in the app.
 * Import this wherever you need color values.
 *
 * Usage:
 *   import { Colors } from '@/constants/colors';
 *   style={{ color: Colors.primary }}
 */

export const Colors = {
  // ─── Brand ───────────────────────────────────────────
  primary: "#2D7A3A", // Deep agri-green  (headings, borders, icons)
  primaryDark: "#1B5E20", // Hover / pressed state
  primaryLight: "#4CAF50", // Lighter variant for subtle fills
  accent: "#F97316", // Warm orange  (highlighted words, active dots)
  accentDark: "#EA6C00", // Orange pressed state

  // ─── Neutrals ────────────────────────────────────────
  white: "#FFFFFF",
  black: "#000000",
  grey50: "#FAFAFA",
  grey100: "#F5F5F5",
  grey300: "#E0E0E0",
  grey500: "#9E9E9E",
  grey700: "#616161",
  grey900: "#212121",

  // ─── Semantic surfaces ───────────────────────────────
  background: "#FFFFFF",
  surfaceCard: "#FFFFFF",
  /** Soft mint used for the hero slider background area */
  sliderBackground: "#EAF7EC",

  // ─── Text ─────────────────────────────────────────────
  text: {
    heading: "#1A1A1A", // Bold section titles
    body: "#333333", // Regular body text
    muted: "#9E9E9E", // Placeholder / helper text
    inverse: "#FFFFFF", // Text on dark/colored backgrounds
    primaryGreen: "#2D7A3A", // Green words in headings
    accentOrange: "#F97316", // Orange words in headings
  },

  // ─── Input ────────────────────────────────────────────
  input: {
    border: "#2D7A3A",
    borderFocus: "#1B5E20",
    placeholder: "#BDBDBD",
    background: "#FFFFFF",
    icon: "#757575",
    label: "#2D7A3A",
  },

  // ─── Button ───────────────────────────────────────────
  button: {
    primaryBg: "#3E9E4F", // Continue button fill
    primaryBgDisabled: "#B0C4B1", // When phone is empty
    primaryText: "#FFFFFF",
    ripple: "rgba(255,255,255,0.2)",
  },

  // ─── Pagination dots ──────────────────────────────────
  dots: {
    active: "#F97316",
    inactive: "#D1D5DB",
  },
} as const;

export type ColorKeys = keyof typeof Colors;
