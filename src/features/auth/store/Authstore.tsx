/**
 * Auth Feature — State Store (Context + useReducer)
 *
 * Why not Redux/Zustand for auth?
 * For a single feature, a Context + useReducer is perfectly sufficient,
 * zero extra dependencies, and easy to swap later.
 *
 * Architecture rule:
 *   Components read from useAuthStore().
 *   Only the useLogin hook dispatches actions.
 *   Services never touch the store.
 */

import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { AuthAction, AuthState } from "..";

// ─── Initial State ────────────────────────────────────────────────────────
const initialState: AuthState = {
  phone: null,
  sessionId: null,
  accessToken: null,
  refreshToken: null,
  isNewUser: false,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// ─── Reducer ──────────────────────────────────────────────────────────────
function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_PHONE":
      return { ...state, phone: action.payload };

    case "LOGIN_START":
      return { ...state, isLoading: true, error: null };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        sessionId: action.payload.sessionId,
      };

    case "LOGIN_FAILURE":
      return { ...state, isLoading: false, error: action.payload };

    case "AUTH_LOADING_START":
      return { ...state, isLoading: true, error: null };

    case "VERIFY_OTP_SUCCESS":
      return {
        ...state,
        isLoading: false,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        isNewUser: action.payload.isNewUser,
        isAuthenticated: true,
        error: null,
      };

    case "AUTH_FAILURE":
      return { ...state, isLoading: false, error: action.payload };

    case "RESEND_OTP_SUCCESS":
      return { ...state, sessionId: action.payload.sessionId, error: null };

    case "LOGOUT":
      return initialState;

    case "CLEAR_ERROR":
      return { ...state, error: null };

    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────
interface AuthContextValue {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────
export function useAuthStore(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthStore must be used inside <AuthProvider>");
  }
  return ctx;
}
