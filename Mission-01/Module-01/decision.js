/* const age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} */


/* const age = 16;

if (age >= 18) {
  console.log("You can vote.");
} else {
  console.log("You cannot vote yet.");
}
 */


const marks = 85;

if (marks >= 80) {
  console.log("Grade: A+");
} else if (marks >= 70) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: A-");
} else if (marks >= 50) {
  console.log("Grade: B");
} else if (marks >= 40) {
  console.log("Grade: C");
} else if (marks >= 33) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}


const isLoggedIn = true;
const isAdmin = true;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("Welcome, Admin!");
  } else {
    console.log("Welcome, User!");
  }
} else {
  console.log("Please log in.");
}




const day = 3;

switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}