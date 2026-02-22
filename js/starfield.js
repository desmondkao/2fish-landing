/* ============================================
   Starfield Generator - Dense star background
   Based on desmondkao.com approach
   ============================================ */

(function() {
  const stardustContainer = document.querySelector('.stardust');
  const shootingStarsContainer = document.querySelector('.shooting-stars');

  // Generate 1500 static stars
  function generateStars() {
    const fragment = document.createDocumentFragment();
    const numStars = 1500;

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('span');

      // Random position
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;

      // Random size (0.5px to 1.5px, most should be small)
      const size = Math.random() < 0.9 ? 0.5 + Math.random() * 0.5 : 1 + Math.random() * 0.5;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      // Random opacity (0.3 to 1.0 for twinkling effect)
      star.style.opacity = 0.3 + Math.random() * 0.7;

      fragment.appendChild(star);
    }

    stardustContainer.innerHTML = '';
    stardustContainer.appendChild(fragment);
  }

  // Generate shooting star
  function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star-dynamic';

    // Random starting position from top/sides (like desmondkao.com)
    const edge = Math.floor(Math.random() * 3);
    switch(edge) {
      case 0: // top
        star.style.top = '0';
        star.style.left = `${Math.random() * 100}%`;
        break;
      case 1: // right
        star.style.right = '0';
        star.style.top = `${Math.random() * 50}%`;
        break;
      case 2: // left
        star.style.left = '0';
        star.style.top = `${Math.random() * 50}%`;
        break;
    }

    // Random length (60-140px like desmondkao.com)
    const length = 60 + Math.random() * 80;
    star.style.width = `${length}px`;

    // Random angle (30-90 degrees for diagonal downward movement)
    const angle = 30 + Math.random() * 60;
    const direction = Math.random() > 0.5 ? angle : -angle;
    star.style.setProperty('--angle', `${direction}deg`);

    // Calculate movement direction based on angle
    const distance = 600;
    const radians = (direction * Math.PI) / 180;
    const dx = Math.cos(radians) * distance;
    const dy = Math.sin(radians) * distance;
    star.style.setProperty('--dx', `${dx}px`);
    star.style.setProperty('--dy', `${dy}px`);

    // Random duration (2s to 3s for smooth movement)
    const duration = 2 + Math.random();
    star.style.animationDuration = `${duration}s`;

    shootingStarsContainer.appendChild(star);

    // Remove after animation completes
    setTimeout(() => {
      star.remove();
    }, duration * 1000);
  }

  // Spawn shooting stars at intervals - more natural timing
  function spawnShootingStars() {
    // Random delay between 4-10 seconds for next star
    const delay = 4000 + Math.random() * 6000;

    setTimeout(() => {
      createShootingStar();

      // Rare burst effect (5% chance instead of 15%)
      if (Math.random() < 0.05) {
        // Stagger the burst stars more naturally
        setTimeout(() => createShootingStar(), 800 + Math.random() * 400);
        setTimeout(() => createShootingStar(), 1600 + Math.random() * 400);
      }

      spawnShootingStars();
    }, delay);
  }

  // Initialize with staggered start times
  generateStars();

  // Start multiple spawn timers with different offsets for variety
  spawnShootingStars();
  setTimeout(() => spawnShootingStars(), 2000);
  setTimeout(() => spawnShootingStars(), 5000);

  // Regenerate stars on window resize
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(generateStars, 250);
  });
})();
