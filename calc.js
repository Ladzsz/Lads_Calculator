//bringing in all nesecary content.

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.btn-number');
const operatorButtons = document.querySelectorAll('.btn-operator');
let displayValue = '';


//making the functions below


//addition function

function add(num1, num2) {
    let total = num1 + num2;
    return display.textContent = total;
}


//subtraction function

function subtract(num1, num2) {
    let total = num1 - num2;
    return display.textContent = total;
}


//multiplication function

function multiply(num1, num2) {
    let total = num1 * num2;
    return display.textContent = total;
}


//division function

function divide(num1, num2) {
    let total = num1 / num2;
    return display.textContent = total;
}


//operation function below


function operate(num1, num2, opp) {
    if (opp == "+") {
        add(num1, num2)
    } else if (opp == "-") {
        subtract(num1, num2)
    } else if (opp == "*") {
        multiply(num1, num2)
    } else {
        divide(num1, num2)
    }
}