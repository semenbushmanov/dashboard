const sidebarBtn = document.querySelector('.open-btn');
const wrapper = document.querySelector('.wrapper');
const navLinkText = document.querySelectorAll('.nav-link__text');
const sidebarBtnText = document.querySelectorAll('.sidebar__btn-text');



sidebarBtn.addEventListener('click', () => {
  wrapper.classList.toggle('sidebar-opened');
  navLinkText.forEach(e => e.classList.toggle('visually-hidden'));
  sidebarBtnText.forEach(e => e.classList.toggle('visually-hidden'));
});
