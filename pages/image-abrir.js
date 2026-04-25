
const modal = document.getElementById('meuModal');
const modalImg = document.getElementById('modalImg');
const fecharBtn = document.querySelector('.modal-fechar');

function abrirModal(imagemSrc) {
    modalImg.src = imagemSrc;
    modal.style.display = 'flex';
}

function fecharModal() {
    modal.style.display = 'none';
}

const imagens = document.querySelectorAll('.imagem-clicavel');
imagens.forEach(img => {
    img.addEventListener('click', () => {
        abrirModal(img.src);
    });
});

fecharBtn.addEventListener('click', fecharModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});