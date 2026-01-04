# Pre-Launch Checklist

## ✅ Before Running `npm run dev`

### Required
- [ ] Run `npm install` to install dependencies
- [ ] Replace `public/profile.jpg` with your actual photo
  - Must be square (e.g., 1000x1000px)
  - Good quality (will be displayed at 96px/112px)
  - JPEG, PNG, or WebP format

### Optional but Recommended
- [ ] Review content in `src/config/profile.ts`
  - Check all link URLs work
  - Verify spelling and formatting
  - Confirm contact information is accurate
- [ ] Test the page on mobile device (or use dev tools)
- [ ] Check keyboard navigation (Tab key)
- [ ] Verify all links open in new tabs

---

## ✅ Before Deploying to Production

### Content
- [ ] All links tested and working
- [ ] Profile image is high quality
- [ ] No placeholder text remaining
- [ ] Contact info is correct
- [ ] Footer links point to right URLs

### Technical
- [ ] Run `npm run build` successfully
- [ ] No console errors in browser
- [ ] No TypeScript errors
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Test on actual mobile device

### Design
- [ ] Spacing looks correct on mobile
- [ ] Spacing looks correct on desktop
- [ ] All text is readable
- [ ] Focus states are visible
- [ ] Hover states work on desktop

### Accessibility
- [ ] Can navigate entire page with keyboard
- [ ] Links have visible focus indicators
- [ ] Text has sufficient contrast
- [ ] Images have alt text
- [ ] No flashing or auto-playing content

### Performance
- [ ] Build output shows no warnings
- [ ] Images are optimized
- [ ] No console warnings
- [ ] Fast loading time

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify
1. Connect GitHub repo
2. Build command: `npm run build`
3. Publish directory: `.next`

### Option 3: Self-hosted
```bash
npm run build
npm start
```

---

## 📝 Post-Deployment

### Verify
- [ ] Visit deployed URL
- [ ] Click every link to confirm they work
- [ ] Test on mobile device
- [ ] Share with a friend for feedback
- [ ] Check page load speed (Google PageSpeed Insights)

### Optional
- [ ] Set up custom domain
- [ ] Add to your LinkedIn profile
- [ ] Share on social media
- [ ] Update email signature
- [ ] Add to business cards

---

## 🐛 Common Issues

### Image Not Showing
- Check file path in `src/config/profile.ts`
- Ensure image is in `public/` directory
- Verify image file name matches exactly (case-sensitive)

### Links Not Working
- Confirm URLs start with `https://`
- Test each URL in browser first
- Check for typos in `src/config/profile.ts`

### Styling Looks Wrong
- Run `npm run dev` to restart server
- Clear browser cache
- Check Tailwind classes are valid

### Build Fails
- Delete `node_modules/` and `.next/`
- Run `npm install` again
- Check for TypeScript errors

---

## 📞 Need Help?

1. Check `README.md` for full documentation
2. Review `SETUP.md` for quick start
3. Read `ARCHITECTURE.md` for technical details
4. See `VISUAL_GUIDE.md` for design reference

---

## ✨ You're Ready!

Once you've completed the "Required" items, you can run:

```bash
npm run dev
```

And visit `http://localhost:3000` to see your portfolio page! 🎉

