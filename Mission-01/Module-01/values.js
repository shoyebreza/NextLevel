const name = "Shoyeb";
const age = 25;
const isLearningJavaScript = true;
const favoriteColor = "blue";
const firstNumber = 10;
const secondNumber = 5;
const skills = ["HTML", "CSS", "JavaScript"];
const student = {
  name: name,
  age: age,
  course: "Web Development",
};

console.log("Name:", name);
console.log("Age:", age);
console.log("Learning JavaScript:", isLearningJavaScript);
console.log("Next year age:", age + 1);
console.log("Favorite color:", favoriteColor);
console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("First skill:", skills[0]);
console.log("Student information:", student);


let ages = 25;

if (ages >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}

// truth and falsy values
const isLoggedIn = true;
const hasAccess = false;

if (isLoggedIn && hasAccess) {
  console.log("You have access to the system.");
} else {
  console.log("You do not have access to the system.");
}

console.log( typeof NaN);
console.log( typeof null);