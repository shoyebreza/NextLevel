// nested data array
let user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA",
        zip: "12345"
    }
};

console.log(user.address.street); // 123 Main St
console.log(user.address.city); // Anytown
console.log(user.address.state); // CA
console.log(user.address.zip); // 12345 

// aray of arrays
let users = [
    {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        age: 25,
        email: "jane.smith@example.com"
    },
    {
        name: "Bob Johnson",
        age: 35,
        email: "bob.johnson@example.com"
    }
];

console.log(users[0].name); // John Doe
console.log(users[1].age); // 25
console.log(users[2].email); // bob.johnson@example.com


// array of objects with nested arrays
let usersWithHobbies = [
    {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        hobbies: ["reading", "swimming", "coding"]
    },
    {
        name: "Jane Smith",
        age: 25,
        email: "jane.smith@example.com",
        hobbies: ["painting", "dancing", "cooking"]
    },
    {
        name: "Bob Johnson",
        age: 35,
        email: "bob.johnson@example.com",
        hobbies: ["gaming", "hiking", "traveling"]
    }
];

console.log(usersWithHobbies[0].hobbies[0]); // reading
console.log(usersWithHobbies[1].hobbies[1]); // dancing
console.log(usersWithHobbies[2].hobbies[2]); // traveling   