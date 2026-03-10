const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navBackdrop = document.getElementById('nav-backdrop');

function nav_toggle() {
  navMenu.classList.toggle('active');
  navBackdrop.classList.toggle('active');
}

navBackdrop.addEventListener('click', () => {
  navMenu.classList.remove('active');
  navBackdrop.classList.remove('active');
});