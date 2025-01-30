let firstVal;
let operation;
let secondVal;

function add(firstVal, secondVal) {
  return firstVal + secondVal;
}
function subtract(firstVal, secondVal) {
  return firstVal - secondVal;
}
function multiply(firstVal, secondVal) {
  return firstVal * secondVal;
}
function divide(firstVal, secondVal) {
  return firstVal / secondVal;
}

function operate(num1, op, num2) {
  if (op == '+') {
    return add(num1, num2);
  }
  if (op == '-') {
    return subtract(num1, num2);
  }
  if (op == '*') {
    return multiply(num1, num2);
  }
  if (op == '/') {
    return divide(num1, num2);
  }
}

console.log(operate(8, '/', 2));

let screen = document.getElementById('top-div');

let one = document.getElementById('1');
one.addEventListener('click', () => (screen.textContent += one.textContent));
