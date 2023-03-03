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

