/**
 * Design Tokens Quick Reference
 *
 * Copy-paste this into components for common patterns.
 */

// ============================================================================
// 1. IMPORT TOKENS
// ============================================================================

import {
    colors,
    radius,
    semanticColors,
    semanticRadius,
    semanticSpacing,
    spacing,
    typography,
} from "@/constants/design-tokens";

// ============================================================================
// 2. COLOR QUICK REFERENCE
// ============================================================================

// Primary action (green button)
colors.primary; // '#2ECC71'

// Light green background
colors.backgroundInverted; // '#F0F8F3'

// Orange accent text
colors.accent; // '#FF8C42'

// Dark heading text
colors.textPrimary; // '#1A1A1A'

// Gray border for input
colors.border; // '#CCCCCC'

// White cards
colors.white; // '#FFFFFF'

// ============================================================================
// 3. SPACING QUICK REFERENCE (8px base unit)
// ============================================================================

spacing.xs; // 4px - very tight
spacing.sm; // 8px - small gap
spacing.md; // 16px - standard (most common)
spacing.lg; // 24px - large (cards, sections)
spacing.xl; // 32px - extra large (major sections)

// Semantic spacing for specific use cases
semanticSpacing.padding.button; // 16px for button padding
semanticSpacing.padding.card; // 24px for card padding
semanticSpacing.gap.md; // 16px for element gaps

// ============================================================================
// 4. BORDER RADIUS QUICK REFERENCE
// ============================================================================

radius.none; // 0 - no rounding
radius.sm; // 4px - slight curve (buttons)
radius.md; // 8px - standard (inputs, small cards)
radius.lg; // 12px - medium (cards, modals)
radius.xl; // 16px - large (elevated elements)
radius.full; // 9999 - pill/circle (avatars, chips)

// ============================================================================
// 5. TYPOGRAPHY QUICK REFERENCE
// ============================================================================

// Headings
typography.heading.h1; // 32px, bold, for page titles
typography.heading.h2; // 28px, bold, for sections
typography.heading.h3; // 24px, semibold, for subsections
typography.heading.h4; // 18px, semibold, for card titles

// Body text
typography.body.lg; // 16px, normal (main content)
typography.body.md; // 14px, normal (secondary content)
typography.body.sm; // 12px, normal (small text)

// Special
typography.button; // 16px, semibold (button labels)
typography.label; // 14px, medium (form labels)
typography.caption; // 12px, normal (captions)

// ============================================================================
// 6. COMMON COMPONENT PATTERNS
// ============================================================================

// PRIMARY BUTTON
const primaryButtonStyle = {
  backgroundColor: colors.primary,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  borderRadius: radius.md,
};
const primaryButtonText = {
  ...typography.button,
  color: colors.white,
};

// SECONDARY BUTTON
const secondaryButtonStyle = {
  backgroundColor: colors.white,
  borderWidth: 1,
  borderColor: colors.primary,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  borderRadius: radius.md,
};
const secondaryButtonText = {
  ...typography.button,
  color: colors.primary,
};

// CARD
const cardStyle = {
  backgroundColor: colors.white,
  borderRadius: radius.lg,
  padding: spacing.lg,
  borderWidth: 1,
  borderColor: colors.borderLight,
};

// INPUT FIELD
const inputStyle = {
  backgroundColor: colors.white,
  borderWidth: 1,
  borderColor: colors.border,
  borderRadius: radius.md,
  paddingHorizontal: spacing.md,
  paddingVertical: spacing.sm,
};
const inputTextStyle = {
  ...typography.body.md,
  color: colors.textPrimary,
};
const inputPlaceholderStyle = {
  ...typography.body.md,
  color: colors.textTertiary,
};

// TEXT
const headingStyle = {
  ...typography.heading.h2,
  color: colors.textPrimary,
};
const bodyStyle = {
  ...typography.body.md,
  color: colors.textSecondary,
};

// ============================================================================
// 7. COPY-PASTE COMPONENT TEMPLATE
// ============================================================================

/*
import { View, Text, Pressable } from 'react-native';
import { colors, spacing, radius, typography } from '@/constants/design-tokens';

export const MyComponent = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
      padding: spacing.lg,
      gap: spacing.md,
    }}>
      <Text style={{
        ...typography.heading.h2,
        color: colors.textPrimary,
      }}>
        Heading
      </Text>

      <View style={{
        backgroundColor: colors.white,
        borderRadius: radius.lg,
        padding: spacing.lg,
        borderWidth: 1,
        borderColor: colors.border,
      }}>
        <Text style={{
          ...typography.body.md,
          color: colors.textSecondary,
        }}>
          Content
        </Text>
      </View>

      <Pressable style={{
        backgroundColor: colors.primary,
        paddingVertical: spacing.md,
        borderRadius: radius.md,
      }}>
        <Text style={{
          ...typography.button,
          color: colors.white,
          textAlign: 'center',
        }}>
          Action
        </Text>
      </Pressable>
    </View>
  );
};
*/

// ============================================================================
// 8. COMMON ISSUES & SOLUTIONS
// ============================================================================

/*
ISSUE: "Can't import from design-tokens"
FIX: Check tsconfig.json path alias is set up correctly

ISSUE: "Token not found"
FIX: Make sure token is exported from index.ts

ISSUE: "Colors look wrong in dark mode"
FIX: Use semanticColors instead of raw color values

ISSUE: "Spacing is inconsistent"
FIX: Always use spacing tokens, never hardcode numbers

ISSUE: "Font sizes are too small/large"
FIX: Use typography presets instead of custom sizes
*/

export const QUICK_REFERENCE = {
  colors,
  semanticColors,
  spacing,
  semanticSpacing,
  radius,
  semanticRadius,
  typography,
};
