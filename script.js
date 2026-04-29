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

logo.addEventListener('mouseenter', () => {
    if (entradaConcluida) {
        logo.style.animation = 'rotacionar 3s linear infinite';
    }
});

logo.addEventListener('mouseleave', () => {
    if (entradaConcluida) {
        logo.style.animation = 'rotacionar 3s ease-out forwards';
    }
});

//modal dos certificados
function abrirModal(titulo, descricao) {
    document.getElementById('modal-titulo').textContent = titulo;
    document.getElementById('modal-descricao').textContent = descricao;
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('overlay').classList.remove('hidden');
}

function fecharModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('overlay').classList.add('hidden');
}