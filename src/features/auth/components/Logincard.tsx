import { authStyles, textStyles } from "@/constants";
import React from "react";
import { Text, View } from "react-native";
import { ContinueButton } from "./ContinueButton";
import { PhoneInput } from "./PhoneInput";

interface LoginCardProps {
  phoneNumber: string;
  onPhoneChange: (text: string) => void;
  onContinue: () => void;
  isLoading: boolean;
  isButtonEnabled: boolean;
  error: string | null;
}

export function LoginCard({
  phoneNumber,
  onPhoneChange,
  onContinue,
  isLoading,
  isButtonEnabled,
  error,
}: LoginCardProps) {
  // No KeyboardAvoidingView here — screen-level KAV handles this
  return (
    <View style={authStyles.loginCard}>
      {/* Header */}
      <View style={authStyles.loginCardHeader}>
        <Text style={textStyles.heading3}>Sign In</Text>
        <Text style={textStyles.body}>Enter Your Mobile Number</Text>
      </View>

      {/* Form */}
      <View style={authStyles.loginCardForm}>
        <PhoneInput
          value={phoneNumber}
          onChangeText={onPhoneChange}
          error={error}
          editable={!isLoading}
        />

        <ContinueButton
          onPress={onContinue}
          isLoading={isLoading}
          disabled={!isButtonEnabled}
        />
      </View>
    </View>
  );
}
