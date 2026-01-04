# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

**Note:** This project uses Tailwind CSS v4 with the official `@tailwindcss/postcss` plugin.

### 2. Add Your Profile Image
- Add your profile photo to `/public/profile.jpg`
- Make sure it's square (e.g., 1000x1000px)
- Or update the path in `src/config/profile.ts`

### 3. Run the Development Server
```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## 📝 Customization

### Update Your Content
Edit `src/config/profile.ts` to update:
- Your name and descriptor
- All links and project sections
- Contact information
- Footer links

### Styling Adjustments
- Colors: `tailwind.config.ts`
- Spacing: Component files in `src/components/`
- Typography: Component files (className props)

---

## 📦 Production Build

```bash
npm run build
npm start
```

---

## 🎯 Key Design Principles

**This page follows:**
- Minimal over expressive
- Calm over clever
- Confidence through restraint
- No animations or flashy effects
- Editorial, left-aligned layout
- Generous whitespace

**What's intentionally missing:**
- No icons or emojis
- No entrance animations
- No shadows or gradients
- No thumbnails or images (except profile)
- No analytics or tracking

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Metadata and root layout
│   ├── page.tsx              # Main page with hierarchy
│   └── globals.css           # Global styles
├── components/
│   ├── ProfileHeader.tsx     # Static profile section
│   ├── LinkItem.tsx          # Individual link button
│   ├── LinkList.tsx          # Simple link list
│   ├── LinkSection.tsx       # Grouped project section
│   ├── ContactSection.tsx    # Plain text contact
│   └── Footer.tsx            # Footer links
└── config/
    └── profile.ts            # All content (edit here!)
```

---

## 🎨 Design Details

### Layout
- Max width: `md` (28rem / 448px)
- Mobile-first responsive
- Centered, single column

### Typography
- System fonts (no web fonts)
- Scale: 3xl → base → sm
- Left-aligned links

### Colors
- Background: `neutral-50` (off-white)
- Text: `neutral-900` (dark), `neutral-600` (muted)
- Borders: `neutral-200` → `neutral-300` on hover

### Interactions
- Hover: Subtle background + border change
- Press: `scale(0.98)` + opacity
- Focus: Ring for accessibility
- Transitions: 150ms, restrained

---

Need help? Check the full `README.md` for detailed documentation.

