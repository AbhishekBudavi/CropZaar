/**
 * Profile Setup Screen — User Onboarding
 *
 * New users see this after OTP verification.
 * Collect user information:
 * - Full name
 * - Address/Location
 * - User type (buyer/seller)
 * - etc.
 *
 * Features:
 * - Proper scrolling on small devices
 * - Keyboard doesn't cover form fields
 * - Button always accessible
 * - Works on iOS & Android
 *
 * TODO:
 * - Implement form with validation
 * - Create updateProfile API call
 * - Add image picker for profile picture
 */

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AuthScrollContainer } from "@/features/auth/components/AuthScrollContainer";
import { Colors, spacing, textStyles, BorderRadius } from "@/constants";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";

export default function ProfileSetupScreen() {
  const [fullName, setFullName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleContinue = async () => {
    if (!fullName.trim()) {
      setError("Please enter your full name");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // TODO: Call API to update profile
      // const response = await updateProfile({ fullName });

      // For now, just navigate to home
      setTimeout(() => {
        router.replace("/(app)/home");
      }, 1000);
    } catch (err) {
      setError("Failed to setup profile. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <AuthScrollContainer backgroundColor="#FFFFFF">
      {/* Header */}
      <View style={{ marginBottom: spacing.xl, paddingHorizontal: spacing.lg, paddingTop: spacing.lg }}>
        <Text style={[textStyles.heading2, { marginBottom: spacing.sm }]}>
          Complete Your Profile
        </Text>
        <Text style={textStyles.body}>
          Tell us a bit about yourself to get started
        </Text>
      </View>

      {/* Form */}
      <View style={{ marginBottom: spacing.xl, paddingHorizontal: spacing.lg, gap: spacing.lg }}>
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
          editable={!isLoading}
          error={error}
        />

        {/* Additional fields can be added here */}
        <Input
          label="Address (Optional)"
          placeholder="Enter your address"
          editable={!isLoading}
          multiline
          numberOfLines={3}
        />
      </View>

      {/* Error Message */}
      {error && (
        <View style={{ backgroundColor: "#FFEBEE", borderRadius: BorderRadius.lg, paddingHorizontal: spacing.md, paddingVertical: spacing.sm, marginBottom: spacing.md, marginHorizontal: spacing.lg }}>
          <Text style={[textStyles.bodySmall, { color: "#C62828", fontWeight: "600" }]}>{error}</Text>
        </View>
      )}

      {/* CTA Section */}
      <View style={{ marginTop: "auto", paddingHorizontal: spacing.lg, paddingBottom: spacing.lg, gap: spacing.md }}>
        <Button
          label={isLoading ? "Setting up..." : "Continue"}
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isLoading}
          disabled={!fullName.trim() || isLoading}
          onPress={handleContinue}
        />

        <Text style={[textStyles.bodySmall, { textAlign: "center", color: Colors.text.muted }]}>
          You can skip this for now and update later in settings
        </Text>
      </View>
    </AuthScrollContainer>
  );
}
