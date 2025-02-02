let storedVal = '';
let firstVal = '';
let operation = '';
let secondVal = '';
let split = '';
let answer = '';

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
    return add(+num1, +num2);
  }
  if (op == '-') {
    return subtract(+num1, +num2);
  }
  if (op == '*') {
    return multiply(+num1, +num2);
  }
  if (op == '/') {
    return divide(+num1, +num2);
  }
}

//store screen values into three variables
//upon click run operate function(w/storedvalues) thats firstVal, secondVal, and operation.

function splitSort(str) {
  split = str.split('');
  return split;
}

function opFunc(split) {
  if (
    split.includes('+') ||
    split.includes('-') ||
    split.includes('/') ||
    split.includes('*')
  ) {
    for (let i = 0; i < split.length; i++) {
      console.log(split[i]);

      if (
        split[i] === '+' ||
        split[i] === '-' ||
        split[i] === '*' ||
        split[i] === '/'
      ) {
        let index = split.indexOf(split[i]);
        console.log(split.indexOf(split[i]));

        return index;
      }
    }
  }
}

let values = splitSort(storedVal);
console.log(values);

let screen = document.getElementById('top-div');

let one = document.getElementById('1');
one.addEventListener('click', () => {
  screen.textContent += one.textContent;
  storedVal += one.textContent;
  console.log(storedVal);
});
let two = document.getElementById('2');
two.addEventListener('click', () => {
  screen.textContent += two.textContent;
  storedVal += two.textContent;
  console.log(storedVal);
});
let three = document.getElementById('3');
three.addEventListener('click', () => {
  screen.textContent += three.textContent;
  storedVal += three.textContent;
  console.log(storedVal);
});
let four = document.getElementById('4');
four.addEventListener('click', () => {
  screen.textContent += four.textContent;
  storedVal += four.textContent;
  console.log(storedVal);
});
let five = document.getElementById('5');
five.addEventListener('click', () => {
  screen.textContent += five.textContent;
  storedVal += five.textContent;
  console.log(storedVal);
});
let six = document.getElementById('6');
six.addEventListener('click', () => {
  screen.textContent += six.textContent;
  storedVal += six.textContent;
  console.log(storedVal);
});
let seven = document.getElementById('7');
seven.addEventListener('click', () => {
  screen.textContent += seven.textContent;
  storedVal += seven.textContent;
  console.log(storedVal);
});
let eight = document.getElementById('8');
eight.addEventListener('click', () => {
  screen.textContent += eight.textContent;
  storedVal += eight.textContent;
  console.log(storedVal);
});
let nine = document.getElementById('9');
nine.addEventListener('click', () => {
  screen.textContent += nine.textContent;
  storedVal += nine.textContent;
  console.log(storedVal);
});

let zero = document.getElementById('10');
zero.addEventListener('click', () => {
  screen.textContent += zero.textContent;
  storedVal += zero.textContent;
  console.log(storedVal);
});

let eleven = document.getElementById('11');
eleven.addEventListener('click', () => {
  screen.textContent += eleven.textContent;
  storedVal += eleven.textContent;
  console.log(storedVal);
});

let twelve = document.getElementById('12');
twelve.addEventListener('click', () => {
  screen.textContent += twelve.textContent;
  storedVal += twelve.textContent;
  console.log(storedVal);
});

let thirteen = document.getElementById('13');
thirteen.addEventListener('click', () => {
  screen.textContent += thirteen.textContent;
  storedVal += thirteen.textContent;
  console.log(storedVal);
});

let fourteen = document.getElementById('14');
fourteen.addEventListener('click', () => {
  screen.textContent += fourteen.textContent;
  storedVal += fourteen.textContent;
  console.log(storedVal);
});

let fifteen = document.getElementById('15');
fifteen.addEventListener('click', () => {
  screen.textContent += fifteen.textContent;
  console.log(storedVal);

  if (screen.textContent.length > 3) {
    console.log(splitSort(storedVal));
    let index = opFunc(split);
    firstVal = split.slice(0, index).join('');
    operation = split[index];
    secondVal = split.slice(index + 1, split.length).join('');
  }
  answer = operate(firstVal, operation, secondVal);
  if (isNaN(answer)) {
    screen.textContent = 'One operand Only, Try Again!';
    storedVal = '';
    firstVal = '';
    operation = '';
    secondVal = '';
    split = '';
    answer = '';
  } else {
    screen.textContent = answer;
  }
  return answer;
});

let sixteen = document.getElementById('16');
sixteen.addEventListener('click', () => {
  screen.textContent = screen.textContent.slice(0, -1);
  storedVal = storedVal.slice(0, -1);

  console.log(storedVal);
});

let seventeen = document.getElementById('17');
seventeen.addEventListener('click', () => {
  console.log(storedVal);
  screen.textContent = answer;
  storedVal = '';
  firstVal = '';
  operation = '';
  secondVal = '';
  split = '';
  answer = '';
});

console.log(firstVal);
console.log(operation);
console.log(secondVal);
console.log(answer);
