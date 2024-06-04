//bringing in all nesecary content.

const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.button_num');
const operatorButtons = document.querySelectorAll('.button_opp');
    let firstNumber = '';
    let secondNumber = '';
    let currentOperator = '';
    let isFirstNumber = true;

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


//making the event listeners


 // Function to update display
 function updateDisplay(value) {
    display.textContent = value;
}


// number button event listener


numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;

        if (isFirstNumber) {
            firstNumber += buttonText;
            updateDisplay(firstNumber);
        } else {
            secondNumber += buttonText;
            updateDisplay(secondNumber);
        }
    });
});


//opertaion button event listener

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;

        //below is the part for the operation and next operation
        if (buttonText == "=") {
            
            if (currentOperator) {
            let result = operate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperator);
                updateDisplay(result);
                firstNumber = result.toString();
                secondNumber = '';
                currentOperator = '';
                isFirstNumber = false;
            }

        //below is the clearing part
        } else if (buttonText == "c") {
            firstNumber = '';
            secondNumber = '';
            currentOperator = '';
            isFirstNumber = true;
            updateDisplay('');

            //below is the part lets the user do two numbers
        } else {
            if (firstNumber) {
                currentOperator = buttonText;
                isFirstNumber = false;
                updateDisplay(buttonText);
            }
        }

        
    });
});





