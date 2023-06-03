const container = document.getElementById('container');
const image = document.querySelector('img');

container.addEventListener('mousemove', event => {
    const x = event.clientX - event.target.offsetLeft;
    const y = event.clientY - event.target.offsetTop;

    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = 'scale(2)';
});

container.addEventListener('mouseleave', event => {
    image.style.transformOrigin = 'center center';
    image.style.transform = 'scale(1)';
});