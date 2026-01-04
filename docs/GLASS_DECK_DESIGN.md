# Glass Deck UI - Design System

## Overview

This portfolio uses a modern "Glass Deck" aesthetic featuring frosted glass cards, gradient backgrounds, and executive typography.

## Design Tokens

### Colors

**Background Gradient:**
```css
linear-gradient(180deg, #f6f7fb 0%, #eef1f6 100%)
```

**Glass Card:**
- Background: `bg-white/60` (60% white opacity)
- Backdrop blur: `backdrop-blur-xl`
- Border: `border-white/40` (40% white border)
- Shadow: `shadow-lg`

**Text Colors:**
- Primary: `#0f172a` (slate-900)
- Secondary: `#475569` (slate-600)
- Muted: `#64748b` (slate-500)
- Links: `#2563eb` (blue-600)

### Typography

**Fonts:**
- Sans: Inter (400, 500, 600)
- Mono: JetBrains Mono (400, 500)

**Scale:**
- Hero: `text-4xl md:text-5xl` (36px / 48px)
- Section Title: `text-lg md:text-xl` (18px / 20px)
- Body: `text-base` (16px)
- Small: `text-sm` (14px)
- Micro Labels: `text-[11px]` (11px, monospace)

**Font Weights:**
- Semibold: 600 (headings)
- Medium: 500 (links, buttons)
- Regular: 400 (body text)

### Spacing

**Container:**
- Max width: `max-w-5xl` (64rem / 1024px)
- Padding: `px-5 md:px-8` (20px / 32px)
- Vertical: `py-14 md:py-20` (56px / 80px)
- Gap between sections: `space-y-10` (40px)

**Glass Card:**
- Padding: `p-6 md:p-8` (24px / 32px)
- Border radius: `rounded-2xl` (16px)
- Internal spacing: `mt-5` (20px between header and content)

**List Items:**
- Border radius: `rounded-xl` (12px)
- Padding: `px-4 py-3` (16px / 12px)
- Gap: `space-y-2` (8px)

### Shadows

- Cards: `shadow-lg` (large shadow for depth)
- Buttons: `shadow-lg` → `shadow-xl` on hover
- Profile image: `shadow-md`

### Transitions

All interactive elements use:
```css
transition
```

**Effects:**
- Glass cards: `hover:-translate-y-0.5` (subtle lift)
- Buttons: `hover:bg-slate-800` (color shift)
- List items: `hover:bg-white/50` (background fade)

## Components

### GlassCard

Reusable frosted glass container for sections.

**Props:**
- `title` (string) - Section heading
- `subtitle` (string, optional) - Descriptive text
- `children` (ReactNode) - Card content

**Usage:**
```tsx
<GlassCard
  title="Section Title"
  subtitle="Optional description"
>
  <ul>...</ul>
</GlassCard>
```

### ContactFooter

High-end icon dock with hover-revealed labels.

**Features:**
- Outline icons (Lucide React)
- Labels fade in on hover
- Glass card container
- Both UK and US phone numbers
- Email, LinkedIn, Website, YouTube

**Usage:**
```tsx
<ContactFooter />
```

See `ICON_DOCK_FOOTER.md` for complete documentation.

### Micro Labels

Small monospace labels for metadata (LIVE, GITHUB, etc.)

**Style:**
```tsx
className="font-mono text-[11px] tracking-widest text-slate-500"
```

**Usage:**
```tsx
<span className="font-mono text-[11px] tracking-widest text-slate-500">
  LIVE
</span>
```

## Layout Structure

```
Hero Section
├── Profile image + Name + Descriptor
└── Primary CTA buttons

Divider (1px, subtle)

Glass Card: Applied AI
├── Section title + subtitle
└── Project list

Glass Card: Platforms

Glass Card: Product Tools

Glass Card: Prompt Engineering

Glass Card: Governance

Glass Card: Contact
└── Grid layout (email, phones)

Footer
└── Centered links
```

## Hover States

**Glass Cards:**
- Subtle upward lift: `hover:-translate-y-0.5`
- Smooth transition

**List Items:**
- Background fade: `hover:bg-white/50`
- Fast transition

**Links:**
- Underline on hover
- Color shift to blue-600

**Buttons:**
- Primary: `hover:bg-slate-800`
- Secondary: `hover:bg-white`
- Shadow increase: `hover:shadow-xl`

## Responsive Behavior

**Breakpoint:** `md` (768px)

**Mobile (< 768px):**
- Hero text: `text-4xl`
- Section titles: `text-lg`
- Card padding: `p-6`
- Container padding: `px-5 py-14`
- Single column layout

**Desktop (≥ 768px):**
- Hero text: `text-5xl`
- Section titles: `text-xl`
- Card padding: `p-8`
- Container padding: `px-8 py-20`
- Same single column (intentional, for focus)

## Accessibility

**Focus States:**
All interactive elements have default Tailwind focus rings.

**Keyboard Navigation:**
- Tab through all links
- Enter to activate
- Visual focus indicators

**Color Contrast:**
- Text on glass: WCAG AA compliant
- Links: High contrast blue-600
- Micro labels: Intentionally muted but readable

**Motion:**
- Respects `prefers-reduced-motion`
- All transitions disabled if user prefers reduced motion

## Fine-Tuning

### Too Glassy?

Reduce blur and opacity:
```tsx
// From:
className="bg-white/60 backdrop-blur-xl"

// To:
className="bg-white/50 backdrop-blur-lg"
```

### Shadow Too Strong?

Reduce shadow:
```tsx
// From:
className="shadow-lg"

// To:
className="shadow-md"
```

### Cards Too Lifted?

Reduce hover lift:
```tsx
// From:
className="hover:-translate-y-0.5"

// To:
className="hover:-translate-y-0.25"
```

## Design Philosophy

**Glass Deck** aesthetic emphasizes:
- **Clarity through frosting** - Soft backgrounds that don't compete with content
- **Executive typography** - Inter for professionalism, JetBrains Mono for technical precision
- **Micro labels** - Small uppercase labels create visual rhythm
- **Subtle depth** - Gentle shadows and hover effects
- **Breathing room** - Generous spacing between sections
- **Confident hierarchy** - Clear visual priority from hero to footer

## Future Enhancements

**Dark Mode (Optional):**
- Dark gradient background
- Glass cards with dark tint
- Inverted text colors
- Console-like aesthetic

**Example toggle:**
```tsx
// Light: bg-white/60
// Dark: bg-slate-900/60
```

---

**This design balances professionalism with modern aesthetics.** The glass deck approach creates visual interest without overwhelming the content, making your portfolio both beautiful and highly scannable.

