const toggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.menu');
toggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelector('footer form')?.addEventListener('submit',event=>event.preventDefault());
