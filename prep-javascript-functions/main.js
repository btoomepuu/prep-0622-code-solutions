function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertsHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertsHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return `Hello ${name}!`;
}

const greeting = getGreeting('Jake');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const multBy5Result = addAndMultiplyBy5(1, 2);
console.log(multBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multAndDivBy5 = multiplyAndDivideBy5(10, 35);
console.log(multAndDivBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractionResult = subtractTwoNumbers(22, 17);
console.log(subtractionResult);

function getCircumfrence(radius) {
  return 2 * radius * Math.PI;
}

const circumfrence = getCircumfrence(5);
console.log(circumfrence);

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const fullName = getFullName('brennon', 'toomepuu');
console.log(fullName);

function cube(number) {
  return Math.pow(number, 3);
}
const cubed = cube(5);
console.log(cubed);
