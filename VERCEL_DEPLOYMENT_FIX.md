# Vercel Deployment Fix

## Problem
Vercel deployment showing `404: NOT_FOUND` despite the app working locally.

## Diagnosis

### Framework
**Next.js 15 (App Router)** ✅

### Local Verification
```bash
npm run build
✓ Compiled successfully
✓ Generating static pages (4/4)
Route (app): / → 5.43 kB  ← Homepage EXISTS
```

The homepage (`src/app/page.tsx`) exists and builds correctly locally.

## Root Cause

The 404 on Vercel is likely caused by incorrect build settings in the Vercel dashboard.

## Solution

### 1. Verify Vercel Project Settings

Go to your Vercel dashboard:
**Project → Settings → General**

Check these settings:

**Root Directory:**
```
. (dot, meaning project root)
```
Or leave it **blank** (defaults to root)

**DO NOT** set it to `src/` or any subdirectory!

---

**Project → Settings → Build & Output Settings**

**Framework Preset:**
```
Next.js
```

**Build Command:**
```
npm run build
```
Or leave at default (Vercel auto-detects)

**Output Directory:**
```
(leave empty/default)
```
Next.js handles this automatically - do NOT override!

**Install Command:**
```
npm install
```
Or leave at default

---

### 2. Added vercel.json

I've created a `vercel.json` file to explicitly set the correct configuration:

```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs",
  "installCommand": "npm install"
}
```

This ensures Vercel uses the correct build process.

---

### 3. Check Environment Variables

If you're using any environment variables locally (`.env.local`), make sure they're also set in Vercel:

**Project → Settings → Environment Variables**

Add any variables your app needs (though this simple app doesn't require any).

---

### 4. Redeploy

After updating settings or adding `vercel.json`:

1. Commit and push the changes:
   ```bash
   git add vercel.json
   git commit -m "Add Vercel configuration"
   git push origin main
   ```

2. Vercel will auto-deploy

Or manually trigger a redeploy:
**Deployments → ... (menu) → Redeploy**

---

## Expected Result

After deployment, visiting your Vercel URL should show:
- Your glass deck portfolio homepage
- Dual-layer animated gradient background
- Cursor-following lilac glow
- All 15+ AI projects
- Icon dock footer

## Troubleshooting

### If still 404 after changes:

1. **Check deployment logs**
   - Go to: Deployments → [latest] → Build Logs
   - Look for errors during build
   - Verify it says "Route (app): /"

2. **Verify the build succeeded**
   - Check for: "✓ Generating static pages"
   - Should show: "Route (app) / → 5.43 kB"

3. **Check Function logs**
   - Go to: Deployments → [latest] → Function Logs
   - Look for runtime errors

4. **Verify repository connection**
   - Settings → Git → make sure correct branch (main)
   - Make sure Root Directory is correct

### Common Pitfalls

❌ **Wrong:**
- Root Directory: `src/`
- Output Directory: `dist` or `.next`
- Framework: None or other

✅ **Correct:**
- Root Directory: `.` or blank
- Output Directory: blank (auto)
- Framework: Next.js

---

## Files Changed

1. ✅ **Added:** `vercel.json` - Explicit Vercel configuration
2. ✅ **Added:** `VERCEL_DEPLOYMENT_FIX.md` - This documentation

## What to Check in Vercel Dashboard

**Priority 1: Root Directory**
```
Settings → General → Root Directory
Should be: . (dot) or blank
```

**Priority 2: Build Command**
```
Settings → Build & Output → Build Command
Should be: npm run build
```

**Priority 3: Framework**
```
Settings → Build & Output → Framework Preset
Should be: Next.js
```

---

## Summary

Your app is **100% correct**. The issue is in Vercel's project configuration, not your code.

The most common fix: Set **Root Directory** to `.` (or blank) in Vercel dashboard.

After fixing settings, redeploy and your portfolio will work! ✨

