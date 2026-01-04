# Francesca Tabor | AI Portfolio

A modern "Glass Deck" portfolio built with Next.js 15 and Tailwind CSS v4.

## Design Philosophy

**Glass Deck Aesthetic**
- Dual-layer animated gradient background
- Frosted glass cards with backdrop blur
- Executive typography (Inter + JetBrains Mono)
- Subtle depth and microinteractions
- Clean, scannable hierarchy

## Quick Start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 📚 Documentation

All documentation is organized in the `/docs` folder:

### 🚀 Getting Started
- **[START_HERE.md](docs/START_HERE.md)** - Quick introduction and overview
- **[SETUP.md](docs/SETUP.md)** - Installation and setup guide
- **[QUICK_REFERENCE.md](docs/QUICK_REFERENCE.md)** - Command cheat sheet

### 🎨 Design System
- **[DUAL_LAYER_GRADIENT.md](docs/DUAL_LAYER_GRADIENT.md)** - Animated background system
- **[GLASS_DECK_DESIGN.md](docs/GLASS_DECK_DESIGN.md)** - Complete design tokens
- **[ICON_DOCK_FOOTER.md](docs/ICON_DOCK_FOOTER.md)** - Footer component docs
- **[VISUAL_SHOWCASE.md](docs/VISUAL_SHOWCASE.md)** - Complete feature showcase

### 🏗️ Architecture & Technical
- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - Component structure
- **[TAILWIND_V4_SETUP.md](docs/TAILWIND_V4_SETUP.md)** - Tailwind v4 configuration
- **[PROJECT_TREE.md](docs/PROJECT_TREE.md)** - Complete file structure

### 📋 Project Information
- **[PROJECT_SUMMARY.md](docs/PROJECT_SUMMARY.md)** - Requirements & deliverables
- **[FILE_INVENTORY.md](docs/FILE_INVENTORY.md)** - Complete file inventory
- **[CHECKLIST.md](docs/CHECKLIST.md)** - Pre-launch checklist

### 🎯 Design Evolution
- **[GLASS_DECK_TRANSFORMATION.md](docs/GLASS_DECK_TRANSFORMATION.md)** - Initial glass deck
- **[ICON_DOCK_COMPLETE.md](docs/ICON_DOCK_COMPLETE.md)** - Footer addition
- **[AMBIENT_GRADIENT_COMPLETE.md](docs/AMBIENT_GRADIENT_COMPLETE.md)** - Gradient enhancement
- **[DESIGN_COMPARISON.md](docs/DESIGN_COMPARISON.md)** - Style comparisons

### 📖 Reference
- **[DOCS_INDEX.md](docs/DOCS_INDEX.md)** - Complete documentation index
- **[VISUAL_GUIDE.md](docs/VISUAL_GUIDE.md)** - Previous editorial design

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (with `@tailwindcss/postcss`)
- **Fonts:** Inter (sans) + JetBrains Mono (mono)
- **Language:** TypeScript
- **Components:** React 19 Server Components

## Key Features

✅ **Dual-layer animated gradient** - Scale + translate transforms  
✅ **Counter-directional motion** - Layers breathe against each other  
✅ Frosted glass cards with blur effects  
✅ Subtle noise texture overlay  
✅ Inter font family (professional)  
✅ JetBrains Mono for technical labels  
✅ Microinteractions (hover lift, transitions)  
✅ **Icon dock footer** with hover-revealed labels  
✅ Responsive (mobile-first)  
✅ Accessible (keyboard nav, focus states)  
✅ Fast (Server Components, minimal JS)  

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Dual-layer gradient + styles
├── components/
│   ├── GlassCard.tsx       # Reusable frosted card
│   ├── ContactFooter.tsx   # Icon dock with hover labels
│   └── [legacy components] # Previous editorial components
└── config/
    └── profile.ts          # All content in one place

docs/                       # All documentation
```

## Customization

### Update Content
Edit `src/config/profile.ts`:
```typescript
export const profileData: Profile = {
  name: 'Your Name',
  descriptor: 'Your tagline',
  // ... all your projects
};
```

### Adjust Gradient Animation

**More movement:**
```css
/* In src/app/globals.css */
animation: gradientDriftA 40s ease-in-out infinite;
```

**More subtle:**
```css
animation: gradientDriftA 80s ease-in-out infinite;
opacity: 0.75;
```

See [DUAL_LAYER_GRADIENT.md](docs/DUAL_LAYER_GRADIENT.md) for complete tuning guide.

### Adjust Glass Effect

**In `src/components/GlassCard.tsx`:**
```tsx
// Less glassy:
bg-white/65 → bg-white/50
backdrop-blur-xl → backdrop-blur-lg

// Softer shadow:
shadow-lg → shadow-md
```

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel
```

## Performance

- **Bundle size:** ~107KB first load
- **Static generation:** Pre-rendered at build
- **Font loading:** Self-hosted (@fontsource)
- **Images:** Next.js optimized
- **Animations:** Hardware-accelerated CSS

## Accessibility

✅ Semantic HTML  
✅ Keyboard navigation  
✅ Focus visible states  
✅ WCAG AA color contrast  
✅ Respects prefers-reduced-motion  
✅ External links open in new tab  

## Browser Support

- Chrome 90+ ✅
- Safari 14+ ✅
- Firefox 88+ ✅
- Edge 90+ ✅

---

## Need Help?

1. **Quick start:** Read [START_HERE.md](docs/START_HERE.md)
2. **Design details:** Check [GLASS_DECK_DESIGN.md](docs/GLASS_DECK_DESIGN.md)
3. **All docs:** See [DOCS_INDEX.md](docs/DOCS_INDEX.md)

---

**Built with modern web technologies for a polished, professional presentation.** 🎯
