# 2fish Landing Page - Deployment Checklist

## Pre-Deployment Checklist

### ✅ Assets (COMPLETE)
- [x] app-icon.png (1024x1024px) - Logo with 2fish
- [x] hero-visual.png (1320x2868px) - Recording screen
- [x] screenshot-1.png (1320x2868px) - Recording interface
- [x] screenshot-2.png (1320x2868px) - Deep analysis
- [x] screenshot-3.png (1320x2868px) - History view
- [x] Feature icons (SVG) - All 4 created
- [ ] og-image.png (1200x630px) - Optional for social sharing

### Configuration Updates Needed

#### 1. App Store URL
**File:** `js/app-store-detect.js` (line ~18)

```javascript
const APP_STORE_URLS = {
  ios: 'https://apps.apple.com/app/YOUR-ACTUAL-APP-ID', // UPDATE THIS
  android: 'https://play.google.com/store/apps/details?id=com.2fish.app'
};
```

**Action:** Replace `YOUR-ACTUAL-APP-ID` with your actual App Store app ID

#### 2. Domain URLs
**File:** `index.html` (lines ~10-11)

```html
<meta property="og:url" content="https://yourdomain.squarespace.com">
```

**Action:** Replace with your actual Squarespace domain

#### 3. Sitemap URL
**File:** `robots.txt` (line 6)

```
Sitemap: https://yourdomain.squarespace.com/sitemap.xml
```

**Action:** Replace with your actual Squarespace domain

## Local Testing

### Start Development Server
```bash
cd /Users/desmondkaosmacair/Documents/Projects/2fish-landing
python3 -m http.server 8000
```

Then visit: **http://localhost:8000**

### Test Checklist
- [ ] Page loads correctly
- [ ] All images display (check browser console for errors)
- [ ] Navigation scroll effect works (scroll down to see glass effect)
- [ ] All sections render properly
- [ ] Animations trigger on scroll
- [ ] Buttons are clickable
- [ ] Mobile responsive (resize browser window)
- [ ] No console errors

### Browser Testing
- [ ] Chrome (desktop)
- [ ] Safari (desktop)
- [ ] Firefox (desktop)
- [ ] Chrome (mobile) - Use DevTools device emulation
- [ ] Safari (iPhone) - Test on actual device if possible

## Deployment to Squarespace

### Step 1: Create Inline Version

```bash
cd /Users/desmondkaosmacair/Documents/Projects/2fish-landing
./create-inline-version.sh
```

This creates `index-inline.html` with all CSS and JavaScript combined.

### Step 2: Upload Assets to Squarespace

1. Log into your Squarespace account
2. Go to **Pages** → Create new **Blank Page**
3. Name it "Home" or "Landing"
4. Save but don't publish yet

#### Upload Images
**Option A: Using Custom CSS (Recommended)**
1. Go to **Design** → **Custom CSS**
2. Click **Manage Custom Files**
3. Upload all images:
   - `assets/images/app-icon.png`
   - `assets/images/hero-visual.png`
   - `assets/images/screenshot-1.png`
   - `assets/images/screenshot-2.png`
   - `assets/images/screenshot-3.png`
4. Upload all icons:
   - `assets/icons/feature-microphone.svg`
   - `assets/icons/feature-brain.svg`
   - `assets/icons/feature-frameworks.svg`
   - `assets/icons/feature-memory.svg`
5. **IMPORTANT:** Copy each file's CDN URL (right-click → Copy Link)

**Option B: Using External CDN**
1. Upload all images to Imgur, Cloudinary, or similar
2. Copy the direct image URLs

### Step 3: Update Image Paths

Open `index-inline.html` in a text editor and replace:

**From:**
```html
src="/assets/images/app-icon.png"
```

**To:**
```html
src="https://images.squarespace-cdn.com/content/v1/YOUR-ID/app-icon.png"
```

Do this for ALL image and icon paths in the file.

**Find and Replace List:**
- `/assets/images/app-icon.png` → Squarespace CDN URL
- `/assets/images/hero-visual.png` → Squarespace CDN URL
- `/assets/images/screenshot-1.png` → Squarespace CDN URL
- `/assets/images/screenshot-2.png` → Squarespace CDN URL
- `/assets/images/screenshot-3.png` → Squarespace CDN URL
- `/assets/icons/feature-microphone.svg` → Squarespace CDN URL
- `/assets/icons/feature-brain.svg` → Squarespace CDN URL
- `/assets/icons/feature-frameworks.svg` → Squarespace CDN URL
- `/assets/icons/feature-memory.svg` → Squarespace CDN URL

### Step 4: Add to Squarespace

1. Go back to your blank page
2. Click **Edit** on the page
3. Add a **Code Block** (click + → More → Code)
4. Paste the ENTIRE contents of `index-inline.html`
5. Click **Apply**
6. Click **Save**

### Step 5: Configure Page Settings

1. Go to **Pages** settings for your landing page
2. Set as **Homepage** (if desired)
3. Under **Advanced** tab:
   - Enable **Index Navigation Title** (optional)
   - Set **URL Slug** (e.g., `/` for homepage or `/download`)

### Step 6: Publish

1. Click **Save** in the page editor
2. Click **Publish** in the top right
3. Visit your live site!

## Post-Deployment Verification

### Visual Check
- [ ] All sections visible and properly styled
- [ ] Dark theme applied (black background, white text, cyan accents)
- [ ] All images loaded correctly
- [ ] Glassmorphism effects visible
- [ ] Animations working smoothly

### Functional Check
- [ ] Navigation scroll effect works
- [ ] All CTA buttons clickable
- [ ] App Store link works (test on iOS device)
- [ ] Smooth scroll on anchor links
- [ ] Footer links work

### Mobile Check
- [ ] Responsive on iPhone (Safari)
- [ ] Responsive on Android (Chrome)
- [ ] Touch interactions work
- [ ] No horizontal scroll
- [ ] Text readable without zooming

### Performance Check
- [ ] Page loads in < 3 seconds
- [ ] No console errors (open browser DevTools)
- [ ] Images optimized and loading fast
- [ ] Animations smooth (60fps)

### SEO & Social Check
- [ ] Page title shows: "2fish - AI Dream Analysis & Dream Journal App"
- [ ] Meta description present
- [ ] Test social sharing (share on Twitter/Facebook)
- [ ] OG image displays correctly (if added)

### Browser Compatibility
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] iOS Safari (14+)

## Troubleshooting

### Images Not Showing
- **Issue:** Broken image icons or missing images
- **Fix:** Check that CDN URLs are correct and accessible
- **Test:** Copy image URL and paste in new browser tab - should display

### Styles Not Applied
- **Issue:** Plain HTML with no styling
- **Fix:** Ensure `<style>` tags are present in the `<head>` section
- **Test:** Check browser DevTools → Elements → `<style>` tags should be visible

### JavaScript Not Working
- **Issue:** No scroll effects or animations
- **Fix:** Check browser console for errors
- **Test:** Open DevTools → Console → should be no red errors

### Glassmorphism Not Visible
- **Issue:** Cards look flat, no blur effect
- **Fix:** Some browsers don't support backdrop-filter
- **Test:** Use Chrome or Safari (best support)

### Mobile Layout Broken
- **Issue:** Content overlapping or too small
- **Fix:** Check viewport meta tag is present in `<head>`
- **Test:** Use browser DevTools → Device Toolbar

## Performance Optimization (Optional)

### Compress Images
Before uploading, compress all images:
- Use TinyPNG: https://tinypng.com/
- Or ImageOptim (Mac app)
- Target: < 300KB per screenshot

### Convert to WebP
For better compression (if Squarespace supports):
```bash
cwebp hero-visual.png -o hero-visual.webp -q 80
```

### Minify Code
Minify the inline HTML/CSS/JS (optional):
- Use online minifier
- Or VS Code extension: "Minify"

## Success Metrics

After deployment, monitor:
- ✅ Page views
- ✅ App Store button clicks
- ✅ Time on page
- ✅ Bounce rate
- ✅ Mobile vs desktop traffic

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify all image URLs are accessible
3. Test in incognito/private mode
4. Try a different browser
5. Check Squarespace status page

## Final Checklist

Before announcing the landing page:
- [ ] All links work
- [ ] App Store URL is correct
- [ ] Contact email works (if added)
- [ ] Privacy policy page exists (if linked)
- [ ] Terms of service page exists (if linked)
- [ ] Tested on actual iPhone
- [ ] No typos in copy
- [ ] Brand name consistent ("2fish" lowercase)

---

## Quick Deploy Commands

```bash
# 1. Navigate to project
cd /Users/desmondkaosmacair/Documents/Projects/2fish-landing

# 2. Update configuration (edit files first!)
# - js/app-store-detect.js (App Store URL)
# - index.html (domain URLs)
# - robots.txt (sitemap URL)

# 3. Create inline version
./create-inline-version.sh

# 4. Test locally
python3 -m http.server 8000
# Visit: http://localhost:8000/index-inline.html

# 5. Deploy to Squarespace (manual steps above)
```

---

**You're ready to deploy! 🚀**

The landing page is beautiful, functional, and optimized. Just follow the checklist above and you'll have a stunning landing page live in minutes.
