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


function add(a, b) {
    let sum = parseInt(a) + parseInt(b);
    display.textContent = sum;
    displayValue['value'] = sum
}

function subtract(a, b) {
    let sum = a - b;
    display.textContent = sum;
    displayValue['value'] = sum;
}
function multiply(a, b) {
    let sum = a * b;
    display.textContent = sum;
    displayValue['value'] = sum;
}
function divide(a, b) {
    if (b = 0) {
        display.textContent = 'SELFDESTRUCT'
        displayValue['value'] = ''
    }
    else {
    let sum = parseInt(a) / parseInt(b);
    sum = Math.round(1000*sum)/1000
    display.textContent = sum;
    displayValue['value'] = sum;
    }
}
function operate(operator, a, b) {
    if (operator === '+') {
        add(a, b)
    }
    if (operator === '-'){
        subtract(a, b)
    }
    if (operator === '*'){
        multiply(a, b)
    }
    if (operator === '/'){
        divide(a, b)
    }

}



let displayValue = {
    operatorSign: "",
    value: "",
    operandOne: "",
    operandTwo: "",
};
function inputValue(input) {
    displayValue['operatorSign'] = input
    displayValue['operandOne'] = displayValue['value'];
    console.log(displayValue['operatorSign']);
    console.log(displayValue['operandOne']);
}
function compute() {
    displayValue['operandTwo'] = displayValue['value'];
    operate(displayValue['operatorSign'], displayValue['operandOne'], displayValue['operandTwo']);
    console.log('this is ') + displayValue['value'];
}

function updateDisplay(input) {
    if (displayValue['value'] == '-' || displayValue['value'] == '+' 
    || displayValue['value'] == 'X' || displayValue['value'] == '/') {
        displayValue['value'] = ''
        
    }
    if (input == '-' || input == '+' 
        || input == 'X' || input == '/') {
        display.textContent = input
        displayValue['value'] = input;   
        
    }

    else {
        display.textContent += input;   
        displayValue['value'] += input;
        
    }

   
    console.log(displayValue['value']);
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
() => {
    inputValue('+');
    updateDisplay('+');
});

minusSign.addEventListener('click', 
() => {
    inputValue('-');
    updateDisplay('-');
});

multiplySign.addEventListener('click', 
() => {
    inputValue('*');
    updateDisplay('X');});

divideSign.addEventListener('click', 
() => {
    inputValue('/');
    updateDisplay('/');});

decimalPoint.addEventListener('click', 
() => {updateDisplay('.');});


equalSign.addEventListener('click', 
() => {
    compute();
});

clear.addEventListener('click', 
() => {
    display.textContent = '';
    displayValue['value'] = ''}
    );

back.addEventListener('click', 
    () =>{
        let arr = Array.from(displayValue['value']);
        console.log(arr);
        arr.pop();
        let deleted = arr.join("");
        displayValue['value'] = deleted;
        display.textContent = deleted;
    }
    );


