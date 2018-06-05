/* 
Work that still needs to be done:
	- 	Negate sign needs to work
	-	Keyboard support needs to be implemented
*/

// Variables for DOM.
const displayText = document.getElementById('display-text');

const allClearButton = document.getElementById('all-clear'); 
const deleteButton = document.getElementById('delete'); 

const leftParenthesesButton = document.getElementById('left-parentheses');
const rightParenthesesButton = document.getElementById('right-parentheses');
const exponentButton = document.getElementById('exponent');
const plusMinusButton = document.getElementById('plus-minus'); 
const moduloButton = document.getElementById('modulo');   

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

// This array will be refered to to check if the current expression ends in any of these operators.
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

}

function pushModulo() {
	expression.push('%');
}

// Clear memory.
function allClear() {
	expression.splice(0);
	displayText.textContent = '0';
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

// Display result.
function displayResult() {
	var result = Math.floor(eval(expression.join('')) * 100) / 100;
	displayText.textContent = String(result);
}

// Button event handlers.
allClearButton.addEventListener('click', allClear); 
deleteButton.addEventListener('click', deleteData); 

leftParenthesesButton.addEventListener('click', pushLeftParentheses);
rightParenthesesButton.addEventListener('click', pushRightParentheses);
exponentButton.addEventListener('click', pushExponent); 
plusMinusButton.addEventListener('click', pushPlusMinus); 
moduloButton.addEventListener('click', pushModulo);  

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