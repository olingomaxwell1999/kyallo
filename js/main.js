// // Toggle navigation menu on small screens
// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');

// burger.addEventListener('click', () => {
//   navLinks.classList.toggle('nav-active');
//   burger.classList.toggle('toggle');
// });

// Toggle navigation menu on small screens
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
});

// Close navigation menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links li');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('nav-active')) {
      navLinks.classList.remove('nav-active');
      burger.classList.remove('toggle');
    }
  });
});