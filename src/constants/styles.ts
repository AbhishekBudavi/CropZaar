/**
 * Reusable Styles — React Native StyleSheet collections
 *
 * This file exports pre-built style objects using React Native's StyleSheet.
 * Replaces Tailwind/NativeWind with performant, type-safe styling.
 *
 * Usage:
 *   import { appStyles, buttonStyles } from '@/constants/styles';
 *   <View style={appStyles.container} />
 *   <Pressable style={buttonStyles.primary} />
 */

import { StyleSheet } from "react-native";
import { Colors } from "./colors";
import { FontFamily, FontSizes, FontWeights, LineHeights } from "./fonts";
import { BorderRadius, semanticRadius } from "./radius";
import { Shadows } from "./shadows";
import { semanticSpacing, spacing } from "./spacing";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// LAYOUT & CONTAINERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const appStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: semanticSpacing.padding.screen,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  rowCenter: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  rowStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  colCenter: {
    justifyContent: "center",
    alignItems: "center",
  },

  colStart: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CARDS & SURFACES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surfaceCard,
    borderRadius: semanticRadius.card,
    padding: semanticSpacing.padding.card,
    ...Shadows.md,
  },

  cardLarge: {
    backgroundColor: Colors.surfaceCard,
    borderRadius: BorderRadius.lg,
    padding: semanticSpacing.padding.card,
    ...Shadows.lg,
  },

  cardThin: {
    backgroundColor: Colors.surfaceCard,
    borderRadius: BorderRadius.md,
    padding: semanticSpacing.padding.card,
    ...Shadows.sm,
  },
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BUTTONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const buttonStyles = StyleSheet.create({
  base: {
    borderRadius: semanticRadius.button.default,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: semanticSpacing.padding.button,
  },

  primary: {
    backgroundColor: Colors.button.primaryBg,
    height: 56,
    borderRadius: semanticRadius.button.default,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    ...Shadows.md,
  },

  primaryDisabled: {
    backgroundColor: Colors.button.primaryBgDisabled,
    height: 56,
    borderRadius: semanticRadius.button.default,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
  },

  secondary: {
    backgroundColor: Colors.grey100,
    height: 48,
    borderRadius: semanticRadius.button.default,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: Colors.primary,
    height: 48,
    borderRadius: semanticRadius.button.default,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  small: {
    height: 36,
    paddingHorizontal: spacing.md,
    borderRadius: BorderRadius.sm,
  },

  large: {
    height: 64,
    paddingHorizontal: spacing.xl,
    borderRadius: BorderRadius.lg,
  },
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// BUTTONS - TEXT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const buttonTextStyles = StyleSheet.create({
  primary: {
    color: Colors.button.primaryText,
    fontSize: FontSizes.base,
    fontWeight: FontWeights.semiBold,
    fontFamily: FontFamily.semiBold,
  },

  secondary: {
    color: Colors.text.body,
    fontSize: FontSizes.base,
    fontWeight: FontWeights.semiBold,
    fontFamily: FontFamily.semiBold,
  },

  outline: {
    color: Colors.primary,
    fontSize: FontSizes.base,
    fontWeight: FontWeights.semiBold,
    fontFamily: FontFamily.semiBold,
  },
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INPUTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const inputStyles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },

  label: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.medium,
    fontFamily: FontFamily.medium,
    color: Colors.input.label,
    marginBottom: spacing.sm,
  },

  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.input.background,
    paddingHorizontal: spacing.lg,
    height: 56,
    borderColor: Colors.input.border,
  },

  inputBoxFocused: {
    borderColor: Colors.input.borderFocus,
  },

  inputBoxError: {
    borderColor: "#D32F2F",
  },

  input: {
    flex: 1,
    fontSize: FontSizes.base,
    fontWeight: FontWeights.medium,
    fontFamily: FontFamily.medium,
    color: Colors.text.heading,
    padding: 0,
  },

  error: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.regular,
    fontFamily: FontFamily.body,
    color: "#D32F2F",
    marginTop: spacing.xs,
    marginLeft: spacing.xs,
  },

  helperText: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.regular,
    fontFamily: FontFamily.body,
    color: Colors.text.muted,
    marginTop: spacing.xs,
    marginLeft: spacing.xs,
  },
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEXT & TYPOGRAPHY
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const textStyles = StyleSheet.create({
  heading1: {
    fontSize: FontSizes["4xl"],
    fontWeight: FontWeights.bold,
    fontFamily: FontFamily.bold,
    color: Colors.text.heading,
    lineHeight: FontSizes["4xl"] * LineHeights.tight,
  },

  heading2: {
    fontSize: FontSizes["3xl"],
    fontWeight: FontWeights.bold,
    fontFamily: FontFamily.bold,
    color: Colors.text.heading,
    lineHeight: FontSizes["3xl"] * LineHeights.tight,
  },

  heading3: {
    fontSize: FontSizes["2xl"],
    fontWeight: FontWeights.bold,
    fontFamily: FontFamily.bold,
    color: Colors.text.heading,
    lineHeight: FontSizes["2xl"] * LineHeights.tight,
  },

  heading4: {
    fontSize: FontSizes.xl,
    fontWeight: FontWeights.semiBold,
    fontFamily: FontFamily.semiBold,
    color: Colors.text.heading,
    lineHeight: FontSizes.xl * LineHeights.tight,
  },

  bodyLarge: {
    fontSize: FontSizes.lg,
    fontWeight: FontWeights.regular,
    fontFamily: FontFamily.body,
    color: Colors.text.body,
    lineHeight: FontSizes.lg * LineHeights.normal,
  },

  body: {
    fontSize: FontSizes.base,
    fontWeight: FontWeights.regular,
    fontFamily: FontFamily.body,
    color: Colors.text.body,
    lineHeight: FontSizes.base * LineHeights.normal,
  },

  bodySmall: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.regular,
    fontFamily: FontFamily.body,
    color: Colors.text.body,
    lineHeight: FontSizes.sm * LineHeights.normal,
  },

  label: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.medium,
    fontFamily: FontFamily.medium,
    color: Colors.text.body,
    lineHeight: FontSizes.sm * LineHeights.normal,
  },

  muted: {
    fontSize: FontSizes.sm,
    fontWeight: FontWeights.regular,
    fontFamily: FontFamily.body,
    color: Colors.text.muted,
    lineHeight: FontSizes.sm * LineHeights.normal,
  },
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SPACING HELPERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const spacingStyles = {
  padding: (value: keyof typeof spacing) => ({ padding: spacing[value] }),
  paddingH: (value: keyof typeof spacing) => ({
    paddingHorizontal: spacing[value],
  }),
  paddingV: (value: keyof typeof spacing) => ({
    paddingVertical: spacing[value],
  }),
  margin: (value: keyof typeof spacing) => ({ margin: spacing[value] }),
  marginH: (value: keyof typeof spacing) => ({
    marginHorizontal: spacing[value],
  }),
  marginV: (value: keyof typeof spacing) => ({
    marginVertical: spacing[value],
  }),
  gap: (value: keyof typeof spacing) => ({ gap: spacing[value] }),
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PAGINATION DOTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const paginationStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.sm,
  },

  dotActive: {
    width: 12,
    height: 12,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.dots.active,
  },

  dotInactive: {
    width: 8,
    height: 8,
    borderRadius: BorderRadius.full,
    backgroundColor: Colors.dots.inactive,
  },
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// AUTH SCREENS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const authStyles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },

  scrollContentContainer: {
    flexGrow: 1,
  },

  loginCard: {
    backgroundColor: Colors.surfaceCard,
    borderRadius: BorderRadius.xl,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    paddingBottom: spacing["3xl"],
    ...Shadows.md,
  },

  loginCardHeader: {
    marginBottom: spacing.xl,
    gap: spacing.xs,
  },

  loginCardForm: {
    gap: spacing.lg,
  },

  sliderBackground: {
    backgroundColor: Colors.sliderBackground,
  },

  otpContainer: {
    gap: spacing.lg,
    alignItems: "center",
  },

  otpDigitBox: {
    width: 52,
    height: 52,
    borderWidth: 1.5,
    borderRadius: BorderRadius.md,
    backgroundColor: Colors.surfaceCard,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 22,
    fontWeight: FontWeights.bold,
  },
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// COMMON PATTERNS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const commonStyles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },

  flexColumn: {
    flexDirection: "column",
  },

  flex1: {
    flex: 1,
  },

  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },

  absoluteFull: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  absoluteCenter: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

// Re-export for convenience
export * from "./colors";
export * from "./fonts";
export * from "./radius";
export * from "./shadows";
export * from "./spacing";

