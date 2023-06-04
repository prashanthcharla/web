const pwd = document.getElementById('pwd');
const copyBtn = document.getElementById('copyBtn');
const genBtn = document.getElementById('generateBtn');

const pwdLen = document.getElementById('pwdLength');
const upperCaseCtrl = document.getElementById('upperCaseFlag');
const lowerCaseCtrl = document.getElementById('lowerCaseFlag');
const numbersCtrl = document.getElementById('numbersFlag');
const symbolsCtrl = document.getElementById('symbolsFlag');


const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '~!@#$%^&*()-_?';

function getUpperCase() {
    return upper[Math.floor(Math.random() * upper.length)];
}

function getLowerCase() {
    return lower[Math.floor(Math.random() * lower.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getFunctions() {
    let functionArray = new Array();

    if(upperCaseCtrl.checked) {
        functionArray.push(getUpperCase)
    }
    if(lowerCaseCtrl.checked) {
        functionArray.push(getLowerCase)
    }
    if(numbersCtrl.checked) {
        functionArray.push(getNumber)
    }
    if(symbolsCtrl.checked) {
        functionArray.push(getSymbol)
    }

    console.log(functionArray, functionArray.length)

    return functionArray.length > 0 ? functionArray : [
        getUpperCase,
        getLowerCase,
        getNumber,
        getSymbol
    ];
}

function generatePassword() {
    let functions = getFunctions();
    let passsword = '';
    for(let i=0;i<pwdLen.value;i++) {
        let x = functions[Math.floor(Math.random() * functions.length)];
        passsword += x();
    }
    pwd.innerText = passsword;
}

genBtn.addEventListener('click', () => generatePassword());

function copyPassword() {
    let text = pwd.innerHTML;
    const copyContent = async () => {
        try {
            await navigator.clipboard.writeText(text);
            copyBtn.innerText = 'Copied!';
            setTimeout(() => {
                copyBtn.innerText = 'Copy';
            }, 500);
        } catch (err) {
            alert('Failed to copy '+pwd.innerText)
        }
    }
    copyContent();
}

copyBtn.addEventListener('click', () => copyPassword())