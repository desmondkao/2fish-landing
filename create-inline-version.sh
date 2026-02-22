#!/bin/bash

# Script to create a single-file inline HTML version for Squarespace deployment
# This combines all CSS and JS into the HTML file

echo "Creating inline version of 2fish landing page for Squarespace..."

# Output file
OUTPUT_FILE="index-inline.html"

# Start with base HTML
cp index.html "$OUTPUT_FILE"

# Create temporary files for CSS and JS
COMBINED_CSS=$(mktemp)
COMBINED_JS=$(mktemp)

# Combine all CSS files
cat css/reset.css > "$COMBINED_CSS"
echo "" >> "$COMBINED_CSS"
cat css/styles.css >> "$COMBINED_CSS"
echo "" >> "$COMBINED_CSS"
cat css/animations.css >> "$COMBINED_CSS"

# Combine all JS files
cat js/app-store-detect.js > "$COMBINED_JS"
echo "" >> "$COMBINED_JS"
cat js/main.js >> "$COMBINED_JS"

# Create inline CSS block
INLINE_CSS="<style>\n$(cat "$COMBINED_CSS")\n</style>"

# Create inline JS blocks
INLINE_JS_1="<script>\n$(cat js/app-store-detect.js)\n</script>"
INLINE_JS_2="<script>\n$(cat js/main.js)\n</script>"

# Replace CSS links with inline styles
# Remove all stylesheet links
sed -i '' '/<link rel="stylesheet" href="\/css\/reset.css">/d' "$OUTPUT_FILE"
sed -i '' '/<link rel="stylesheet" href="\/css\/styles.css">/d' "$OUTPUT_FILE"
sed -i '' '/<link rel="stylesheet" href="\/css\/animations.css">/d' "$OUTPUT_FILE"

# Add inline CSS before </head>
sed -i '' "s|</head>|    $INLINE_CSS\n</head>|" "$OUTPUT_FILE"

# Replace JS script tags with inline scripts
sed -i '' "s|<script src=\"/js/app-store-detect.js\"></script>|$INLINE_JS_1|" "$OUTPUT_FILE"
sed -i '' "s|<script src=\"/js/main.js\"></script>|$INLINE_JS_2|" "$OUTPUT_FILE"

# Clean up temp files
rm "$COMBINED_CSS" "$COMBINED_JS"

echo "✅ Inline version created: $OUTPUT_FILE"
echo ""
echo "Next steps:"
echo "1. Open $OUTPUT_FILE in a text editor"
echo "2. Update image paths to Squarespace CDN URLs"
echo "3. Update App Store link in the JavaScript section"
echo "4. Copy the entire contents"
echo "5. Paste into a Squarespace Code Block"
echo ""
echo "For deployment instructions, see SQUARESPACE_DEPLOYMENT.md"
