const numOne = document.getElementById('1')
const numTwo = document.getElementById('1')
const numThree = document.getElementById('1')
const numFour = document.getElementById('1')
const numFive = document.getElementById('1')
const numSix = document.getElementById('1')
const numSeven = document.getElementById('1')
const numEight = document.getElementById('1')
const numNine = document.getElementById('1')
const numZero = document.getElementById('1')
const plusSign = document.getElementById('1')
const minusSign = document.getElementById('1')
const multiplySign = document.getElementById('1')
const divideSign = document.getElementById('1')
const equalSign = document.getElementById('1')
const decimalPoint = document.getElementById('1')
const trash = document.getElementById('1')

console.log(numOne);
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

