/**
 * Home Screen — Main Dashboard
 *
 * Authenticated users see this after OTP verification.
 * This is a placeholder for the main dashboard/home screen.
 *
 * TODO:
 * - Fetch user data
 * - Display marketplace/products
 * - Show user info
 * - Add navigation to other sections
 */

import { Button } from "@/components/ui/Button";
import { Screen } from "@/components/ui/Screen";
import { BorderRadius, Colors, spacing, textStyles } from "@/constants";
import { useAuthStore } from "@/features/auth/store/Authstore";
import { router } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { state, dispatch } = useAuthStore();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    router.replace("/(auth)/Login");
  };

  return (
    <Screen safeArea scrollable horizontalPadding={24}>
      <View style={{ marginBottom: spacing.xl, alignItems: "center" }}>
        <Text style={[textStyles.heading2, { marginBottom: spacing.sm }]}>
          Welcome to CropZaar
        </Text>
        <Text style={[textStyles.body, { textAlign: "center" }]}>
          {state.isNewUser
            ? "Complete your profile to get started"
            : `Welcome back!`}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: Colors.grey50,
          borderRadius: BorderRadius.lg,
          padding: spacing.lg,
          marginBottom: spacing.xl,
        }}
      >
        <Text
          style={[
            textStyles.bodySmall,
            { marginBottom: spacing.sm, fontFamily: "monospace" },
          ]}
        >
          Phone: {state.phone}
        </Text>
        <Text
          style={[
            textStyles.bodySmall,
            { marginBottom: spacing.sm, fontFamily: "monospace" },
          ]}
        >
          Authenticated: {state.isAuthenticated ? "✓" : "✗"}
        </Text>
        <Text style={[textStyles.bodySmall, { fontFamily: "monospace" }]}>
          New User: {state.isNewUser ? "Yes" : "No"}
        </Text>
      </View>

      <View style={{ marginBottom: spacing.lg }}>
        <Text style={[textStyles.heading4, { marginBottom: spacing.sm }]}>
          Dashboard
        </Text>
        <Text style={textStyles.body}>
          Your main content and marketplace will be displayed here.
        </Text>
      </View>

      {state.isNewUser && (
        <View style={{ marginBottom: spacing.lg }}>
          <Text style={[textStyles.heading4, { marginBottom: spacing.sm }]}>
            Profile Setup
          </Text>
          <Text style={[textStyles.body, { marginBottom: spacing.md }]}>
            Complete your profile to access all features.
          </Text>
          <Button
            label="Complete Profile"
            variant="primary"
            size="md"
            fullWidth
            onPress={() => {
              /* TODO: Navigate to profile setup */
            }}
          />
        </View>
      )}

      <View style={{ marginTop: "auto", paddingBottom: spacing.lg }}>
        <Button
          label="Logout"
          variant="outline"
          size="md"
          fullWidth
          onPress={handleLogout}
        />
      </View>
    </Screen>
  );
}
