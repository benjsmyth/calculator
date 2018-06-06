// Variables for DOM.
const displayText = document.getElementById('display-text');

const allClearButton = document.getElementById('all-clear'); 
const deleteButton = document.getElementById('delete'); 

const leftParenthesesButton = document.getElementById('left-parentheses');
const rightParenthesesButton = document.getElementById('right-parentheses');
const exponentButton = document.getElementById('exponent');
const negateButton = document.getElementById('negate');  

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

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushEight() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '8';
	expression.push('8');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushSeven() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '7';
	expression.push('7');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushSix() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '6';
	expression.push('6');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushFive() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '5';
	expression.push('5');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushFour() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '4';
	expression.push('4');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushThree() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '3';
	expression.push('3');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushTwo() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '2';
	expression.push('2');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushOne() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '1';
	expression.push('1');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushZero() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '0';
	expression.push('0');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
}

function pushDecimal() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '.';
	expression.push('.');

	if (displayText.textContent.length > 10) {
		displayText.textContent = '';
		displayText.textContent = '...';
	}
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

function pushNegate() {
	if (displayText.textContent === '0' || operators.includes(expression[expression.length - 1])) {
		displayText.textContent = '';
	}

	else if (expression[expression.length - 1] === ' -') {
		displayText.textContent = '';
	}

	displayText.textContent = displayText.textContent + '-';
	expression.push(' -');
}

// Display result.
function displayResult() {
	var result = eval(expression.join(''));
	var roundedResult = Math.floor(result * 100) / 100;

	if (result > 0 && result < 2 ** 53 || result < 0 && result > (-2) ** 53) {
		displayText.textContent = String(roundedResult);
	}

	else if (result === 0) {
		displayText.textContent = '0';
	}

	else {
		displayText.textContent = 'Error';
	}

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

// Functions for changing button styles.
function allClearButtonClick() {
	allClearButton.classList.add('top-buttons-clicked');
	setTimeout(() => {allClearButton.classList.remove('top-buttons-clicked')}, 250);
}

function deleteButtonClick() {
	deleteButton.classList.add('top-buttons-clicked');
	setTimeout(() => {deleteButton.classList.remove('top-buttons-clicked')}, 250);
}

function nineButtonClick() {
	nineButton.classList.add('left-buttons-clicked');
	setTimeout(() => {nineButton.classList.remove('left-buttons-clicked')}, 250);
}

function eightButtonClick() {
	eightButton.classList.add('left-buttons-clicked');
	setTimeout(() => {eightButton.classList.remove('left-buttons-clicked')}, 250);
}

function sevenButtonClick() {
	sevenButton.classList.add('left-buttons-clicked');
	setTimeout(() => {sevenButton.classList.remove('left-buttons-clicked')}, 250);
}

function sixButtonClick() {
	sixButton.classList.add('left-buttons-clicked');
	setTimeout(() => {sixButton.classList.remove('left-buttons-clicked')}, 250);
}

function fiveButtonClick() {
	fiveButton.classList.add('left-buttons-clicked');
	setTimeout(() => {fiveButton.classList.remove('left-buttons-clicked')}, 250);
}

function fourButtonClick() {
	fourButton.classList.add('left-buttons-clicked');
	setTimeout(() => {fourButton.classList.remove('left-buttons-clicked')}, 250);
}

function threeButtonClick() {
	threeButton.classList.add('left-buttons-clicked');
	setTimeout(() => {threeButton.classList.remove('left-buttons-clicked')}, 250);
}

function twoButtonClick() {
	twoButton.classList.add('left-buttons-clicked');
	setTimeout(() => {twoButton.classList.remove('left-buttons-clicked')}, 250);
}

function oneButtonClick() {
	oneButton.classList.add('left-buttons-clicked');
	setTimeout(() => {oneButton.classList.remove('left-buttons-clicked')}, 250);
}

function zeroButtonClick() {
	zeroButton.classList.add('left-buttons-clicked');
	setTimeout(() => {zeroButton.classList.remove('left-buttons-clicked')}, 250);
}

function decimalButtonClick() {
	decimalButton.classList.add('left-buttons-clicked');
	setTimeout(() => {decimalButton.classList.remove('left-buttons-clicked')}, 250);
}

function leftParenthesesButtonClick() {
	leftParenthesesButton.classList.add('right-buttons-clicked');
	setTimeout(() => {leftParenthesesButton.classList.remove('right-buttons-clicked')}, 250);
}

function rightParenthesesButtonClick() {
	rightParenthesesButton.classList.add('right-buttons-clicked');
	setTimeout(() => {rightParenthesesButton.classList.remove('right-buttons-clicked')}, 250);
}

function exponentButtonClick() {
	exponentButton.classList.add('right-buttons-clicked');
	setTimeout(() => {exponentButton.classList.remove('right-buttons-clicked')}, 250);
}

function negateButtonClick() {
	negateButton.classList.add('right-buttons-clicked');
	setTimeout(() => {negateButton.classList.remove('right-buttons-clicked')}, 250);
}

function divideButtonClick() {
	divideButton.classList.add('right-buttons-clicked');
	setTimeout(() => {divideButton.classList.remove('right-buttons-clicked')}, 250);
}

function multiplyButtonClick() {
	multiplyButton.classList.add('right-buttons-clicked');
	setTimeout(() => {multiplyButton.classList.remove('right-buttons-clicked')}, 250);
}

function subtractButtonClick() {
	subtractButton.classList.add('right-buttons-clicked');
	setTimeout(() => {subtractButton.classList.remove('right-buttons-clicked')}, 250);
}

function addButtonClick() {
	addButton.classList.add('right-buttons-clicked');
	setTimeout(() => {addButton.classList.remove('right-buttons-clicked')}, 250);
}

function equalsButtonClick() {
	equalsButton.classList.add('right-buttons-clicked');
	setTimeout(() => {equalsButton.classList.remove('right-buttons-clicked')}, 250);
}

// Check which key has been pressed.
function checkKeyCode(e) {
	var key = e.which;

	if (e.shiftKey && key === 65) {
		allClear();
		allClearButtonClick();
	}

	else if (key === 8) {
		deleteData();
		deleteButtonClick();
	}

	else if (!e.shiftKey && key === 57) {
		pushNine();
		nineButtonClick();
	}

	else if (!e.shiftKey && key === 56) {
		pushEight();
		eightButtonClick();
	}

	else if (key === 55) {
		pushSeven();
		sevenButtonClick();
	}

	else if (!e.shiftKey && key === 54) {
		pushSix();
		sixButtonClick();
	}

	else if (!e.shiftKey && key === 53) {
		pushFive();
		fiveButtonClick();
	}

	else if (key === 52) {
		pushFour();
		fourButtonClick();
	}

	else if (key === 51) {
		pushThree();
		threeButtonClick();
	}

	else if (key === 50) {
		pushTwo();
		twoButtonClick();
	}

	else if (key === 49) {
		pushOne();
		oneButtonClick();
	}

	else if (!e.shiftKey && key === 48) {
		pushZero();
		zeroButtonClick();
	}

	else if (key === 190) {
		pushDecimal();
		decimalButtonClick();
	}

	else if (e.shiftKey && key === 57) {
		pushLeftParentheses();
		leftParenthesesButtonClick();
	}

	else if (e.shiftKey && key === 48) {
		pushRightParentheses();
		rightParenthesesButtonClick();
	}

	else if (e.shiftKey && key === 54) {
		pushExponent();
		exponentButtonClick();
	}

	else if (e.shiftKey && key === 189) {
		pushNegate();
		negateButtonClick();
	}

	else if (key === 191) {
		pushDivide();
		divideButtonClick();
	}

	else if (e.shiftKey && key === 56) {
		pushMultiply();
		multiplyButtonClick();
	}

	else if (!e.shiftKey && key === 189) {
		pushSubtract();
		subtractButtonClick();
	}

	else if (e.shiftKey && key === 187) {
		pushAdd();
		addButtonClick();
	}

	else if (key === 13) {
		displayResult();
		equalsButtonClick();
	}
}

// Button event handlers.
allClearButton.addEventListener('click', () => {allClear(); allClearButtonClick();}); 
deleteButton.addEventListener('click', () => {deleteData(); deleteButtonClick();}); 

nineButton.addEventListener('click', () => {pushNine(); nineButtonClick();}); 
eightButton.addEventListener('click', () => {pushEight(); eightButtonClick();});
sevenButton.addEventListener('click', () => {pushSeven(); sevenButtonClick();}); 
sixButton.addEventListener('click', () => {pushSix(); sixButtonClick();}); 
fiveButton.addEventListener('click', () => {pushFive(); fiveButtonClick();}); 
fourButton.addEventListener('click', () => {pushFour(); fourButtonClick();}); 
threeButton.addEventListener('click', () => {pushThree(); threeButtonClick();}); 
twoButton.addEventListener('click', () => {pushTwo(); twoButtonClick();}); 
oneButton.addEventListener('click', () => {pushOne(); oneButtonClick();}); 
zeroButton.addEventListener('click', () => {pushZero(); zeroButtonClick();}); 
decimalButton.addEventListener('click', () => {pushDecimal(); decimalButtonClick();}); 

leftParenthesesButton.addEventListener('click', () => {pushLeftParentheses(); leftParenthesesButtonClick();});
rightParenthesesButton.addEventListener('click', () => {pushRightParentheses(); rightParenthesesButtonClick();});
exponentButton.addEventListener('click', () => {pushExponent(); exponentButtonClick();}); 
negateButton.addEventListener('click', () => {pushNegate(); negateButtonClick();}); 

divideButton.addEventListener('click', () => {pushDivide(); divideButtonClick();});
multiplyButton.addEventListener('click', () => {pushMultiply(); multiplyButtonClick();}); 
subtractButton.addEventListener('click', () => {pushSubtract(); subtractButtonClick();}); 
addButton.addEventListener('click', () => {pushAdd(); addButtonClick();}); 
equalsButton.addEventListener('click', () => {displayResult(); equalsButtonClick();});

// Event handler for checking what keys have been pressed.
window.addEventListener('keydown', checkKeyCode);