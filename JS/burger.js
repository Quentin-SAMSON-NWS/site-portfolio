const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');

function openMobilemenu(){
  btnOpen.setAttribute('aria-expend', 'true');
}

function closeMobilemenu(){
  btnOpen.setAttribute('aria-expend', 'false');
}



btnOpen.addEventListener('click',openMobilemenu);

btnClose.addEventListener('click',openMobilemenu);