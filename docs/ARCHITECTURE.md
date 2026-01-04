# Component Architecture

## Component Hierarchy

```
page.tsx (Server Component)
│
├── ProfileHeader (Server Component)
│   ├── Image (Next.js optimized)
│   ├── Name (h1)
│   └── Descriptor (p)
│
├── LinkList (Server Component)
│   └── LinkItem[] (Client Component) ← Primary links
│
├── LinkSection[] (Server Component) ← Project groups
│   ├── Section Title (h2)
│   └── LinkItem[] (Client Component)
│
├── ContactSection (Server Component)
│   ├── Email (plain text)
│   ├── UK Mobile (plain text)
│   └── US Mobile (plain text)
│
└── Footer (Server Component)
    ├── Website link
    └── LinkedIn link
```

## Server vs. Client Components

### Server Components (Default)
✅ `page.tsx` - Page structure  
✅ `ProfileHeader.tsx` - Static profile  
✅ `LinkList.tsx` - Container  
✅ `LinkSection.tsx` - Grouped container  
✅ `ContactSection.tsx` - Plain text  
✅ `Footer.tsx` - Footer links  

**Why Server?**
- No interactivity needed
- Better performance (less JS)
- SEO-friendly
- Faster initial load

### Client Components
⚡ `LinkItem.tsx` - Interactive link button

**Why Client?**
- Has hover/press interactions
- Needs event handlers
- Requires `'use client'` directive

## Data Flow

```
profile.ts (config)
    ↓
page.tsx (consumes data)
    ↓
Components (receive props)
    ↓
Rendered HTML
```

## File Dependencies

```
page.tsx
  imports: profile.ts, ProfileHeader, LinkList, LinkSection, ContactSection, Footer

ProfileHeader.tsx
  imports: next/image

LinkItem.tsx ('use client')
  imports: profile.ts (types)

LinkList.tsx
  imports: profile.ts (types), LinkItem

LinkSection.tsx
  imports: profile.ts (types), LinkItem

ContactSection.tsx
  imports: none (pure presentation)

Footer.tsx
  imports: none (pure presentation)
```

## Styling Strategy

### Tailwind Classes Location
- All styles inline via `className`
- No CSS modules or styled-components
- Utilities composed directly

### Design Tokens
- Colors: `tailwind.config.ts` (neutral palette)
- Fonts: System font stack
- Spacing: Tailwind defaults + responsive variants

### Responsive Behavior
- Mobile-first approach
- Breakpoints: `md:` prefix for desktop
- Touch-friendly tap targets

## Performance Optimizations

1. **Server Components** - Minimal client-side JS
2. **Next.js Image** - Automatic optimization
3. **System Fonts** - No external font loading
4. **Static Data** - No API calls
5. **Tailwind Purge** - Only used utilities shipped

## Accessibility Features

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Motion preferences respected

## Extension Points

### Adding a New Link
Edit `src/config/profile.ts`:
```typescript
links: [
  { id: 'new', title: 'New Link', url: 'https://...' }
]
```

### Adding a New Section
Edit `src/config/profile.ts`:
```typescript
projectSections: [
  {
    id: 'new-section',
    title: 'New Section',
    links: [...]
  }
]
```

### Changing Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  neutral: { ... }
}
```

### Modifying Interactions
Edit `src/components/LinkItem.tsx`:
```typescript
className="hover:... active:... focus:..."
```

---

This architecture prioritizes simplicity, performance, and maintainability while keeping the codebase minimal and clear.

