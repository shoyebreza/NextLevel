// function are reusable blocks of code that perform a specific task. They can take inputs, called parameters, and return an output. Functions help in organizing code, making it more readable and maintainable.


/* function total(a, b) {
    return a + b;
}
 */

function total(price=10, quantity=5) {
    return price * quantity;
}
/* function total(price, quantity) {
    return price * quantity;
}
 */

/* const spend = total(10, 5); */

const spend = total();


console.log("Total spend:", spend);

// void function
function greet(name) {
    console.log("Hello, " + name + "!");
}

// calling the function
greet("Shoyeb");

// arrow function
const greetArrow = (name) => {
    console.log("Hello, " + name + "!");
}

greetArrow("Alice");

// function expression
const greetExpression = function(name) {
    console.log("Hello, " + name + "!");
}

greetExpression("Bob");

// single line arrow function
const greetSingleLine = name => console.log("Hello, " + name + "!");

greetSingleLine("Charlie"); 