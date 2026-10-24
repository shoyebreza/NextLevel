const firstName = "Shoyeb";
const course = "JavaScript";

// Strings can use single quotes, double quotes, or backticks.
const greeting = `Hello, ${firstName}!`;
console.log(greeting);
console.log("Course:", course);

// String properties and methods
console.log("Number of characters:", course.length);
console.log("Uppercase:", course.toUpperCase());
console.log("Lowercase:", course.toLowerCase());
console.log("First character:", course[0]);
console.log("Contains 'Script'?", course.includes("Script"));

// Joining strings with the + operator
const message = "I am learning " + course + ".";
console.log(message);

// Removing extra spaces and replacing text
const rawText = "  Learn JavaScript  ";
console.log("Trimmed text:", rawText.trim());
console.log("Updated text:", rawText.trim().replace("JavaScript", "web development"));