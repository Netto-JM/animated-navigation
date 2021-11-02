const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = [];
const navNames = ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5'];
navNames.forEach((nav, i) => navItems[i] = document.getElementById(nav));

// Control Navigation Animation
const navAnimation = (direction) => {
  const to = direction === 'out' ? direction : 'in';
  const from = to === 'in' ? 'out' : 'in';
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${from}-${i+1}`, `slide-${to}-${i+1}`);
  });
};

const toggleNav = () => {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle('change');
  // Toggle: Menu Active
  overlay.classList.toggle('overlay-slide-right');
  // Animate In and Out - Overlay
  const animateInOverlay = menuBars.classList.contains('change');
  animateInOverlay ? navAnimation('in') : navAnimation('out');
};

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach(nav => nav.addEventListener('click', toggleNav));