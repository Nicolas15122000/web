const hamburguer_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburguer')
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburguer_icon.addEventListener('click',()=> {
    nav_list.classList.toggle('open');
    hamburguer_icon.classList.toggle('active');
});