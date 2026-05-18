# Design Token System

A professional, scalable design token system for CropZaar built with TypeScript and optimized for NativeWind.

## 📋 Overview

Design tokens are a single source of truth for all design decisions in your app. Instead of hardcoding colors, spacing, and typography throughout your codebase, tokens centralize these values for consistency and maintainability.

### What's Included

- **colors.ts** - Color palette + semantic color aliases
- **spacing.ts** - 8px-based spacing scale
- **radius.ts** - Border radius values for different components
- **fonts.ts** - Typography scales with preset compositions
- **index.ts** - Unified exports for easy importing

---

## 🎨 Why Design Tokens Matter

### 1. **Consistency at Scale**

When you have 100+ screens and components, manual color/spacing management becomes impossible. Tokens ensure every green button is exactly the same shade.

### 2. **Easy Rebranding**

Change `primary: '#2ECC71'` to `'#FF6B6B'` once, and your entire app updates. No hunting through 50 files.

### 3. **Team Alignment**

Designers and developers speak the same language: "use `primary` for CTAs" instead of debating hex codes.

### 4. **Accessibility**

Centralize color contrast checks, WCAG compliance, and dark mode support in one place.

### 5. **Reduced Bugs**

Typos in magic strings (`#FF8C42` vs `#FF8C43`) are caught at compile time with TypeScript.

---

## 👨‍💼 How Senior Developers Use Tokens

### Principle 1: Semantic Naming

**Bad:** `blue: '#3498DB'`, `darkGray: '#333333'`  
**Good:** `primary: '#2ECC71'`, `textPrimary: '#1A1A1A'`

Semantic names describe _purpose_, not _appearance_. If design changes and "primary" becomes orange, the code doesn't need updating.

### Principle 2: Two-Layer System

- **Base tokens** (`colors.primary`, `spacing.md`) - Raw design values
- **Semantic tokens** (`semanticColors.button.primary`, `semanticSpacing.padding.card`) - Context-specific usage

This allows flexibility: a button can use `semanticColors.button.primary` (reusable logic) while still following brand guidelines.

### Principle 3: Type Safety with TypeScript

```typescript
import { colors, semanticColors } from "@/constants/design-tokens";

// ✅ TypeScript catches typos
const buttonColor = colors.primary;

// ❌ Error: Property 'primariy' does not exist
const badColor = colors.primariy;
```

### Principle 4: Avoid Magic Numbers

```typescript
// ❌ Bad - what is 24?
<View style={{ marginTop: 24, paddingLeft: 16 }}>

// ✅ Good - intent is clear
<View style={{ marginTop: semanticSpacing.gap.lg, paddingLeft: semanticSpacing.padding.screen }}>
```

---

## 📈 Scaling Tokens for Large Apps

### 1. **Create Theme Variants**

```typescript
// tokens/themes/light.ts
export const lightTheme = {
  colors: {
    /* light colors */
  },
  spacing: {
    /* same across themes */
  },
  radius: {
    /* same across themes */
  },
};

// tokens/themes/dark.ts
export const darkTheme = {
  colors: {
    /* dark colors */
  },
};
```

### 2. **Add Responsive Breakpoints**

```typescript
// tokens/breakpoints.ts
export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
};

// Use with responsive utilities
const isMobile = screenWidth < breakpoints.tablet;
const spacing = isMobile ? semanticSpacing.gap.md : semanticSpacing.gap.lg;
```

### 3. **Organize by Features**

As your app grows, nest tokens logically:

```
design-tokens/
  ├── core/           # Base system tokens
  │   ├── colors.ts
  │   ├── spacing.ts
  │   └── radius.ts
  ├── themes/         # Theme variants (light/dark)
  │   ├── light.ts
  │   └── dark.ts
  ├── components/     # Component-specific tokens
  │   ├── button.ts
  │   ├── input.ts
  │   └── card.ts
  └── index.ts        # Main export
```

### 4. **Use Configuration Files**

For large teams, consider a `design-tokens.json` that tools can generate:

```json
{
  "colors": {
    "primary": { "value": "#2ECC71", "description": "Primary action color" }
  }
}
```

Tools like [Figma Tokens](https://www.figmatokens.com/) sync this to code automatically.

---

## 🎯 Using Tokens with NativeWind

NativeWind is Tailwind CSS for React Native. Design tokens integrate seamlessly:

### 1. **Direct Component Usage**

```typescript
import { colors, typography } from '@/constants/design-tokens';
import { View, Text } from 'react-native';

export const LoginButton = () => (
  <View style={{
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radius.md
  }}>
    <Text style={{
      ...typography.button,
      color: colors.white
    }}>
      Login
    </Text>
  </View>
);
```

### 2. **Extend Tailwind Config**

Update [tailwind.config.js](../../tailwind.config.js):

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",
        "primary-dark": "#27AE60",
        "primary-light": "#D5F4E6",
        accent: "#FF8C42",
        "accent-light": "#FFE4CC",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },
    },
  },
};
```

### 3. **Use Tailwind Classes**

```typescript
import { View, Text } from 'react-native';

export const Card = ({ children }) => (
  <View className="bg-white rounded-lg p-lg shadow-sm">
    {children}
  </View>
);

export const PrimaryButton = ({ label }) => (
  <View className="bg-primary rounded-md px-md py-md">
    <Text className="text-white font-semibold text-md">{label}</Text>
  </View>
);
```

### 4. **Hybrid Approach (Recommended)**

Use both tokens and Tailwind for flexibility:

```typescript
// Tailwind for simple styles
<View className="flex gap-md p-lg" />

// Tokens for complex logic
<View style={{
  backgroundColor: isDarkMode ? colors.backgroundAlt : colors.background,
  borderColor: hasError ? colors.error : colors.border,
}} />
```

---

## 📍 Should Tokens Stay in `tsconfig` or Separate Files?

### Option 1: **Separate Files** (RECOMMENDED) ✅

**Files:** `src/constants/design-tokens/` (what we've created)

**Pros:**

- ✅ Clean, organized structure
- ✅ Easy to share tokens between platforms (web, mobile)
- ✅ Separate concerns (design ≠ TypeScript config)
- ✅ Version control friendly
- ✅ Can generate from Figma, Design Systems tools
- ✅ Runtime access (tokens can be dynamic)

**Cons:**

- ❌ Requires importing in every file
- ❌ Slightly more boilerplate

**Use when:** Building production apps, teams of 2+, planning to scale

### Option 2: **TypeScript Path Aliases** (tsconfig.json)

**Setup:**

```json
{
  "compilerOptions": {
    "paths": {
      "@/constants/design-tokens": ["src/constants/design-tokens/index.ts"]
    }
  }
}
```

**Result:**

```typescript
import { colors, spacing } from "@/constants/design-tokens";
// Instead of:
import { colors, spacing } from "../../../constants/design-tokens";
```

**This is orthogonal** - Use it WITH separate files, not instead of.

### Option 3: **TypeScript Const Assertions in tsconfig.json**

**Not recommended.** `tsconfig.json` is for TypeScript compilation config, not data storage. Mixing concerns makes maintenance harder.

### 🎯 Best Practice

```
✅ Create separate token files
✅ Use path aliases in tsconfig for clean imports
✅ Export tokens from index.ts
✅ Use TypeScript strict mode to catch errors
```

---

## 💻 Usage Examples

### In Components

```typescript
import { colors, spacing, radius, typography } from '@/constants/design-tokens';
import { View, Text, Pressable } from 'react-native';

export const LoginScreen = () => (
  <View style={{
    flex: 1,
    backgroundColor: colors.backgroundInverted,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  }}>
    <Text style={{
      ...typography.heading.h1,
      color: colors.textPrimary,
      marginBottom: spacing.xl,
    }}>
      Welcome to CropZaar
    </Text>

    <View style={{
      backgroundColor: colors.white,
      borderRadius: radius.lg,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      borderWidth: 1,
      borderColor: colors.border,
    }}>
      <Text style={{
        ...typography.label,
        color: colors.textSecondary,
        marginBottom: spacing.sm,
      }}>
        Email
      </Text>
      {/* Input field */}
    </View>

    <Pressable style={{
      backgroundColor: colors.primary,
      borderRadius: radius.md,
      paddingVertical: spacing.md,
      paddingHorizontal: spacing.lg,
      alignItems: 'center',
    }}>
      <Text style={{
        ...typography.button,
        color: colors.white,
      }}>
        Sign In
      </Text>
    </Pressable>
  </View>
);
```

### In Custom Hooks

```typescript
// hooks/useThemedStyles.ts
import { colors, spacing } from "@/constants/design-tokens";

export const useThemedStyles = (isDarkMode: boolean) => ({
  background: isDarkMode ? colors.backgroundAlt : colors.background,
  text: colors.textPrimary,
  border: colors.border,
});
```

### In Constants

```typescript
// constants/errorMessages.ts
import { colors } from "@/constants/design-tokens";

export const ERROR_STYLES = {
  color: colors.error,
  backgroundColor: colors.bg.error,
};
```

---

## 🚀 Next Steps

1. **Update tailwind.config.js** with your tokens
2. **Create reusable components** using tokens
3. **Set up path aliases** for clean imports
4. **Document component variants** that use tokens
5. **Consider Storybook** for component documentation

---

## 📚 Tools & Resources

- [Figma Tokens](https://www.figmatokens.com/) - Sync tokens from Figma
- [Tokens Studio](https://tokens.studio/) - Design system management
- [Storybook](https://storybook.js.org/) - Component documentation
- [NativeWind Docs](https://www.nativewind.dev/)
- [Tailwind Config Reference](https://tailwindcss.com/docs/configuration)

---

## 🎓 Key Takeaways

| Concept              | Why It Matters                                     |
| -------------------- | -------------------------------------------------- |
| **Semantic Naming**  | Tokens describe purpose, not appearance            |
| **Two-Layer System** | Base + Semantic tokens = flexibility + consistency |
| **Type Safety**      | TypeScript catches token typos at compile time     |
| **Scalability**      | Easy to add themes, responsive variants, etc.      |
| **Maintainability**  | Change design globally from one place              |
| **Team Alignment**   | Everyone uses the same token names                 |

---

Happy coding! 🚀
