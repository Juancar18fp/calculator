let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let borrar = false;

const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const equalsButton = document.querySelector(".equal-button");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const pointButton = document.querySelector(".point-button");
const currentOperationScreen = document.querySelector(".display");

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
pointButton.addEventListener("click", appendPoint);

for (const button of numberButtons) {
	button.addEventListener("click", () => appendNumber(button.textContent));
}

for (const button of operatorButtons) {
	button.addEventListener("click", () => setOperation(button.textContent));
}

function appendNumber(number) {
	if (currentOperationScreen.textContent === "0" || borrar) resetScreen();
	currentOperationScreen.textContent += number;
}

function resetScreen() {
	currentOperationScreen.textContent = "";
	borrar = false;
}

function clear() {
	currentOperationScreen.textContent = "0";
	firstOperand = "";
	secondOperand = "";
	currentOperation = null;
}

function appendPoint() {
	if (borrar) resetScreen();
	if (currentOperationScreen.textContent === "")
		currentOperationScreen.textContent = "0";
	if (currentOperationScreen.textContent.includes(".")) return;
	currentOperationScreen.textContent += ".";
}

function deleteNumber() {
	currentOperationScreen.textContent = currentOperationScreen.textContent
		.toString()
		.slice(0, -1);
}

function setOperation(operator) {
	if (currentOperation !== null) evaluate();
	firstOperand = currentOperationScreen.textContent;
	currentOperation = operator;
	borrar = true;
}

function evaluate() {
	if (currentOperation === null || borrar) return;
	if (currentOperation === "÷" && currentOperationScreen.textContent === "0") {
		alert("You can't divide by 0!");
		return;
	}
	secondOperand = currentOperationScreen.textContent;
	currentOperationScreen.textContent = roundResult(
		operate(currentOperation, firstOperand, secondOperand),
	);
	currentOperation = null;
}

function roundResult(number) {
	return Math.round(number * 1000) / 1000;
}

function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	const numA = Number(a);
	const numB = Number(b);
	switch (operator) {
		case "+":
			return add(numA, numB);
		case "−":
			return substract(numA, numB);
		case "×":
			return multiply(numA, numB);
		case "÷":
			if (numB === 0) return null;
			return divide(numA, numB);
		default:
			return null;
	}
}

/*let displayValue = "0"; // Initialize displayValue to "0"
let operator = null;
let total = 0;
let borrar = false;
let ans = 0; 

const calcButtons = document.querySelector(".buttons");
const display = document.querySelector(".display");

calcButtons.addEventListener("click", (e) => {
	if (e.target.matches("button.calc-button")) {
		handleButtonClick(e.target.innerHTML);
	}
});

function handleButtonClick(value) {
	if (Number.isNaN(Number(value))) {
		handleSymbol(value);
	} else {
		handleNumber(value);
	}
	if (total > 999999) {
		display.textContent = "TO LONG!";
	} else {
		display.textContent = displayValue;
	}
}

function handleSymbol(symbol) {
	switch (symbol) {
		case "ANS":
			displayValue = ans.toString();
			borrar = false;
			break;
		case ".":
			if (!displayValue.includes(".")) {
				displayValue += ".";
			}
			break;
		case "=":
			if (operator !== null) {
				handleOperation(Number(displayValue));
				displayValue = total.toString();
				ans = total;
				total = 0;
				operator = null;
				borrar = true;
			}
			break;
		case "C":
			if (displayValue.length === 1 || displayValue === "0") {
				displayValue = "0";
			} else {
				displayValue = displayValue.substring(0, displayValue.length - 1);
			}
			break;
		case "AC":
			displayValue = "0";
			total = 0;
			operator = null;
			ans = 0; // Reset ans
			break;
		case "+":
		case "−":
		case "×":
		case "÷":
			handleOperation(symbol);
			break;
	}
}

function handleNumber(number) {
	if (displayValue.length < 7) {
		if (borrar) {
			displayValue = "";
			borrar = false;
		}
		displayValue = displayValue === "0" ? number : `${displayValue}${number}`;
	}
}

function handleOperation(symbol) {
	if (displayValue === "0") return;

	const numberDisplayValue = Number(displayValue);

	if (operator === null) {
		total = numberDisplayValue;
	} else {
		operate(numberDisplayValue);
	}
	operator = symbol;
	borrar = true;
}

function operate(number) {
	if (operator === "+") {
		total += number;
	} else if (operator === "−") {
		total -= number;
	} else if (operator === "×") {
		total *= number;
	} else if (operator === "÷") {
		if (number === 0) {
			alert("Error: Division by zero!");
			return;
		}
		total /= number;
	}
}*/
