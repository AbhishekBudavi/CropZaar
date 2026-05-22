/**
 * (auth) Group Layout
 *
 * Wraps every screen in the auth flow (login, otp, profile-setup, etc.)
 * with the AuthProvider so the store is available throughout.
 *
 * Using a route group means:
 *   - The auth screens share a provider
 *   - They are NOT shown in the navigation tab bar (no file named index.tsx here)
 *   - Adding a new auth screen = just create the file, no config needed
 */

import { AuthProvider } from "../../features/auth/store/Authstore";
import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProvider>
  );
}
