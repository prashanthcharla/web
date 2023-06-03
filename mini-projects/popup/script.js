const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

const popupContainer = document.getElementById('container');

openBtn.addEventListener('click', () => {
    popupContainer.classList.add('active')
});

closeBtn.addEventListener('click', () => {
    popupContainer.classList.remove('active')
});