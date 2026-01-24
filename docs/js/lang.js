const langToggle = document.getElementById('lang-toggle');
const langMenu = document.getElementById('lang-menu');
const langOverlay = document.getElementById('lang-overlay');

// Toggle menu
langToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent document click from closing immediately

  const isHidden = getComputedStyle(langMenu).display === 'none';
  langMenu.style.display = isHidden ? 'flex' : 'none';
  langOverlay.style.display = isHidden ? 'block' : 'none';
});

// Handle language selection
langMenu.querySelectorAll('p').forEach(option => {
  option.addEventListener('click', (e) => {
    console.log(`Language selected: ${option.dataset.lang}`);
    langMenu.style.display = 'none';
    langOverlay.style.display = 'none';
    e.stopPropagation(); // prevent bubbling
  });
});

// Close menu when clicking overlay
langOverlay.addEventListener('click', () => {
  langMenu.style.display = 'none';
  langOverlay.style.display = 'none';
});