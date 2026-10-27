// array 

let names = ["John", "Jane", "Doe", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

console.log(names);

// Accessing elements in the array
console.log(names[0]); // John
console.log(names[3]); // Smith

// objects in array

let people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Doe", age: 35 }
];

console.log(people);

// Accessing elements in the array of objects
console.log(people[0]); // { name: "John", age: 30 }
console.log(people[1]); // { name: "Jane", age: 25 }
console.log(people[2]); // { name: "Doe", age: 35 }

// Accessing properties of objects in the array
console.log(people[0].name); // John
console.log(people[1].age); // 25
console.log(people[2].name); // Doe
console.log(people[2].age); // 35

// Array methods

// Adding elements to the array
names.push("Grace");
console.log(names); // ["John", "Jane", "Doe", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace"]    

// Removing elements from the array
names.pop();
console.log(names); // ["John", "Jane", "Doe", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

// Finding elements in the array
let index = names.indexOf("Alice");
console.log(index); // 4

// Checking if an element exists in the array
let exists = names.includes("Bob");
console.log(exists); // true

// Iterating over the array
names.forEach(function(name) {
    console.log(name);
});

// Mapping over the array
let upperCaseNames = names.map(function(name) {
    return name.toUpperCase();
});

// insert into first position
names.unshift("Zara");
console.log(names); // ["Zara", "John", "Jane", "Doe", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

// remove from first position
names.shift();
console.log(names); // ["John", "Jane", "Doe", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

// insert into specific position
names.splice(2, 0, "Mia");
console.log(names); // ["John", "Jane", "Mia", "Doe", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

// remove from specific position
names.splice(2, 1);
console.log(names); // ["John", "Jane", "Doe", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

// splice can also be used to replace elements in the array
names.splice(2, 1, "Liam");
console.log(names); // ["John", "Jane", "Liam", "Smith", "Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

