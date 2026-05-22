/**
 * App Layout — Main Application
 *
 * This layout wraps the authenticated application screens.
 * Features:
 * - Bottom tab navigation for main sections
 * - Screens for dashboard, marketplace, profile, etc.
 *
 * Screens in this group require authentication.
 * If user is logged out, this group should not be accessible.
 */

import { Stack } from "expo-router";
import React from "react";

export default function AppLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" />
      {/* Add more authenticated screens here */}
    </Stack>
  );
}
