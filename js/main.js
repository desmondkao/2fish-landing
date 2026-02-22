/* ============================================
   2Fish Landing Page - Main JavaScript
   ============================================ */

// Navigation scroll effect - Blur background when scrolled
const nav = document.getElementById('mainNav');
let ticking = false;

const updateNavigation = () => {
  const currentScrollPosition = window.pageYOffset;

  // Add blur effect when scrolled
  if (currentScrollPosition > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  ticking = false;
};

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateNavigation);
    ticking = true;
  }
}, { passive: true });

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if href is just "#"
    if (href === '#') {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = nav.offsetHeight;
      const targetPosition = target.offsetTop - navHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for smooth scroll-triggered animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add slight delay for smoother feel
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, 100);
      // Unobserve after animation for performance
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});

// App Store button click tracking (placeholder for analytics)
const trackCTAClick = (ctaId) => {
  console.log(`CTA clicked: ${ctaId}`);
  // Add analytics tracking here (e.g., Google Analytics, Mixpanel)
  // Example: gtag('event', 'click', { 'event_category': 'CTA', 'event_label': ctaId });
};

// Attach tracking to CTA buttons
document.getElementById('heroCTA')?.addEventListener('click', () => {
  trackCTAClick('hero_cta');
});

document.getElementById('finalCTA')?.addEventListener('click', () => {
  trackCTAClick('final_cta');
});

document.querySelectorAll('.btn--nav').forEach(btn => {
  btn.addEventListener('click', () => {
    trackCTAClick('nav_cta');
  });
});

// Preload critical images
const preloadImages = () => {
  const criticalImages = [
    '/assets/images/hero-visual.png',
    '/assets/images/app-icon.png'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', preloadImages);
} else {
  preloadImages();
}

// Handle keyboard navigation accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

// Add focus styles for keyboard navigation
const style = document.createElement('style');
style.textContent = `
  body.keyboard-navigation *:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  body:not(.keyboard-navigation) *:focus {
    outline: none;
  }
`;
document.head.appendChild(style);
