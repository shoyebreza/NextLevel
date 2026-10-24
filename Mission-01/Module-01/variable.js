// Use const when a value will not be reassigned.
const studentName = "Shoyeb";
const birthYear = 2001;

// Use let when a value needs to change.
let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Student:", studentName);
console.log("Age:", age);

currentYear += 1;
age = currentYear - birthYear;
console.log("Age next year:", age);

// Variables can store different data types.
const isLearning = true;
const favoriteLanguages = ["HTML", "CSS", "JavaScript"];
const student = {
  name: studentName,
  course: "Web Development",
};

console.log("Learning JavaScript:", isLearning);
console.log("Favorite language:", favoriteLanguages[2]);
console.log("Student details:", student);