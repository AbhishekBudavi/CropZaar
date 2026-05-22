/**
 * app/index.tsx
 *
 * Entry point.  Immediately redirects to the login screen.
 * Once you add authentication persistence (e.g. SecureStore token check),
 * swap the redirect target to your main app screen.
 */

import { Redirect } from "expo-router";

export default function Index() {
  // TODO: check stored token → if valid, redirect to '/(app)/home'
  return <Redirect href="/(auth)/Login" />;
}
