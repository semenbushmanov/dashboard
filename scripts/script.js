const sidebarBtn = document.querySelector('.open-btn');
const wrapper = document.querySelector('.wrapper');
const navLinkText = document.querySelectorAll('.nav-link__text');
const navSearchText = document.querySelector('.nav-search__text');
const sidebarBtnText = document.querySelectorAll('.sidebar__btn-text');
const darkThemeBtn = document.querySelector('.dark-theme-btn');
const darkModeText = darkThemeBtn.querySelector('.dark-mode');
const lightModeText = darkThemeBtn.querySelector('.light-mode');

sidebarBtn.addEventListener('click', () => {
  wrapper.classList.toggle('sidebar-opened');
  navLinkText.forEach(e => e.classList.toggle('visually-hidden'));
  navSearchText.classList.toggle('visually-hidden');
  sidebarBtnText.forEach(e => e.classList.toggle('visually-hidden'));
});

darkThemeBtn.addEventListener('click', () => {
  wrapper.classList.toggle('dark');
  darkThemeBtn.classList.toggle('dark'); 
  darkModeText.classList.toggle('visually-hidden');
  lightModeText.classList.toggle('visually-hidden');
});
