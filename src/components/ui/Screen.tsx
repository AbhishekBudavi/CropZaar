import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  View,
  ViewStyle,
} from "react-native";

export interface ScreenProps extends Omit<ScrollViewProps, "style"> {
  /** Content to render inside screen */
  children: React.ReactNode;
  /** Whether to use SafeAreaView wrapper */
  safeArea?: boolean;
  /** Whether to use KeyboardAvoidingView wrapper */
  keyboardAvoiding?: boolean;
  /** Whether content should be scrollable */
  scrollable?: boolean;
  /** Horizontal padding */
  horizontalPadding?: number;
  /** Vertical padding */
  verticalPadding?: number;
  /** Background color */
  backgroundColor?: string;
  /** Custom container style */
  containerStyle?: ViewStyle;
}

/**
 * Reusable Screen Component
 *
 * Features:
 * - SafeAreaView wrapper for notch/safe areas
 * - KeyboardAvoidingView for input handling
 * - Optional scrollable content
 * - Consistent spacing and padding
 * - Theme-aware background color
 *
 * @example
 * <Screen safeArea scrollable horizontalPadding={24}>
 *   <Text>Content</Text>
 * </Screen>
 */
export const Screen = React.forwardRef<ScrollView, ScreenProps>(
  (
    {
      children,
      safeArea = true,
      keyboardAvoiding = true,
      scrollable = true,
      horizontalPadding = 24,
      verticalPadding = 24,
      backgroundColor = "#FFFFFF",
      containerStyle,
      contentContainerStyle,
      ...scrollViewProps
    },
    ref,
  ) => {
    const screenContent = (
      <View
        style={[
          {
            flex: scrollable ? undefined : 1,
            paddingHorizontal: horizontalPadding,
            paddingVertical: verticalPadding,
            backgroundColor,
          },
          containerStyle,
        ]}
      >
        {children}
      </View>
    );

    const scrollableContent = scrollable ? (
      <ScrollView
        ref={ref}
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          {
            paddingHorizontal: horizontalPadding,
            paddingVertical: verticalPadding,
            backgroundColor,
          },
          contentContainerStyle,
        ]}
        {...scrollViewProps}
      >
        {children}
      </ScrollView>
    ) : (
      screenContent
    );

    const withKeyboardAvoiding = keyboardAvoiding ? (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {scrollableContent}
      </KeyboardAvoidingView>
    ) : (
      scrollableContent
    );

    if (safeArea) {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor }}>
          {withKeyboardAvoiding}
        </SafeAreaView>
      );
    }

    return withKeyboardAvoiding;
  },
);

Screen.displayName = "Screen";
