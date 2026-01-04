# Quick Reference Card

## 🎯 One-Line Summary
Minimal, editorial AI portfolio page • Next.js 15 + Tailwind CSS v4 • No animations, no clutter

---

## 📂 Key Files to Edit

| File | What to Change |
|------|----------------|
| `src/config/profile.ts` | All content (name, bio, links, contact) |
| `public/profile.jpg` | Your profile photo (square image) |
| `tailwind.config.ts` | Colors and design tokens |
| `src/components/*.tsx` | Spacing and styling |

---

## 🚀 Commands

```bash
# Install
npm install

# Development
npm run dev

# Production
npm run build
npm start

# Lint
npm run lint
```

---

## 🎨 Design Tokens

```
Max Width:     448px (max-w-md)
Font:          System fonts
Background:    #fafafa (neutral-50)
Text:          #171717 (neutral-900)
Border:        #e5e5e5 (neutral-200)
Spacing:       12, 16, 24, 40, 48px
Transitions:   150ms ease-out
```

---

## 📱 Responsive Breakpoints

```
Mobile:   < 768px  (default)
Desktop:  ≥ 768px  (md:)
```

---

## 🧩 Component Map

```
page.tsx
├─ ProfileHeader     (profile image, name, bio)
├─ LinkList          (primary links)
├─ LinkSection[]     (grouped project links)
├─ ContactSection    (email, phone numbers)
└─ Footer            (website, linkedin)
```

---

## ✅ Design Principles

**YES**
- Generous whitespace
- Left-aligned text
- Subtle interactions
- Neutral colors
- System fonts

**NO**
- Icons or emojis
- Load animations
- Shadows or gradients
- Flashy effects
- Visual clutter

---

## 🔗 All Your Links (15 total)

**Primary (1)**
- AI Portfolio & Research

**Applied AI (3)**
- Cancer Patient Support Chatbot
- RIG Conversational Agent
- Automated Customer Service Agent

**Platforms (3)**
- Predictive Maintenance & Anomaly Detection
- Back-Office Financial Automation
- GenAI Data Cleaning

**Product Tools (2)**
- Project Management Tool
- PRD → Jira Automation

**Prompt Engineering (3)**
- Spec-Driven Development Framework
- Prompt Runner
- Prompt Architecture Artifact

**Governance (3)**
- Automated Compliance Governor
- Claims Governance Logic Builder
- Policy Transition Logic Validator

---

## 📞 Contact Info

```
Email:      info@francescatabor.com
UK Mobile:  +44 796 193 0316
US Mobile:  +1 978-943-3744
```

---

## 🎯 Three-Step Setup

1. `npm install`
2. Replace `public/profile.jpg` with your photo
3. `npm run dev` → `localhost:3000`

---

## 📚 Documentation

- `README.md` - Full documentation
- `SETUP.md` - Quick start
- `ARCHITECTURE.md` - Component structure
- `VISUAL_GUIDE.md` - Layout reference
- `PROJECT_SUMMARY.md` - Complete overview

---

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/postcss`)
- **Language**: TypeScript
- **Components**: React 19
- **Rendering**: Server Components (default)

**Tailwind v4 Setup:**
- Uses `@import "tailwindcss";` in CSS (new v4 syntax)
- Uses `@tailwindcss/postcss` plugin (official v4 plugin)
- No `autoprefixer` or `postcss-import` needed (built-in)

---

## ♿ Accessibility

✅ Semantic HTML  
✅ Keyboard navigation  
✅ Focus states  
✅ ARIA labels  
✅ Color contrast  
✅ Motion preferences  

---

**Need help?** Check `README.md` or `SETUP.md` for detailed guides.

