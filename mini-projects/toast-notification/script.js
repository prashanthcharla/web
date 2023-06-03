const container = document.getElementById('container');
const btn = document.getElementById('btn');

btn.addEventListener('click', event => createToastNotification());

function createToastNotification() {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerText = 'I am toast';

    container.appendChild(toast);

    setTimeout(() => container.removeChild(toast), 1500);
}