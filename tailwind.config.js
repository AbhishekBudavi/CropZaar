/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx",
    "./app/**/*.{js,jsx,ts,tsx}",
    "src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // ─── Colors (CropZaar Design System) ────────────────────────────────
      colors: {
        // Brand colors
        primary: "#2D7A3A",
        "primary-dark": "#1B5E20",
        "primary-light": "#4CAF50",
        accent: "#F97316",
        "accent-dark": "#EA6C00",

        // Neutrals
        grey: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          300: "#E0E0E0",
          500: "#9E9E9E",
          700: "#616161",
          900: "#212121",
        },

        // Semantic surfaces
        background: "#FFFFFF",
        "surface-card": "#FFFFFF",
        "slider-bg": "#EAF7EC",

        // Text colors
        "text-heading": "#1A1A1A",
        "text-body": "#333333",
        "text-muted": "#9E9E9E",
        "text-inverse": "#FFFFFF",
        "text-error": "#D32F2F",

        // Input
        "input-border": "#2D7A3A",
        "input-border-focus": "#1B5E20",
        "input-placeholder": "#BDBDBD",
        "input-bg": "#FFFFFF",

        // Button
        "button-primary-bg": "#2D7A3A",
        "button-primary-text": "#FFFFFF",
        "button-primary-disabled": "#B0BEB5",

        // Dots
        "dot-active": "#F97316",
        "dot-inactive": "#E0E0E0",
      },

      // ─── Spacing (8px base unit) ──────────────────────────────────────
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        "3xl": "48px",
        "4xl": "56px",
        "5xl": "64px",
      },

      // ─── Border Radius ────────────────────────────────────────────────
      borderRadius: {
        none: "0px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
        full: "9999px",
      },

      // ─── Font Sizes ───────────────────────────────────────────────────
      fontFamily: {
        regular: ["Poppins-Regular"],

        medium: ["Poppins-Medium"],

        semiBold: ["Poppins-SemiBold"],

        bold: ["Poppins-Bold"],
      },

      fontSize: {
        xs: ["11px", "1.15"],
        sm: ["13px", "1.15"],
        md: ["15px", "1.4"],
        base: ["16px", "1.4"],
        lg: ["18px", "1.4"],
        xl: ["22px", "1.15"],
        "2xl": ["28px", "1.15"],
        "3xl": ["36px", "1.15"],
        "4xl": ["44px", "1.4"],
      },

      // ─── Font Weights ─────────────────────────────────────────────────
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        "extra-bold": "800",
      },

      // ─── Shadows ──────────────────────────────────────────────────────
      boxShadow: {
        sm: "0px 1px 2px rgba(0, 0, 0, 0.08)",
        md: "0px 3px 4px rgba(0, 0, 0, 0.12)",
        lg: "0px 6px 8px rgba(0, 0, 0, 0.15)",
        xl: "0px 10px 12px rgba(0, 0, 0, 0.2)",
        card: "0px 3px 4px rgba(0, 0, 0, 0.12)",
        button: "0px 3px 4px rgba(0, 0, 0, 0.12)",
      },

      // ─── Line Height ──────────────────────────────────────────────────
      lineHeight: {
        tight: "1.15",
        normal: "1.4",
        relaxed: "1.65",
      },
    },
  },
  plugins: [],
};
