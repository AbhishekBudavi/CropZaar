/**
 * Design Tokens - Unified Export
 *
 * Central point for all design tokens across the application.
 * Enables consistent styling and easy global updates.
 *
 * Usage:
 *   import { Colors, FontSizes, spacing } from '@/constants';
 *   import * as tokens from '@/constants';
 *   import { appStyles, buttonStyles, textStyles } from '@/constants/styles';
 */

// ─── Direct Exports ───────────────────────────────────────────────────────
export { Colors, type ColorKeys } from "./colors";
export { FontFamily, FontSizes, FontWeights, LineHeights } from "./fonts";
export { BorderRadius, semanticRadius } from "./radius";
export { getResponsiveSpacing, semanticSpacing, spacing } from "./spacing";

// ─── Shadow Exports ───────────────────────────────────────────────────────
export { Shadows } from "./shadows";
export type { ShadowsType } from "./shadows";

// ─── StyleSheet Exports (NEW: Replaces Tailwind) ──────────────────────────
export {
    appStyles, authStyles, buttonStyles,
    buttonTextStyles, cardStyles, commonStyles, inputStyles, paginationStyles, spacingStyles, textStyles
} from "./styles";

