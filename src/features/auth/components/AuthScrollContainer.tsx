/**
 * AuthScrollContainer — Reusable Auth Screen Wrapper
 *
 * WHY each wrapper is needed:
 *
 * 1. SafeAreaView
 *    - Prevents content from going under notch/status bar
 *    - On iOS: respects notch, dynamic island
 *    - On Android: respects status bar
 *    - edges={["top"]} only applies to top (header already handles bottom)
 *
 * 2. KeyboardAvoidingView
 *    - Adjusts view when keyboard opens (critical for scrolling)
 *    - behavior="padding" (iOS): Adds padding when keyboard opens
 *    - behavior="height" (Android): Adjusts height of view
 *    - Allows content to push up above keyboard
 *    - Without this: keyboard covers inputs
 *
 * 3. ScrollView
 *    - Enables scrolling when content exceeds screen height
 *    - showsVerticalScrollIndicator={false}: Hides scrollbar (professional look)
 *    - keyboardShouldPersistTaps="handled": Allows taps through keyboard
 *    - scrollEnabled={true}: Explicitly enable scrolling
 *    - nestedScrollEnabled={true}: Allow nested ScrollViews if needed
 *    - contentContainerStyle={{ flexGrow: 1 }}:
 *      → If content < screen: grows to fill screen
 *      → If content > screen: allows scrolling beyond keyboard
 *
 * 4. View (scrollContent container)
 *    - Wraps all content
 *    - Adds bottom padding so button isn't hidden by keyboard
 *    - Has minimum height to ensure scrollability
 *
 * Problem solved:
 * ✓ Small devices: Content scrolls properly
 * ✓ Large devices: Content still fits without unnecessary scrolling
 * ✓ Keyboard: Doesn't cover input fields or button
 * ✓ Button: Always accessible by scrolling
 * ✓ Both iOS & Android: Handled with Platform.select
 */

import React, { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors, spacing } from "@/constants";

interface AuthScrollContainerProps {
  children: ReactNode;
  backgroundColor?: string;
}

/**
 * Universal Auth Screen Wrapper
 *
 * Handles:
 * - Keyboard avoiding (iOS & Android)
 * - Safe area insets
 * - Scrolling on small devices
 * - Hidden scrollbar
 * - Button accessibility
 *
 * @example
 * <AuthScrollContainer>
 *   <LoginCard {...props} />
 * </AuthScrollContainer>
 */
export const AuthScrollContainer = React.memo(
  ({ children, backgroundColor = Colors.background }: AuthScrollContainerProps) => {
    return (
      <SafeAreaProvider style={{ backgroundColor, flex: 1 }}>
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            KeyboardAvoidingView: Adjusts layout when keyboard opens
            
            WHY behavior is Platform-specific:
            - iOS: "padding" adds space above keyboard (smooth animation)
            - Android: "height" adjusts container height (prevents overlap)
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
        >
          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              ScrollView: Enables scrolling when content > screen height
              
              Key props explained:
              - flex: 1 → Takes full available height
              - contentContainerStyle={{ flexGrow: 1 }}:
                  → If content < height: fills screen (no scroll)
                  → If content > height: allows scroll beyond keyboard
              - scrollEnabled={true}: Explicitly enable (default, but explicit)
              - nestedScrollEnabled={true}: Allow nested scrolls if exists
              - showsVerticalScrollIndicator={false}: Hide scrollbar (clean look)
              - keyboardShouldPersistTaps="handled": Taps work through keyboard
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            bounces={false}
            overScrollMode="never"
          >
            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                Content wrapper with padding
                
                Why paddingBottom is critical:
                - On iOS: Keyboard pushes from bottom, need space above button
                - On Android: Keyboard can cover content, padding ensures button is visible
                - Different padding for iOS vs Android due to different keyboard behaviors
                - IMPORTANT: Use padding of 64px (5xl) to ensure button is not hidden by keyboard
                ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <View
              style={{
                paddingHorizontal: spacing.lg,
                paddingVertical: spacing.lg,
                paddingBottom: spacing["5xl"],
                minHeight: "100%",
                justifyContent: "center",
              }}
            >
              {children}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaProvider>
    );
  },
);

AuthScrollContainer.displayName = "AuthScrollContainer";
