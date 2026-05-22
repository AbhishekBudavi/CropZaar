/**
 * OtpDigitInput
 * ─────────────────────────────────────────────────────────────────────────
 *
 * A single digit input box in the OTP row.
 *
 * Design spec (from CropZaar pattern):
 *   - Square box, green border when filled, grey when empty
 *   - Large centred monospace digit
 *   - Red border + shake animation on error
 *   - Numeric keyboard
 *
 * Why not one TextInput with maxLength=6?
 *   Individual boxes give visual confirmation per digit,
 *   support backspace-to-previous-box, and feel native on mobile.
 *
 * Ref forwarding:
 *   The parent (OtpInput) holds an array of refs so it can
 *   programmatically focus the next/previous box on each keystroke.
 */

import React, { forwardRef } from "react";
import {
  TextInput,
  type NativeSyntheticEvent,
  type TextInputKeyPressEventData,
} from "react-native";
import { Colors, FontWeights, BorderRadius } from "@/constants";

interface OtpDigitInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onBackspace: () => void;
  hasError: boolean;
  editable?: boolean;
}

const BOX_SIZE = 52;

export const OtpDigitInput = forwardRef<TextInput, OtpDigitInputProps>(
  function OtpDigitInput(
    { value, onChangeText, onBackspace, hasError, editable = true },
    ref,
  ) {
    const isFilled = value.length === 1;

    const borderColor = hasError ? "#D32F2F" : isFilled ? Colors.primary : Colors.grey300;

    const handleKeyPress = (
      e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    ) => {
      if (e.nativeEvent.key === "Backspace" && !value) {
        onBackspace();
      }
    };

    return (
      <TextInput
        ref={ref}
        value={value}
        onChangeText={onChangeText}
        onKeyPress={handleKeyPress}
        keyboardType="numeric"
        maxLength={1}
        selectTextOnFocus
        editable={editable}
        style={{
          width: BOX_SIZE,
          height: BOX_SIZE,
          borderWidth: 1.5,
          borderColor,
          borderRadius: BorderRadius.md,
          backgroundColor: Colors.surfaceCard,
          fontSize: 22,
          fontWeight: FontWeights.bold,
          textAlign: "center",
          color: Colors.text.heading,
        }}
        textAlign="center"
        accessibilityLabel={`OTP digit ${value ? value : "empty"}`}
      />
    );
  },
);
  },
);
