# 2fish Landing Page

A dark, minimal landing page for the 2fish iOS dream analysis app.

## Overview

2fish is an AI-powered dream analysis app that helps users record, remember, and analyze their dreams through multiple psychological frameworks (Jungian, Freudian, CBT, neuroscience).

## Design

- **Aesthetic:** Dark & minimal with mystical messaging
- **Colors:** Black background, white text, cyan accents (#00CCFF)
- **Effects:** Glassmorphism, smooth animations, hover states
- **Typography:** Inter + Outfit fonts

## Structure

```
/
├── index.html              # Main landing page
├── css/
│   ├── reset.css          # CSS normalization
│   ├── styles.css         # Main stylesheet
│   └── animations.css     # Animation definitions
├── js/
│   ├── main.js            # Core interactions
│   └── app-store-detect.js # Platform detection
├── assets/
│   ├── images/            # App screenshots, hero visual, icons
│   └── icons/             # Feature icons (SVG)
├── _headers               # Cloudflare security headers
└── robots.txt             # SEO configuration
```

## Assets Needed

To complete the landing page, provide these assets:

### Required Images (place in `/assets/images/`)
1. **app-icon.png** (512x512px) - App icon for nav, footer, favicon
2. **hero-visual.png** (1200x800px) - Hero section app mockup
3. **screenshot-1.png** (1170x2532px) - Dream recording interface
4. **screenshot-2.png** (1170x2532px) - Framework selection view
5. **screenshot-3.png** (1170x2532px) - AI analysis results
6. **og-image.png** (1200x630px) - Social sharing image

### Icons
Feature icons are already created as SVGs in `/assets/icons/`

## Local Development

Test locally using Python's built-in server:

```bash
cd /Users/desmondkaosmacair/Documents/Projects/2fish-landing
python3 -m http.server 8000
```

Then visit: http://localhost:8000

## Deployment to Squarespace

### Option 1: Custom Code Block (Easiest)
1. Create a new blank page in Squarespace
2. Add a "Code" block
3. Copy the entire `index.html` content
4. Inline CSS: Add `<style>` tags with contents of all CSS files
5. Inline JS: Add `<script>` tags with contents of all JS files

### Option 2: Developer Mode (Full Control)
1. Enable Developer Mode in Squarespace settings
2. Clone your site template via Git
3. Add custom template files
4. Upload assets to `/assets/` folder
5. Deploy via Git push

### Asset Hosting
Since Squarespace has limitations on file structure:
- Upload images to Squarespace's built-in file storage
- Update image paths in HTML to use Squarespace CDN URLs
- Or use external CDN (Cloudinary, Imgur, etc.)

## Before Deploying

### 1. Add Real Assets
Replace placeholder image paths with actual assets

### 2. Update App Store Link
In `/js/app-store-detect.js`, replace:
```javascript
ios: 'https://apps.apple.com/app/2fish-dream-analysis'
```
With your actual App Store URL

### 3. Update Domain References
Replace `https://2fish.app` in:
- `index.html` meta tags
- `robots.txt` sitemap URL

### 4. Test Responsiveness
- Mobile (iOS Safari, Chrome)
- Tablet (iPad, Android)
- Desktop (Chrome, Firefox, Safari)

### 5. SEO Optimization
- Validate HTML (W3C validator)
- Run Lighthouse audit
- Test social sharing (Twitter, Facebook)

## Performance

- Minimal dependencies (no frameworks)
- Optimized/compressed images
- Lazy loading for below-fold images
- Efficient CSS animations

## Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy
- ARIA labels for icon buttons
- Keyboard navigation support
- Color contrast (21:1 ratio)
- Reduced motion support

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- iOS Safari 14+
- Android Chrome (latest)

## License

All rights reserved © 2026 2fish
