# Deploying 2fish Landing Page to Squarespace

This guide provides detailed instructions for deploying the 2fish landing page to Squarespace.

## Method 1: Code Injection (Recommended for Simplicity)

This method uses Squarespace's Code Injection feature to add custom HTML/CSS/JS.

### Step 1: Create Inline HTML File

Since Squarespace has limitations with file structure, you'll need to create a single HTML file with inlined CSS and JavaScript.

1. **Combine all CSS files:**
   ```bash
   cat css/reset.css css/styles.css css/animations.css > combined.css
   ```

2. **Create single-page HTML:**
   - Copy `index.html`
   - Replace `<link rel="stylesheet" href="/css/...">` with inline `<style>` tags containing the CSS
   - Replace `<script src="/js/...">` with inline `<script>` tags containing the JavaScript

### Step 2: Upload Assets to Squarespace

1. Log into Squarespace
2. Go to **Design → Custom CSS** or use the file manager
3. Upload all images from `/assets/images/` and `/assets/icons/`
4. Note the Squarespace CDN URLs for each image

### Step 3: Update Image Paths

Replace all image paths in your HTML with Squarespace CDN URLs:
- `/assets/images/app-icon.png` → `https://images.squarespace-cdn.com/content/.../app-icon.png`
- `/assets/images/hero-visual.png` → `https://images.squarespace-cdn.com/content/.../hero-visual.png`
- etc.

### Step 4: Create Custom Page

1. In Squarespace, create a new **Blank Page**
2. Add a **Code Block** to the page
3. Paste your combined HTML (with inlined CSS/JS)
4. Publish the page

## Method 2: Developer Mode (Advanced)

For complete control, use Squarespace Developer Mode.

### Prerequisites
- Squarespace site on **Business plan or higher**
- Git installed
- Developer Mode enabled

### Step 1: Enable Developer Mode

1. Go to **Settings → Developer Tools**
2. Enable **Developer Mode**
3. Clone your site template:
   ```bash
   git clone https://YOUR-SITE.squarespace.com/template.git
   cd template
   ```

### Step 2: Add Custom Template

1. Create new template file (e.g., `2fish-landing.page`)
2. Copy HTML structure, adjusting for Squarespace's template syntax
3. Add CSS to `/styles/` directory
4. Add JavaScript to `/scripts/` directory

### Step 3: Upload Assets

Place assets in:
- Images: `/assets/`
- Icons: `/assets/icons/`

### Step 4: Update Paths

Use Squarespace template variables for asset paths:
```html
<img src="/assets/app-icon.png" alt="2fish Logo">
```

### Step 5: Deploy

```bash
git add .
git commit -m "Add 2fish landing page"
git push origin master
```

## Method 3: Embed on Existing Page (Quick Test)

For quick testing or embedding within an existing Squarespace page:

1. Create a new **Blank Page**
2. Add a **Code Block**
3. Paste HTML content
4. Use `<style>` tags for CSS
5. Use `<script>` tags for JavaScript
6. Use external image URLs (upload to Imgur, Cloudinary, etc.)

## Asset Hosting Options

Since Squarespace file structure is limited:

### Option A: Squarespace Native Upload
- Upload via Design → Custom CSS → Manage Custom Files
- Limited to specific file types
- Automatically CDN-hosted

### Option B: External CDN
- **Cloudinary**: Free tier, image optimization
- **Imgur**: Free image hosting
- **GitHub Pages**: Host assets in separate repo

### Option C: Inline SVGs
For icons, inline the SVG code directly in HTML instead of using `<img>` tags.

## App Store Link Configuration

Before deploying, update the App Store URL in the JavaScript:

```javascript
// In app-store-detect.js or inlined script
const APP_STORE_URLS = {
  ios: 'https://apps.apple.com/app/YOUR-ACTUAL-APP-ID',
  android: 'https://play.google.com/store/apps/details?id=com.2fish.app' // If applicable
};
```

## Pre-Deployment Checklist

- [ ] All images uploaded and paths updated
- [ ] App Store link configured
- [ ] Domain/URL updated in meta tags
- [ ] CSS inlined or properly linked
- [ ] JavaScript inlined or properly linked
- [ ] Test on mobile devices
- [ ] Test on desktop browsers
- [ ] Validate HTML (W3C)
- [ ] Check page load speed
- [ ] Verify social sharing (OG image)

## Testing Locally Before Deploy

Test the inline version locally:

```bash
cd /Users/desmondkaosmacair/Documents/Projects/2fish-landing
python3 -m http.server 8000
```

Visit: http://localhost:8000

## Squarespace Limitations to Note

1. **No custom file structure** - Everything must be in specific directories or inlined
2. **Code injection has size limits** - Large CSS/JS may need to be split
3. **No server-side processing** - All logic must be client-side
4. **Custom headers not supported** - The `_headers` file won't work on Squarespace
5. **Limited JavaScript APIs** - Some browser APIs may be restricted

## Performance Optimization for Squarespace

1. **Compress images** before upload (TinyPNG, ImageOptim)
2. **Minify CSS/JS** before inlining (use online minifiers)
3. **Lazy load images** (already implemented in HTML)
4. **Use WebP format** for images if Squarespace supports it
5. **Enable Squarespace's built-in CDN** (automatic)

## Alternative: Single HTML File Generator

If you prefer a fully self-contained file, create a script to generate it:

```bash
# Create single-file version
cat index.html | \
  sed 's|<link rel="stylesheet" href="/css/reset.css">|<style>'"$(cat css/reset.css)"'</style>|' | \
  sed 's|<link rel="stylesheet" href="/css/styles.css">|<style>'"$(cat css/styles.css)"'</style>|' | \
  sed 's|<link rel="stylesheet" href="/css/animations.css">|<style>'"$(cat css/animations.css)"'</style>|' | \
  sed 's|<script src="/js/app-store-detect.js"></script>|<script>'"$(cat js/app-store-detect.js)"'</script>|' | \
  sed 's|<script src="/js/main.js"></script>|<script>'"$(cat js/main.js)"'</script>|' \
  > index-inline.html
```

## Support

If you encounter issues deploying to Squarespace:
1. Check Squarespace's [Developer Documentation](https://developers.squarespace.com/)
2. Verify your plan includes Developer Mode (if using Method 2)
3. Test with Code Injection first (Method 1) before attempting Developer Mode

## Final Notes

- Squarespace is designed for ease of use, not custom development
- For maximum flexibility, consider alternative hosting (Vercel, Netlify, Cloudflare Pages)
- The landing page is designed to be fully client-side and will work on any static host
