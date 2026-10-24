const firstNumber = 10;
const secondNumber = 3;

// Arithmetic operators
console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Remainder:", firstNumber % secondNumber);

// Assignment operators
let score = 10;
score += 5;
console.log("Score after += 5:", score);

score *= 2;
console.log("Score after *= 2:", score);

// Comparison operators return true or false.
console.log("Are the numbers equal?", firstNumber === secondNumber);
console.log("Is the first number greater?", firstNumber > secondNumber);

// Logical operators combine conditions.
const hasTicket = true;
const isAdult = true;
console.log("Can enter?", hasTicket && isAdult);

// The ternary operator is a short if/else expression.
const result = firstNumber > secondNumber ? "First number wins" : "Second number wins";
console.log(result);