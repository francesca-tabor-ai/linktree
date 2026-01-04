# Visual Layout Guide

## Page Structure (Mobile View)

```
┌─────────────────────────────────┐
│         [Top Spacing]           │
│                                 │
│          ┌─────────┐            │
│          │  ●   ●  │            │  ← Profile Image (circle)
│          │    ●    │            │    24x24, border
│          └─────────┘            │
│                                 │
│      Francesca Tabor            │  ← Name (3xl, semibold)
│                                 │
│  AI systems, automation,        │  ← Descriptor (base, muted)
│       applied GenAI             │
│                                 │
├─────────────────────────────────┤
│                                 │
│  ┌───────────────────────────┐ │
│  │ AI Portfolio & Research   │ │  ← Primary Link
│  └───────────────────────────┘ │    (full width, left-aligned)
│                                 │
├─────────────────────────────────┤
│                                 │
│  APPLIED AI — LIVE SYSTEMS      │  ← Section Title (sm, uppercase)
│                                 │
│  ┌───────────────────────────┐ │
│  │ Cancer Patient Support    │ │
│  │ Chatbot                    │ │  ← Project Links
│  └───────────────────────────┘ │    (stacked vertically)
│                                 │
│  ┌───────────────────────────┐ │
│  │ RIG Conversational Agent  │ │
│  │ (Live Demo)                │ │
│  └───────────────────────────┘ │
│                                 │
│  ┌───────────────────────────┐ │
│  │ Automated Customer        │ │
│  │ Service Agent              │ │
│  └───────────────────────────┘ │
│                                 │
├─────────────────────────────────┤
│                                 │
│  PLATFORMS & AUTOMATION         │  ← Next Section
│                                 │
│  ┌───────────────────────────┐ │
│  │ Predictive Maintenance &  │ │
│  │ Anomaly Detection          │ │
│  └───────────────────────────┘ │
│                                 │
│  [... more links ...]           │
│                                 │
├─────────────────────────────────┤
│                                 │
│  CONTACT                        │  ← Contact Section
│                                 │
│  Email                          │
│  info@francescatabor.com        │  ← Plain text (no buttons)
│                                 │
│  UK Mobile                      │
│  +44 796 193 0316               │
│                                 │
│  US Mobile                      │
│  +1 978-943-3744                │
│                                 │
├─────────────────────────────────┤
│ ─────────────────────────────── │
│                                 │
│   Website  ·  LinkedIn          │  ← Footer (small, inline)
│                                 │
│         [Bottom Spacing]        │
└─────────────────────────────────┘
```

## Desktop View

```
       ┌─────────────────────┐
       │    [Max Width md]    │  ← 448px container
       │                      │
       │    ┌──────────┐      │
       │    │   ●  ●   │      │  ← Slightly larger image
       │    │     ●    │      │    (28x28)
       │    └──────────┘      │
       │                      │
       │   Francesca Tabor    │
       │                      │
       │  AI systems, auto... │
       │                      │
       │ ┌──────────────────┐ │
       │ │ AI Portfolio &   │ │  ← Same structure
       │ │ Research         │ │    but centered on page
       │ └──────────────────┘ │
       │                      │
       │ [... sections ...]   │
       │                      │
       └─────────────────────┘
```

## Interactive States

### Link Button States

**Default**
```
┌─────────────────────────────┐
│ Cancer Patient Support      │  bg: white
│ Chatbot                      │  border: neutral-200
└─────────────────────────────┘
```

**Hover** (Desktop)
```
┌─────────────────────────────┐
│ Cancer Patient Support      │  bg: neutral-50
│ Chatbot                      │  border: neutral-300
└─────────────────────────────┘  transition: 150ms
```

**Press** (Mobile/Desktop)
```
┌─────────────────────────────┐
│ Cancer Patient Support      │  scale: 0.98
│ Chatbot                      │  opacity: 0.9
└─────────────────────────────┘  instant feedback
```

**Focus** (Keyboard)
```
╔═════════════════════════════╗
║ Cancer Patient Support      ║  ring: neutral-400
║ Chatbot                      ║  ring-offset: 2px
╚═════════════════════════════╝
```

## Spacing System

```
Component Spacing:
─────────────────
Profile Header:    mb-12 (3rem / 48px)
Primary Links:     mb-10 (2.5rem / 40px)
Link Sections:     mb-10 (2.5rem / 40px)
Contact Section:   mb-10 (2.5rem / 40px)
Footer:            mt-12 (3rem / 48px)

Within Components:
──────────────────
Link gaps:         gap-3 (0.75rem / 12px)
Section title:     mb-4 (1rem / 16px)
Profile image:     mb-6 (1.5rem / 24px)
Name to desc:      mb-2 (0.5rem / 8px)
Contact items:     gap-2 (0.5rem / 8px)
```

## Typography Scale

```
Name:              text-3xl (1.875rem / 30px)
Link titles:       text-base (1rem / 16px)
Descriptor:        text-base (1rem / 16px)
Section titles:    text-sm (0.875rem / 14px)
Contact:           text-sm (0.875rem / 14px)
Footer:            text-sm (0.875rem / 14px)
```

## Color Palette Usage

```
Background:        neutral-50  #fafafa
Link background:   white       #ffffff
Link hover:        neutral-50  #fafafa
Border default:    neutral-200 #e5e5e5
Border hover:      neutral-300 #d4d4d4
Text primary:      neutral-900 #171717
Text secondary:    neutral-600 #525252
Text muted:        neutral-500 #737373
Focus ring:        neutral-400 #a3a3a3
Divider:           neutral-200 #e5e5e5
```

## No Visual Elements

❌ No shadows  
❌ No gradients  
❌ No icons  
❌ No emojis  
❌ No thumbnails  
❌ No badges  
❌ No counters  
❌ No animations on load  
❌ No hover effects on images  

## Yes Visual Elements

✅ Clean borders  
✅ Generous whitespace  
✅ Clear hierarchy  
✅ Subtle state changes  
✅ Accessible focus states  
✅ Responsive spacing  

---

**Philosophy: Let the content speak through space and typography, not decoration.**

