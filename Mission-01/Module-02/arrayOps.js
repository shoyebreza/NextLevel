// array ops
let marks = [85, 90, 78, 92, 88];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
    if (marks[i] > max) {
        max = marks[i];
    }
}
console.log("The maximum mark is: " + max);

// array reverse
let reversedMarks = [];
for (let i = marks.length - 1; i >= 0; i--) {
    reversedMarks.push(marks[i]);
}
console.log("The reversed array is: " + reversedMarks);

// array sum
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
console.log("The sum of the marks is: " + sum);

// array average
let average = sum / marks.length;
console.log("The average mark is: " + average);

// array filter
let passingMarks = marks.filter(function(mark) {
    return mark >= 80;
});
console.log("The passing marks are: " + passingMarks);

// array map
let curvedMarks = marks.map(function(mark) {
    return mark + 5;
});
console.log("The curved marks are: " + curvedMarks);

// array reduce
let totalMarks = marks.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log("The total marks using reduce is: " + totalMarks);

// array find
let firstFailingMark = marks.find(function(mark) {
    return mark < 80;
});
console.log("The first failing mark is: " + firstFailingMark);

