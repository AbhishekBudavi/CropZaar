/**
 * CropZaar Design System — Layout Constants (DEPRECATED)
 *
 * ⚠️ This file is deprecated. Use specialized design token files instead:
 *   - Spacing: import from './spacing'
 *   - BorderRadius: import from './radius'
 *   - Shadows: import from './shadows'
 *
 * This file remains for backwards compatibility only. New code should use:
 *   import { spacing, BorderRadius, Shadows } from '@/constants';
 */

// ❌ DEPRECATED: Use './spacing' instead
export const Spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  10: 40,
  12: 48,
  16: 64,
} as const;

// ❌ DEPRECATED: Use './radius' instead
export const BorderRadius = {
  sm: 6,
  md: 10,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

// ❌ DEPRECATED: Use './shadows' instead
export const Shadows = {
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  button: {
    shadowColor: "#3E9E4F",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
} as const;
