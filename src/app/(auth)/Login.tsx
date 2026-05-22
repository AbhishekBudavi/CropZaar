/**
 * Login Screen — Phone-based Authentication Entry
 *
 * Handles:
 * - Hero slider carousel at top
 * - Login card with phone input
 * - Proper scrolling on all device sizes
 * - Keyboard avoiding (iOS & Android)
 * - Professional UX with smooth transitions
 *
 * Layout:
 * ┌─────────────────────────────┐
 * │    Hero Slider (45%)        │  ← Swipeable carousel
 * ├─────────────────────────────┤
 * │   Login Card                │  ← Form with phone input
 * │   ┌─────────────────────┐   │
 * │   │ Phone Input         │   │
 * │   ├─────────────────────┤   │
 * │   │ Continue Button ✓   │   │  ← Always accessible via scroll
 * │   └─────────────────────┘   │
 * └─────────────────────────────┘
 *
 * On small devices or with keyboard open:
 * - Content scrolls smoothly
 * - Button stays accessible
 * - Keyboard doesn't cover input
 */

import React, { useMemo } from "react";
import { Dimensions, StatusBar, View } from "react-native";
import { AuthScrollContainer } from "../../features/auth/components/AuthScrollContainer";
import { HeroSlider } from "../../features/auth/components/Heroslider";
import { LoginCard } from "../../features/auth/components/Logincard";
import { useLogin } from "../../features/auth/hooks/useLogin";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// Calculate slider height once (memoized for performance)
// 45% of screen height gives good balance:
// - Large screen: slider is prominent
// - Small screen: slider is proportional, still has room for form
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const SLIDER_HEIGHT = Dimensions.get("window").height * 0.45;

export default function LoginScreen() {
  const {
    phoneNumber,
    onPhoneChange,
    onContinue,
    isLoading,
    isButtonEnabled,
    error,
  } = useLogin();

  // Memoize slider height style to prevent re-calculations
  const sliderStyle = useMemo(
    () => ({ height: SLIDER_HEIGHT, overflow: "hidden" as const }),
    [],
  );

  return (
    <AuthScrollContainer backgroundColor="#EAF7EC">
      {/* Status bar configuration for auth screens */}
      <StatusBar barStyle="dark-content" backgroundColor="#EAF7EC" />

      {/* ── Top: Auto-advancing hero carousel ── */}
      <View style={sliderStyle}>
        <HeroSlider />
      </View>

      {/* ── Bottom: White rounded login card ── */}
      <LoginCard
        phoneNumber={phoneNumber}
        onPhoneChange={onPhoneChange}
        onContinue={onContinue}
        isLoading={isLoading}
        isButtonEnabled={isButtonEnabled}
        error={error}
      />
    </AuthScrollContainer>
  );
}
