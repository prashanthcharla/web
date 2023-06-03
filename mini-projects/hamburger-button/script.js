const btn = document.getElementById('btn');
const nav = document.getElementById('navbar');
let status = false;

btn.addEventListener('click', event => {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
});