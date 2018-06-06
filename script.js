// Variables for DOM.
const displayText = document.getElementById('display-text');

const allClearButton = document.getElementById('all-clear'); 
const deleteButton = document.getElementById('delete'); 

const leftParenthesesButton = document.getElementById('left-parentheses');
const rightParenthesesButton = document.getElementById('right-parentheses');
const exponentButton = document.getElementById('exponent');
const plusMinusButton = document.getElementById('plus-minus');  

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

window.onload = () => {displayText.textContent = '0'};

// Expression array. This will be used to push data to so it can be held before it is operated on.
var expression = [];

// This array will be referred to to check if the current expression ends in any of these operators.
var operators = ['+', '-', '*', '/', '**', '%'];

// Functions for pushing numbers to expression array.
function pushNine() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '9';
	expression.push('9');
}

function pushEight() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '8';
	expression.push('8');
}

function pushSeven() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '7';
	expression.push('7');
}

function pushSix() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '6';
	expression.push('6');
}

function pushFive() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '5';
	expression.push('5');
}

function pushFour() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '4';
	expression.push('4');
}

function pushThree() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '3';
	expression.push('3');
}

function pushTwo() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '2';
	expression.push('2');
}

function pushOne() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '1';
	expression.push('1');
}

function pushZero() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '0';
	expression.push('0');
}

function pushDecimal() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '.';
	expression.push('.');
}

// Functions for pushing operations to expression array.
function pushAdd() {
	expression.push('+');
}

function pushSubtract() {
	expression.push('-');
}

function pushMultiply() {
	expression.push('*');
}

function pushDivide() {
	expression.push('/');
}

function pushLeftParentheses() {
	expression.push('(');
}

function pushRightParentheses() {
	expression.push(')');
}

function pushExponent() {
	expression.push('**');
}

function pushPlusMinus() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}
	else if (expression[expression.length - 1] === ' -') {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '-';
	expression.push(' -');
}

// Check which key has been pressed.
function checkKeyCode(e) {
	var key = e.which;

	if (e.shiftKey && key === 65) {
		allClear();
	}
	else if (key === 8) {
		deleteData();
	}
	else if (e.shiftKey && key === 57) {
		pushLeftParentheses();
	}
	else if (e.shiftKey && key === 48) {
		pushRightParentheses();
	}
	else if (e.shiftKey && key === 54) {
		pushExponent();
	}
	else if (e.shiftKey && key === 189) {
		pushPlusMinus();
	}
	else if (e.shiftKey && key === 53) {
		pushModulo();
	}
	else if (!e.shiftKey && key === 57) {
		pushNine();
	}
	else if (!e.shiftKey && key === 56) {
		pushEight();
	}
	else if (key === 55) {
		pushSeven();
	}
	else if (!e.shiftKey && key === 54) {
		pushSix();
	}
	else if (!e.shiftKey && key === 53) {
		pushFive();
	}
	else if (key === 52) {
		pushFour();
	}
	else if (key === 51) {
		pushThree();
	}
	else if (key === 50) {
		pushTwo();
	}
	else if (key === 49) {
		pushOne();
	}
	else if (!e.shiftKey && key === 48) {
		pushZero();
	}
	else if (key === 190) {
		pushDecimal();
	}
	else if (key === 191) {
		pushDivide();
	}
	else if (e.shiftKey && key === 56) {
		pushMultiply();
	}
	else if (!e.shiftKey && key === 189) {
		pushSubtract();
	}
	else if (e.shiftKey && key === 187) {
		pushAdd();
	}
	else if (key === 13) {
		displayResult();
	}
}

// Display result.
function displayResult() {
	var result = Math.floor(eval(expression.join('')) * 100) / 100;
	displayText.textContent = result;

	expression.splice(0);
}

// Backspace.
function deleteData() {
	if (displayText.textContent === '0' && expression.join('') === '') {
		return;
	}
	else if (displayText.textContent === '0' && expression.join('') === '0') {
		expression.pop();
		displayText.textContent === '0';
	}
	else if (displayText.textContent !== '0') {
		expression.pop();

		if (expression.join('') === '') {
			displayText.textContent = '0';
		}
		else if (expression.join('') !== '') {
			displayText.textContent = expression.join('');
		}
	}
}

// Clear memory.
function allClear() {
	expression.splice(0);
	displayText.textContent = '0';
}

// Button event handlers.
allClearButton.addEventListener('click', allClear); 
deleteButton.addEventListener('click', deleteData); 

leftParenthesesButton.addEventListener('click', pushLeftParentheses);
rightParenthesesButton.addEventListener('click', pushRightParentheses);
exponentButton.addEventListener('click', pushExponent); 
plusMinusButton.addEventListener('click', pushPlusMinus); 

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

// Event handler for checking what keys have been pressed.
window.addEventListener('keydown', checkKeyCode);