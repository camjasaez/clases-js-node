const toggleButton = document.querySelector('.header__toggle-button');
const navbarList = document.querySelector('.header__navbar-list');

toggleButton.addEventListener('click', () => {
  navbarList.classList.toggle('header__navbar-list--active');
});

const navbarLinks = document.querySelectorAll('.header__navbar-link');

navbarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbarList.classList.remove('header__navbar-list--active');
  });
});
