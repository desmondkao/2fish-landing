/* ============================================
   Platform Detection for App Store Links
   ============================================ */

(function() {
  // Detect user's platform
  const detectPlatform = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'ios';
    }

    // Android detection
    if (/android/i.test(userAgent)) {
      return 'android';
    }

    // Desktop (default to iOS App Store)
    return 'ios';
  };

  // App Store URLs
  const APP_STORE_URLS = {
    ios: 'https://apps.apple.com/us/app/2fish/id6748346359',
    android: 'https://play.google.com/store/apps/details?id=com.2fish.app' // Replace if Android version exists
  };

  // Update all App Store links based on platform
  const updateAppStoreLinks = () => {
    const platform = detectPlatform();
    const appStoreUrl = APP_STORE_URLS[platform];

    // Update all CTA buttons
    const ctaButtons = document.querySelectorAll('#heroCTA, #finalCTA, .btn--nav');
    ctaButtons.forEach(button => {
      // Only update if it's a link (anchor tag)
      if (button.tagName === 'A') {
        button.href = appStoreUrl;
      } else {
        // If it's a button, wrap it in a link or add click handler
        button.addEventListener('click', () => {
          window.location.href = appStoreUrl;
        });
      }
    });

    // Update button text for Android
    if (platform === 'android') {
      const buttonTexts = document.querySelectorAll('.btn svg + text, .btn');
      buttonTexts.forEach(element => {
        const textContent = element.textContent || element.innerText;
        if (textContent && textContent.includes('App Store')) {
          element.textContent = textContent.replace('App Store', 'Google Play');
          element.innerText = element.textContent; // Ensure compatibility
        }
      });
    }

    // Log platform for debugging
    console.log(`Platform detected: ${platform}`);
    console.log(`App Store URL: ${appStoreUrl}`);
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAppStoreLinks);
  } else {
    updateAppStoreLinks();
  }
})();
