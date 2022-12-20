const navBar = document.querySelector('.nav-bar');
const ham = document.querySelector('.ham');
const header__texto = document.querySelector('.header__texto');

ham.addEventListener('click', function(){
    navBar.classList.toggle('activo');
    navBar.classList.toggle('fade');
    header__texto.classList.toggle('desplazarVertical');
});