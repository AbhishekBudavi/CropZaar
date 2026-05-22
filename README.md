# CropZaar - Agricultural E-Commerce Platform

A modern React Native mobile application built with Expo for agricultural product trading and supply chain management.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Expo CLI: `npm install -g expo-cli`

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

3. **Run on device/emulator**
   - Android: Press `a`
   - iOS: Press `i`
   - Web: Press `w`
   - Expo Go: Scan QR code with Expo Go app

## 📋 Tech Stack

- **Framework**: React Native with Expo 55.0.25
- **Language**: TypeScript
- **Routing**: Expo Router (file-based)
- **Styling**: NativeWind 4.2.4 (Tailwind for React Native)
- **State Management**: Context API + useReducer
- **UI Components**: Custom components with accessibility features

## 📁 Project Structure

```
src/
├── app/                      # Expo Router screens
│   ├── _layout.tsx          # Root layout
│   ├── index.tsx            # App entry point
│   └── (auth)/              # Auth route group
│       ├── _layout.tsx      # Auth provider
│       ├── Login.tsx        # Phone login screen
│       └── otp.tsx          # OTP verification screen
│
├── components/
│   └── ui/                  # Reusable UI components
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Screen.tsx
│
├── constants/               # Design tokens
│   ├── colors.ts           # Color palette
│   ├── fonts.ts            # Typography
│   ├── spacing.ts          # Spacing scale
│   ├── radius.ts           # Border radius
│   ├── shadows.ts          # Shadow system
│   └── index.ts            # Unified exports
│
└── features/
    ├── auth/               # Auth feature module
    │   ├── components/     # Auth-specific components
    │   ├── hooks/          # Auth business logic
    │   ├── services/       # API calls
    │   ├── store/          # State management
    │   ├── types/          # TypeScript types
    │   └── constants/      # Auth constants
    └── dashboard/          # Dashboard feature (WIP)
```

## 🎨 Design System

CropZaar uses a centralized design token system:

```typescript
import { Colors, FontSizes, spacing, BorderRadius, Shadows } from "@/constants";

// Usage
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.lg,
    backgroundColor: Colors.background,
  },
});
```

### Color Palette

- **Primary**: Deep agri-green (#2D7A3A)
- **Accent**: Warm orange (#F97316)
- **Neutrals**: Full grayscale for flexibility

## 🔐 Authentication Flow

1. **Phone Entry**: User enters Indian phone number (6-9 series)
2. **OTP Send**: Backend generates 6-digit OTP
3. **OTP Verification**: User enters code, system validates
4. **Navigation**:
   - New users → Profile setup
   - Returning users → Home/Dashboard

## 🛠️ Development

### Code Quality

- TypeScript for type safety
- ESLint configuration available: `npx expo lint`
- Consistent naming conventions
- Clean architecture principles

### Component Guidelines

- Keep components focused and reusable
- Use proper accessibility attributes
- Implement proper error handling
- Clean up side effects in useEffect

### Testing

```bash
# Unit tests (set up with Jest)
npm test

# Linting
npx expo lint
```

## 📚 Key Files

- **Auth Service**: `src/features/auth/services/Authservice.tsx` - API integration
- **Auth Store**: `src/features/auth/store/Authstore.tsx` - State management
- **Auth Hooks**: `src/features/auth/hooks/` - Business logic
- **Design Tokens**: `src/constants/` - Unified design system

## 🚀 Building for Production

```bash
# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios

# Build web
npm run web
```

## 📖 Resources

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [NativeWind](https://nativewind.dev/)

## 🤝 Contributing

1. Follow the established folder structure
2. Use TypeScript for all new code
3. Keep components reusable and focused
4. Write meaningful commit messages
5. Test on both iOS and Android

## 📝 Notes

- API Base URL: Set via `EXPO_PUBLIC_API_URL` environment variable
- All design tokens are centralized in `src/constants/`
- Auth flow includes phone validation and OTP verification
- Responsive design for mobile-first approach

## 📧 Support

For issues or questions, please refer to the project documentation or reach out to the development team.

---

**Last Updated**: May 2026  
**Status**: Active Development
