/**
 * OtpInput
 * ─────────────────────────────────────────────────────────────────────────
 *
 * Renders a row of OTP_LENGTH digit boxes and owns the focus-management
 * logic between them.
 *
 * Focus rules:
 *   - Typing a digit → focus moves to the next empty box
 *   - Backspace on an empty box → focus moves back to the previous box
 *   - All filled → focus stays on the last box (ready for verify)
 *
 * Ref array pattern:
 *   We keep an array of TextInput refs internally.
 *   The parent never needs to know about focus — it just receives values.
 */

import React, { useCallback, useRef } from "react";
import type { TextInput } from "react-native";
import { View } from "react-native";
import { OTP_LENGTH } from "..";
import { OtpDigitInput } from "./Otpdigitinput";

interface OtpInputProps {
  digits: string[];
  onDigitChange: (digit: string, index: number) => void;
  onBackspace: (index: number) => void;
  hasError: boolean;
  editable?: boolean;
}

export function OtpInput({
  digits,
  onDigitChange,
  onBackspace,
  hasError,
  editable = true,
}: OtpInputProps) {
  // Hold a ref for each individual digit box
  const inputRefs = useRef<Array<TextInput | null>>(
    Array(OTP_LENGTH).fill(null),
  );

  const handleDigitChange = useCallback(
    (text: string, index: number) => {
      const digit = text.replace(/\D/g, "").slice(-1);
      onDigitChange(digit, index);

      // Auto-advance focus to the next empty box
      if (digit && index < OTP_LENGTH - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    },
    [onDigitChange],
  );

  const handleBackspace = useCallback(
    (index: number) => {
      onBackspace(index);
      // Move focus back to the previous box
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    },
    [onBackspace],
  );

  return (
    <View
      className="flex-row justify-between gap-sm"
      accessibilityLabel="OTP input row"
    >
      {Array.from({ length: OTP_LENGTH }).map((_, i) => (
        <OtpDigitInput
          key={i}
          ref={(el) => {
            inputRefs.current[i] = el;
          }}
          value={digits[i] ?? ""}
          onChangeText={(text) => handleDigitChange(text, i)}
          onBackspace={() => handleBackspace(i)}
          hasError={hasError}
          editable={editable}
        />
      ))}
    </View>
  );
}
