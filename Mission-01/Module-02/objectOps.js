// objects 

let student = {
    name: "Alice",
    age: 20,
    major: "Computer Science",
    marks: { 
        math: 85, 
        science: 90, 
        english: 78 
    }
};

let totalMarks  =0;
let totalSubjects = 0;
for (let subject in student.marks) {
    totalMarks += student.marks[subject];
    totalSubjects++;
}

console.log("Total Marks: " + totalMarks); // Total Marks: 253
console.log("Total Subjects: " + totalSubjects); // Total Subjects: 3
console.log("Average Marks: " + (totalMarks / totalSubjects)); // Average Marks: 84.33333333333333

let averageMarks = totalMarks / totalSubjects;
console.log("Average Marks: " + (totalMarks / totalSubjects)); // Average Marks: 84.33333333333333

if (averageMarks >= 90) {
    console.log("Grade: A");
} else if (averageMarks >= 80) {
    console.log("Grade: B");
} else if (averageMarks >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

