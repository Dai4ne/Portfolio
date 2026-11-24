const logo = document.querySelector('.logoheader');
let entradaConcluida = false;

//Animação ao carregar a página
logo.style.animation = 'rotacionar 3s ease-out forwards';

logo.addEventListener('animationend', () => {
    if (!entradaConcluida) {
        entradaConcluida = true;
        logo.style.animation = 'none'; //para de vez
    } else {
        logo.style.animation = 'none'; //completa a volta e para
    }
});


//Navbar fixa 
const nav = document.querySelector('nav');
const header = document.querySelector('header');

// Cria um placeholder invisível do mesmo tamanho da navbar
const placeholder = document.createElement('div');
placeholder.style.height = nav.offsetHeight + 'px';
placeholder.style.display = 'none';
nav.parentNode.insertBefore(placeholder, nav.nextSibling);

window.addEventListener('scroll', () => {
    const headerBottom = header.getBoundingClientRect().bottom;
  
    if (headerBottom <= 0) {
        nav.classList.add('fixed', 'top-0', 'left-0', 'right-0');
        placeholder.style.display = 'block';}
    
    else {
        nav.classList.remove('fixed', 'top-0', 'left-0', 'right-0');
        placeholder.style.display = 'none';}
});