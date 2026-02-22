# 2fish Landing Page - Quick Start Guide 🚀

## What You Have

A **complete, production-ready landing page** for your 2fish iOS dream analysis app!

### Status: ✅ READY TO DEPLOY

All code is written, all assets are organized, and the page is fully functional.

## Visual Preview

Your landing page includes:

1. **Hero Section** - "Where Dreams Reveal Their Secrets" with your beautiful recording screen
2. **Problem Statement** - "Your Dreams Fade. Their Meaning Shouldn't."
3. **4 Feature Cards** - Capture, AI Analysis, Frameworks, Archive
4. **How It Works** - 3-step process with screenshots
5. **Showcase Gallery** - Beautiful app screenshots
6. **Final CTA** - "Begin Your Journey Into the Unknown"
7. **Footer** - Links and copyright

### Design Highlights
- 🌑 Pure black background (#000000)
- ✨ Glassmorphism with backdrop blur
- 💎 Cyan accent color (#00CCFF) - matches your app!
- 🎬 Smooth scroll animations
- 📱 Fully responsive (mobile-first)

## Test It Right Now

A local server is running! Open your browser:

**👉 http://localhost:8000**

Try:
- Scrolling to see animations
- Resizing window to see responsive design
- Hovering over cards and buttons
- Testing on mobile device (use your local IP)

## Deploy to Squarespace (5 Minutes)

### Step 1: Configure (2 minutes)

Edit these files:

**1. App Store URL** - `js/app-store-detect.js` line 18:
```javascript
ios: 'https://apps.apple.com/app/YOUR-ACTUAL-APP-ID'
```

**2. Domain** - `index.html` line 11:
```html
content="https://your-squarespace-domain.com"
```

### Step 2: Create Single File (30 seconds)

```bash
./create-inline-version.sh
```

This creates `index-inline.html` with everything combined.

### Step 3: Upload Assets to Squarespace (2 minutes)

1. Log into Squarespace
2. **Design → Custom CSS → Manage Custom Files**
3. Upload these files:
   - `assets/images/app-icon.png`
   - `assets/images/hero-visual.png`
   - `assets/images/screenshot-1.png`
   - `assets/images/screenshot-2.png`
   - `assets/images/screenshot-3.png`
   - `assets/icons/*.svg` (all 4 icons)
4. **Copy each CDN URL** (right-click file → Copy Link)

### Step 4: Update Paths in HTML (2 minutes)

Open `index-inline.html` and replace all `/assets/...` paths with Squarespace CDN URLs.

**Find:** `/assets/images/app-icon.png`
**Replace with:** `https://images.squarespace-cdn.com/content/v1/.../app-icon.png`

(Do this for all 9 image/icon paths)

### Step 5: Deploy (1 minute)

1. Create a **Blank Page** in Squarespace
2. Add a **Code Block**
3. Paste entire `index-inline.html` contents
4. **Publish!** 🎉

## Files You Need

### Core Files (already created)
- ✅ `index.html` - Main page
- ✅ `css/` - All styles (dark theme, glassmorphism, animations)
- ✅ `js/` - Navigation, scroll effects, platform detection
- ✅ `assets/icons/` - 4 feature icons (SVG)
- ✅ `assets/images/` - Logo + 3 screenshots

### Assets (already copied)
- ✅ `app-icon.png` - Your beautiful 2fish logo
- ✅ `hero-visual.png` - Recording screen with starry fish
- ✅ `screenshot-1.png` - Recording interface
- ✅ `screenshot-2.png` - Deep analysis (Jungian/Cognitive)
- ✅ `screenshot-3.png` - History view

### Optional
- ⚪ `og-image.png` - Social sharing image (1200x630px)
  - Use Canva to create or use placeholder

## Documentation

Detailed guides available:

- **README.md** - Project overview
- **DEPLOY_CHECKLIST.md** - Complete deployment steps
- **SQUARESPACE_DEPLOYMENT.md** - Squarespace-specific guide
- **IMPLEMENTATION_COMPLETE.md** - Full feature list
- **ASSETS_READY.md** - Asset status

## Key Features

### Design
- Dark & minimal aesthetic (inspired by Monk.app)
- Mystical, intriguing copy
- Glassmorphic cards with blur effects
- Smooth animations (fade-in, floating, glow)

### Technical
- Semantic HTML5
- Mobile-responsive (breakpoints: 810px, 1200px)
- SEO optimized (meta tags, Schema.org)
- Accessible (ARIA labels, keyboard nav, 21:1 contrast)
- Fast loading (< 3 seconds target)

### Content
- Evocative hero headline
- 4 feature cards with benefits
- 3-step "How It Works" process
- Multiple CTAs for App Store download
- Footer with links

## Customization

### Change Colors

Edit `css/styles.css` custom properties:
```css
--color-accent: #00CCFF;  /* Change to any color */
```

### Update Copy

Edit `index.html` directly - all text is inline and easy to find:
- Hero headline: Line ~57
- Feature cards: Lines ~110-160
- Step descriptions: Lines ~180-230

### Add Analytics

Uncomment Google Analytics or add Cloudflare Analytics:
```html
<!-- Add before </body> -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js'
        data-cf-beacon='{"token": "YOUR_TOKEN"}'></script>
```

## Troubleshooting

### Images not showing locally?
- Make sure you're accessing via http://localhost:8000
- Check browser console for errors

### Styles look wrong?
- CSS files must be in `/css/` directory
- Or use `index-inline.html` which has styles embedded

### Animations not working?
- Check browser console for JavaScript errors
- Try Chrome or Safari (best support)

## Next Steps

1. ✅ **Test locally** - Visit http://localhost:8000
2. ⚪ **Update configuration** - App Store URL and domain
3. ⚪ **Create inline version** - Run `./create-inline-version.sh`
4. ⚪ **Deploy to Squarespace** - Follow DEPLOY_CHECKLIST.md
5. ⚪ **Test live site** - Mobile, desktop, all browsers
6. ⚪ **Share with world!** - Tweet, post, launch!

## Support

Questions? Check these files:
- Configuration issues → DEPLOY_CHECKLIST.md
- Squarespace specific → SQUARESPACE_DEPLOYMENT.md
- Asset questions → assets/images/ASSETS_READY.md

## Stop Local Server

When done testing:
```bash
pkill -f "python3 -m http.server 8000"
```

---

## You're Ready! 🎉

Your landing page is **complete and beautiful**. The dark theme with mystical messaging perfectly captures the essence of dream exploration.

The app screenshots you provided are stunning and match the aesthetic perfectly. All that's left is deploying to Squarespace!

**Estimated time to deploy: 10 minutes**

Good luck with your launch! 🌙✨
