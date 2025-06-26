const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const menu = document.querySelector('.topnav_menu');

function openMobilemenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  menu.classList.add('active');
}

function closeMobilemenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  menu.classList.remove('active');
}

btnOpen.addEventListener('click', openMobilemenu);
btnClose.addEventListener('click', closeMobilemenu);