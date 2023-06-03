function createHeart(color) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤';

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.color = color;

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(() => createHeart("rebeccapurple"), 100);
setInterval(() => createHeart("red"), 100);
setInterval(() => createHeart("green"), 100);
