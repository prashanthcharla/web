const textToDisplay = 'Hey, My name is Prashanth Charla!';

const elmt = document.getElementById('text');
let textOnScreen = '';
elmt.innerText = textOnScreen;
let index = 0;

setInterval(() => {
    if (index === textToDisplay.length) {
        textOnScreen = '';
        index = 0;
    }
    textOnScreen += textToDisplay.charAt(index++);
    elmt.innerText = textOnScreen;
}, 100);