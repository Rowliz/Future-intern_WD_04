// script.js
let currentInput = ""; // Stores the current input from the user
let operator = ""; // Stores the current operator (+, -, *, /)
let previousInput = ""; // Stores the previous input (before the operator)

const display = document.getElementById("display");
const result = document.getElementById("result");

// Event listeners for buttons
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let value = button.innerText;

        if (value === "C") {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.value = "";
            result.value = "";
        } else if (value === "=") {
            // Calculate the result when equals button is clicked
            if (previousInput !== "" && operator !== "" && currentInput !== "") {
                currentInput = operate(previousInput, currentInput, operator);
                result.value = currentInput; // Display the result at the bottom
                operator = "";
                previousInput = "";
                display.value = ""; // Clear the top display after calculation
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            // When an operator is clicked, store previous value and operator
            if (previousInput !== "") {
                currentInput = "";
            }
            operator = value;
            previousInput = display.value;
            display.value += ` ${value} `; // Show the operator in the display
        } else {
            // Append the number or decimal to the current input
            currentInput += value;
            display.value += value; // Show the number in the display
        }
    });
});

// Function to perform arithmetic operations
function operate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (op) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Error";
            }
            return num1 / num2;
        default:
            return num2;
    }
}