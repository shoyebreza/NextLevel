// export import { add, subtract, multiply, divide } from './math.js';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
    return a / b;
}

export const pi = 3.14159;

export default { add, subtract, multiply, divide };

