// object 

let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

console.log(user.name); // John Doe
console.log(user.age); // 30
console.log(user.email); // john.doe@example.com

// Accessing properties using bracket notation
console.log(user["name"]); // John Doe
console.log(user["age"]); // 30
console.log(user["email"]); //  john.doe@example.com

// update object properties
user.age = 31;
console.log(user.age); // 31

// Adding new properties to the object
user.address = "123 Main St";
console.log(user.address); // 123 Main St

// Deleting properties from the object
delete user.age;
console.log(user.age); // undefined

// Deleting the address property
delete user.address;
console.log(user.address); // undefined

// object entrys
console.log(Object.entries(user)); // [ ['name', 'John Doe'], ['age', 31], ['email', 'john.doe@example.com'] ]

// object keys
console.log(Object.keys(user)); // [ 'name', 'email' ]

// object values
console.log(Object.values(user)); // [ 'John Doe', 'john.doe@example.com' ]

