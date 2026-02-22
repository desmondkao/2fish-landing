# Placeholder Images - Assets Needed

Place the following image files in this directory (`/assets/images/`):

## Required Images

### 1. app-icon.png
- **Size:** 512x512px
- **Format:** PNG with transparency
- **Usage:** Navigation logo, footer, favicon
- **Description:** Your 2fish app icon

### 2. hero-visual.png
- **Size:** 1200x800px (or larger for retina)
- **Format:** PNG or WebP
- **Usage:** Hero section main visual
- **Description:** iPhone mockup showing the app, or a mystical dream-themed illustration

### 3. screenshot-1.png
- **Size:** 1170x2532px (iPhone dimensions)
- **Format:** PNG
- **Usage:** "How It Works" step 1, Showcase gallery
- **Description:** Dream recording interface with voice/text input

### 4. screenshot-2.png
- **Size:** 1170x2532px
- **Format:** PNG
- **Usage:** "How It Works" step 2, Showcase gallery
- **Description:** Framework selection screen (Jungian, Freudian, CBT, Neuroscience)

### 5. screenshot-3.png
- **Size:** 1170x2532px
- **Format:** PNG
- **Usage:** "How It Works" step 3, Showcase gallery
- **Description:** AI analysis results with insights and interpretations

### 6. og-image.png
- **Size:** 1200x630px
- **Format:** PNG or JPG
- **Usage:** Social media sharing (Facebook, Twitter, LinkedIn)
- **Description:** Branded image with 2fish logo and tagline

## Image Optimization Tips

Before uploading to Squarespace:
1. **Compress images** using TinyPNG (https://tinypng.com/)
2. **Consider WebP format** for better compression
3. **Use 2x size for retina displays** (e.g., 2400x1600px for hero, then displayed at 1200x800px)
4. **Optimize for web** - balance quality vs file size
5. **Target file sizes:**
   - App icon: < 100KB
   - Hero visual: < 500KB
   - Screenshots: < 300KB each
   - OG image: < 300KB

## Temporary Placeholder Generation

If you need temporary placeholders for testing, use:

### Online Tools
- **Placeholder.com:** `https://via.placeholder.com/512x512/000000/00CCFF?text=2fish`
- **Lorem Picsum:** `https://picsum.photos/1200/800`

### Local Generation (macOS)
```bash
# Create solid color placeholder
sips -c 512 512 --padColor 000000 /System/Library/CoreServices/DefaultBackground.jpg --out app-icon.png

# Or use ImageMagick if installed
convert -size 512x512 xc:#000000 -fill "#00CCFF" -pointsize 72 -gravity center -annotate +0+0 "2fish" app-icon.png
```

## Design Resources for Screenshots

### iPhone Mockup Generators
- **Mockuphone:** https://mockuphone.com/
- **Previewed:** https://previewed.app/
- **Smartmockups:** https://smartmockups.com/

### Screenshot Templates
1. Export your app screens from Xcode Simulator (Cmd+S)
2. Use mockup generator to add device frame
3. Optionally add background or shadow effects

### OG Image Design Tools
- **Canva:** Pre-sized social media templates
- **Figma:** Community templates for OG images
- **Photopea:** Free Photoshop alternative online

## Current Status

✅ Feature icons created (SVG) - Ready to use
❌ App icon - **NEEDED**
❌ Hero visual - **NEEDED**
❌ Screenshots 1-3 - **NEEDED**
❌ OG image - **NEEDED**

Once you have these images, place them in this directory and the landing page will be complete!
