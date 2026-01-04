# High-End Icon Dock Footer

## Overview

A polished icon dock footer with outline icons and **hover-revealed labels** that matches the Glass Deck aesthetic.

## Features

✨ **Outline icons** - Clean Lucide React icons  
🎯 **Hover reveal** - Labels fade in and slide up on hover  
💎 **Glass card** - Matches the rest of the deck  
📱 **Responsive** - Perfect spacing on all screens  
♿ **Accessible** - ARIA labels, keyboard navigation  

## Component

**File:** `src/components/ContactFooter.tsx`

### Icons Included

1. **Email** - `Mail` icon → `mailto:` link
2. **UK Phone** - `Phone` icon → UK number
3. **US Phone** - `Phone` icon → US number
4. **LinkedIn** - `Linkedin` icon → Profile
5. **Website** - `Globe` icon → Personal site
6. **YouTube** - `Youtube` icon → Channel

## Styling

### Container

```tsx
className="
  mx-auto w-fit
  rounded-2xl
  bg-white/60
  backdrop-blur-xl
  border border-white/40
  shadow-md
  px-6 py-4
"
```

**Effect:**
- Frosted glass background
- Backdrop blur matches cards
- Soft shadow for subtle depth
- Auto-width to fit content

### Icons

```tsx
className="h-5 w-5"
```

**Color:**
- Default: `text-slate-600`
- Hover: `text-blue-600`
- Smooth transition

### Labels (Hover Reveal)

```tsx
className="
  mt-2
  font-mono
  text-[10px]
  tracking-[0.22em]
  text-slate-500
  opacity-0
  translate-y-1
  group-hover:opacity-100
  group-hover:translate-y-0
  transition
"
```

**Effect:**
- Hidden by default (`opacity-0`)
- Positioned slightly below (`translate-y-1`)
- On hover: fades in and slides up
- Monospace, uppercase, extra letter-spacing
- Micro font size (10px)

## Layout

```
[Divider line - 1px subtle]

[Glass Card Container]
  ┌─────────────────────────────────┐
  │  📧  ☎️  ☎️  🔗  🌐  📺       │
  │  (hover for labels)              │
  └─────────────────────────────────┘
```

**On hover:**
```
  📧          ☎️          ☎️
EMAIL    UK PHONE    US PHONE
```

Labels appear beneath each icon with smooth fade + slide transition.

## Spacing

**Container:**
- Top margin: `mt-16 md:mt-20` (64px / 80px)
- Padding: `py-10 md:py-14` (40px / 56px)

**Icons:**
- Gap: `gap-6 md:gap-8` (24px / 32px)
- Responsive spacing

**Divider:**
- 1px height
- `bg-slate-900/10` (subtle)
- Full width within max-w-5xl

## Responsive Behavior

**Mobile (< 768px):**
- Icons: 24px gap
- Card padding: 24px horizontal
- Smaller vertical spacing

**Desktop (≥ 768px):**
- Icons: 32px gap
- Card padding: 24px horizontal (same)
- Larger vertical spacing

**All screens:**
- Icons remain same size (20px × 20px)
- Labels same size (10px)
- Container auto-fits content

## Accessibility

**ARIA Labels:**
```tsx
aria-label={label}
```
Each icon has descriptive label for screen readers.

**Keyboard Navigation:**
- Tab through all icons
- Enter/Space to activate
- Focus visible states (default Tailwind)

**External Links:**
```tsx
target="_blank"
rel="noreferrer"
```
Safely opens LinkedIn, Website, YouTube in new tabs.

**Phone Links:**
```tsx
href="tel:+447961930316"
```
Triggers phone dialer on mobile devices.

## Customization

### Change Icon Size

```tsx
// Smaller icons
<Icon className="h-[18px] w-[18px]" />

// Larger icons
<Icon className="h-6 w-6" />
```

### More Blur

```tsx
backdrop-blur-xl  →  backdrop-blur-2xl
```

### Less Opacity

```tsx
bg-white/60  →  bg-white/50
```

### Subtle Hover Color

```tsx
hover:text-blue-600  →  hover:text-slate-900
```

### Different Icons

Import from `lucide-react`:
```tsx
import { Github, Twitter, Instagram } from "lucide-react";
```

[Browse all icons](https://lucide.dev/icons/)

## Adding More Icons

1. Import icon from `lucide-react`
2. Add to `items` array:

```tsx
{
  label: "GITHUB",
  href: "https://github.com/yourusername",
  Icon: Github,
  external: true,
}
```

## Removing Icons

Simply remove the item from the `items` array in `ContactFooter.tsx`.

## Animation Details

**Transition:**
- Duration: 150ms (default)
- Easing: ease (default)
- Properties: opacity, transform, color

**Label Movement:**
- Start: `translate-y-1` (4px down)
- End: `translate-y-0` (original position)
- Creates subtle upward slide

**Label Fade:**
- Start: `opacity-0` (invisible)
- End: `opacity-100` (fully visible)

**Combined effect:**
Label fades in while sliding up = polished reveal

## Motion Preferences

Respects `prefers-reduced-motion`:
```css
/* In globals.css */
@media (prefers-reduced-motion: reduce) {
  * {
    transition-duration: 0.01ms !important;
  }
}
```

Users who prefer reduced motion see instant changes instead of animations.

## Integration

**Page:** `src/app/page.tsx`

**Position:** After all content, before closing `</main>`

**Import:**
```tsx
import ContactFooter from '@/components/ContactFooter';
```

**Usage:**
```tsx
<ContactFooter />
```

## Why This Works

1. **Visual Hierarchy** - Footer is distinct but cohesive
2. **Progressive Disclosure** - Labels appear when needed
3. **Glass Consistency** - Matches deck aesthetic
4. **Icon Recognition** - Universal symbols (mail, phone, etc.)
5. **Micro Typography** - Uppercase monospace = technical precision
6. **Hover Delight** - Smooth reveal creates engagement
7. **Mobile Friendly** - Large touch targets (40px+ with padding)

## Before & After

**Before:**
- Text links in a row
- Always visible
- No visual interest

**After:**
- Icon dock in glass card
- Labels on hover
- High-end, executive feel
- Matches glass deck aesthetic

## Design Philosophy

The icon dock embodies:
- **Minimalism** - Icons alone when not in use
- **Clarity** - Labels reveal when hovering
- **Consistency** - Glass card matches page style
- **Professionalism** - Clean outlines, no clutter
- **Precision** - Monospace labels, exact spacing

---

**This footer completes your glass deck portfolio with a polished, interactive element that feels both modern and professional.** ✨

