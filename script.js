const numOne = document.getElementById('1')
const numTwo = document.getElementById('2')
const numThree = document.getElementById('3')
const numFour = document.getElementById('4')
const numFive = document.getElementById('5')
const numSix = document.getElementById('6')
const numSeven = document.getElementById('7')
const numEight = document.getElementById('8')
const numNine = document.getElementById('9')
const numZero = document.getElementById('0')
const plusSign = document.getElementById('plus')
const minusSign = document.getElementById('minus')
const multiplySign = document.getElementById('multiply')
const divideSign = document.getElementById('divide')
const equalSign = document.getElementById('equal')
const decimalPoint = document.getElementById('decimal')
const clear = document.getElementById('clear')
const back = document.getElementById('back')
const display = document.getElementById('number')

console.log(display);
function add(a, b) {
    let sum = a + b;
    console.log(sum);
}
function subtract(a, b) {
    let sum = a -b;
    console.log(sum);
}
function multiply(a, b) {
    let sum = a * b;
    console.log(sum);
}
function divide(a, b) {
    let sum = a / b;
    console.log(sum);
}
function operate(operator, a, b) {
    if (operator === '+') {
        add(a, b)
    }
    else if (operator === '-'){
        subtract(a, b)
    }
    else if (operator === '*'){
        multiply(a, b)
    }
    else if (operator === '/'){
        divide(a, b)
    }
}

function updateDisplay(input) {
    display.textContent = input;
    
}

numOne.addEventListener('click', 
() => {updateDisplay(1);});
numTwo.addEventListener('click', 
() => {updateDisplay(2);});
numThree.addEventListener('click', 
() => {updateDisplay(3);});
numFour.addEventListener('click', 
() => {updateDisplay(4);});
numFive.addEventListener('click', 
() => {updateDisplay(5);});
numSix.addEventListener('click', 
() => {updateDisplay(6);});
numSeven.addEventListener('click', 
() => {updateDisplay(7);});
numEight.addEventListener('click', 
() => {updateDisplay(8);});
numNine.addEventListener('click', 
() => {updateDisplay(9);});
numZero.addEventListener('click', 
() => {updateDisplay(0);});
plusSign.addEventListener('click', 
() => {updateDisplay('+');});
minusSign.addEventListener('click', 
() => {updateDisplay('-');});
multiplySign.addEventListener('click', 
() => {updateDisplay('*');});
divideSign.addEventListener('click', 
() => {updateDisplay('/');});
decimalPoint.addEventListener('click', 
() => {updateDisplay('.');});




//equalSign.addEventListener('click', () => {updateDisplay(1);});

//clear.addEventListener('click', () => {updateDisplay(1);});

//back.addEventListener('click', () => );


