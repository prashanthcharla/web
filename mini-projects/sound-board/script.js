const sounds = Array.of(
    'gasp',
    'glass-bottle-shatter',
    'open-small-lid',
    'point-in-space',
    'small-explosion',
    'splash',
    'stone-dropping'
);

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join(' ');

    btn.addEventListener('click', event => {
        document.getElementById(sound).play();
    });

    document.body.appendChild(btn);
})