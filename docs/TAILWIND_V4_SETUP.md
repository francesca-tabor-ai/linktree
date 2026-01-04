# Tailwind CSS v4 Setup

This project uses **Tailwind CSS v4** with the official PostCSS plugin.

## Configuration Files

### 1. `postcss.config.mjs`
```javascript
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

**Important:** Don't include `tailwindcss: {}` here anymore. Use `@tailwindcss/postcss` instead.

### 2. `src/app/globals.css`
```css
@import "tailwindcss";
```

**Important:** Use `@import "tailwindcss";` instead of the old v3 directives:
- ~~`@tailwind base;`~~
- ~~`@tailwind components;`~~
- ~~`@tailwind utilities;`~~

### 3. `package.json` (devDependencies)
```json
{
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.18",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.18"
  }
}
```

## What Changed from v3 to v4

### No Longer Needed
These packages are **removed** in v4:
- `autoprefixer` - Built into Tailwind v4
- `postcss-import` - Built into Tailwind v4

### PostCSS Plugin
- **v3:** Used `tailwindcss` directly in PostCSS config
- **v4:** Use `@tailwindcss/postcss` instead

### CSS Import
- **v3:** Used `@tailwind` directives
- **v4:** Use `@import "tailwindcss";`

## Installation

If starting fresh:
```bash
npm install -D tailwindcss @tailwindcss/postcss postcss
```

If upgrading from v3:
```bash
# Install v4 packages
npm install -D tailwindcss@latest @tailwindcss/postcss@latest

# Remove v3-only packages
npm uninstall autoprefixer postcss-import
```

## Tailwind Config

The `tailwind.config.ts` file works the same way in v4:
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Your customizations
    },
  },
};

export default config;
```

## CSS Linter Warnings

The `@apply` directive might show CSS linter warnings. This is expected and safe to ignore. To suppress:

Add to `.vscode/extensions.json`:
```json
{
  "settings": {
    "css.lint.unknownAtRules": "ignore"
  }
}
```

## References

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [PostCSS Plugin Documentation](https://tailwindcss.com/docs/installation/using-postcss)
- [Migration Guide](https://tailwindcss.com/docs/upgrade-guide)

## Verification

To verify your setup is correct:

1. **PostCSS config uses `@tailwindcss/postcss`:**
```bash
cat postcss.config.mjs
# Should show: "@tailwindcss/postcss": {}
```

2. **CSS uses `@import`:**
```bash
head -n 1 src/app/globals.css
# Should show: @import "tailwindcss";
```

3. **Packages installed:**
```bash
npm list tailwindcss @tailwindcss/postcss
# Should show both v4.x versions
```

4. **Dev server runs without errors:**
```bash
npm run dev
# Should start successfully
```

---

**Your project is now using Tailwind CSS v4!** ✨

