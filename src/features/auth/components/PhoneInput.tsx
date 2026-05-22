/**
 * PhoneInput
 *
 * Controlled text input for Indian mobile numbers.
 *
 * Visual spec (from design):
 *   - Outlined box with green border + floating label
 *   - Phone icon on the left
 *   - Numeric keyboard
 *   - Max 10 digits
 *
 * Why controlled?
 *   The parent (LoginCard → LoginScreen → useLogin) owns the value.
 *   This component is purely presentational — it fires onChange and
 *   the hook decides what to do.
 */

import { Ionicons } from "@expo/vector-icons";
import React, { useRef } from "react";
import { Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { inputStyles, Colors, spacing } from "@/constants";

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  error?: string | null;
  /** Forwarded to the underlying TextInput */
  editable?: boolean;
}

export function PhoneInput({
  value,
  onChangeText,
  error,
  editable = true,
}: PhoneInputProps) {
  const inputRef = useRef<TextInput>(null);
  const hasValue = value.length > 0;
  const hasError = !!error;

  return (
    <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
      <View style={inputStyles.container}>
        {/* Floating label */}
        <Text
          style={[
            inputStyles.label,
            {
              position: "absolute",
              top: -9,
              left: spacing.lg,
              zIndex: 10,
              backgroundColor: Colors.surfaceCard,
              paddingHorizontal: spacing.xs,
              color: hasError ? "#D32F2F" : Colors.input.label,
            },
          ]}
        >
          Enter Mobile Number
        </Text>

        {/* Input row */}
        <View
          style={[
            inputStyles.inputBox,
            hasError && inputStyles.inputBoxError,
          ]}
        >
          <Ionicons
            name="phone-portrait-outline"
            size={20}
            color={Colors.input.icon}
            style={{ marginRight: spacing.lg }}
          />

          <TextInput
            ref={inputRef}
            value={value}
            onChangeText={onChangeText}
            placeholder="9999999999"
            placeholderTextColor={Colors.input.placeholder}
            keyboardType="numeric"
            maxLength={10}
            returnKeyType="done"
            editable={editable}
            style={inputStyles.input}
            accessibilityLabel="Mobile number input"
            accessibilityHint="Enter your 10 digit Indian mobile number"
          />
        </View>

        {/* Error message */}
        {hasError && (
          <Text
            style={inputStyles.error}
            accessibilityRole="alert"
          >
            {error}
          </Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
