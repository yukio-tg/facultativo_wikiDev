const toggleBtn = document.getElementById('asideToggle');
const overlay = document.getElementById('asideOverlay');
const aside = document.querySelector('aside');

function openAside() {
    aside.classList.add('visible');
    overlay.style.display = 'flex';
}

function closeAside() {
    aside.classList.remove('visible');
    overlay.style.display = 'none';
}

function toggleAside() {
    if (aside.classList.contains('visible')) {
        closeAside();
    } else {
        openAside();
    }
}

toggleBtn.addEventListener('click', toggleAside);
overlay.addEventListener('click', closeAside);