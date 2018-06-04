// Variables for DOM.
const displayText = document.getElementById('display-text');

const allClearButton = document.getElementById('all-clear'); 
const deleteButton = document.getElementById('delete'); 

const leftParenthesesButton = document.getElementById('left-parentheses'); 
const rightParenthesesButton = document.getElementById('right-parentheses'); 
const plusMinusButton = document.getElementById('plus-minus'); 
const exponentButton = document.getElementById('exponent'); 
const sqrtButton = document.getElementById('sqrt'); 

const nineButton = document.getElementById('nine'); 
const eightButton = document.getElementById('eight');
const sevenButton = document.getElementById('seven'); 
const sixButton = document.getElementById('six'); 
const fiveButton = document.getElementById('five'); 
const fourButton = document.getElementById('four'); 
const threeButton = document.getElementById('three'); 
const twoButton = document.getElementById('two'); 
const oneButton = document.getElementById('one'); 
const zeroButton = document.getElementById('zero'); 
const decimalButton = document.getElementById('decimal'); 

const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply'); 
const subtractButton = document.getElementById('subtract'); 
const addButton = document.getElementById('add'); 
const equalsButton = document.getElementById('equals'); 

// Empty object. This will be used to push data to so it can be held before it is operated on.
var operation = {};

// Empty arrays. These will be used to collect numbers together before and after an operation is selected.
var firstOperandArray = [];
var secondOperandArray = [];

// Math functions.
function add() {
	return this.firstOperand + this.secondOperand;
}

function subtract() {
	return this.firstOperand - this.secondOperand;
}

function multiply() {
	return this.firstOperand * this.secondOperand;
}

function divide() {
	return this.firstOperand / this.secondOperand;
}

function plusMinus() {
	return this.firstOperand * -1;
}

function exponent() {
	return Math.pow(this.firstOperand, this.secondOperand);
}

function sqrt() {
	return Math.sqrt(this.firstOperand);
}


function decimal() {

}

function leftParentheses() {

}

function rightParentheses() {

}

// Functions for pushing numbers to operator object.
function pushNine() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('9');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('9');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushEight() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('8');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('8');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushSeven() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('7');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('7');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushSix() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('6');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('6');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushFive() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('5');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('5');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushFour() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('4');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('4');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushThree() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('3');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('3');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushTwo() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('2');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('2');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushOne() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('1');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('1');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushZero() {
	if (operation.firstOperand === undefined) {
		firstOperandArray.push('0');
		displayText.textContent = firstOperandArray.join('');
	}
	else if (operation.firstOperand !== undefined) {
		secondOperandArray.push('0');
		displayText.textContent = secondOperandArray.join('');
	}
}

function pushDecimal() {
	///
}

// Functions for pushing operations to operator object.
function pushAdd() {
	operation.firstOperand = Number(firstOperandArray.join(''));
	operation.operator = add;
}

function pushSubtract() {
	operation.firstOperand = Number(firstOperandArray.join(''));
	operation.operator = subtract;
}

function pushMultiply() {
	operation.firstOperand = Number(firstOperandArray.join(''));
	operation.operator = multiply;
}

function pushDivide() {
	operation.firstOperand = Number(firstOperandArray.join(''));
	operation.operator = divide;
}

function pushPlusMinus() {
	operation.firstOperand = Number(firstOperandArray.join(''));
	operation.operator = plusMinus;
	operaton.result = operation.operator();
	displayText.textContent = operation.result;
	operation.firstOperand = operation.result;
}

function pushExponent() {
	operation.firstOperand = Number(firstOperandArray.join(''));
	operation.operator = exponent;
}

function pushSqrt() {
	operation.firstOperand = Number(firstOperandArray.join(''));
	operation.operator = sqrt;
}

// Display functions.
function allClear() {
	displayText.textContent = '0';

	var firstOperandArray = [];
	var secondOperandArray = [];

	var operation = {};
}

function deleteData() {

}

function displayResult() {
	operation.secondOperand = Number(secondOperandArray.join(''));
	operation.result = operation.operator();
	displayText.textContent = operation.result;
}

// Button event handlers.
allClearButton.addEventListener('click', allClear); 
deleteButton.addEventListener('click', () => {}); 

leftParenthesesButton.addEventListener('click', () => {}); 
rightParenthesesButton.addEventListener('click', () => {}); 
plusMinusButton.addEventListener('click', pushPlusMinus); 
exponentButton.addEventListener('click', pushExponent); 
sqrtButton.addEventListener('click', pushSqrt); 

nineButton.addEventListener('click', pushNine); 
eightButton.addEventListener('click', pushEight);
sevenButton.addEventListener('click', pushSeven); 
sixButton.addEventListener('click', pushSix); 
fiveButton.addEventListener('click', pushFive); 
fourButton.addEventListener('click', pushFour); 
threeButton.addEventListener('click', pushThree); 
twoButton.addEventListener('click', pushTwo); 
oneButton.addEventListener('click', pushOne); 
zeroButton.addEventListener('click', pushZero); 
decimalButton.addEventListener('click', pushDecimal); 

divideButton.addEventListener('click', pushDivide);
multiplyButton.addEventListener('click', pushMultiply); 
subtractButton.addEventListener('click', pushSubtract); 
addButton.addEventListener('click', pushAdd); 
equalsButton.addEventListener('click', displayResult); 