// for loop
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
}

// for...of loop
for (let user of users) {
    console.log(user.email);
}

// for...in loop
for (let index in users) {
    console.log(users[index].age);
}

// forEach loop
users.forEach(function(user) {
    console.log(user.name);
});

// map loop
let userNames = users.map(function(user) {
    return user.name;
});

// filter loop
let usersAbove30 = users.filter(function(user) {
    return user.age > 30;
});

// reduce loop
let totalAge = users.reduce(function(accumulator, user) {
    return accumulator + user.age;
}, 0);

// while loop
let i = 0;
while (i < users.length) {
    console.log(users[i].name);
    i++;
}

// do...while loop
let j = 0;
do {
    console.log(users[j].name);
    j++;
} while (j < users.length);

// break statement
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 30) {
        break;
    }
    console.log(users[i].name);
}

// continue statement
for (let i = 0; i < users.length; i++) {
    if (users[i].age < 30) {
        continue;
    }
    console.log(users[i].name);
}

// nested loops
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name);
    for (let j = 0; j < users[i].posts.length; j++) {
        console.log(users[i].posts[j].title);
    }
}

// loop through object properties
for (let key in user) {
    console.log(key + ": " + user[key]);
}

// loop through object entries
for (let [key, value] of Object.entries(user)) {
    console.log(key + ": " + value);
}

// loop through object keys
for (let key of Object.keys(user)) {
    console.log(key + ": " + user[key]);
}

// loop through object values
for (let value of Object.values(user)) {
    console.log(value);
}

// loop through array of objects
for (let user of users) {
    console.log(user.name + " is " + user.age + " years old.");
}

// loop through array of objects with nested arrays
for (let user of usersWithHobbies) {
    console.log(user.name + " has the following hobbies: ");
    for (let hobby of user.hobbies) {
        console.log("- " + hobby);
    }
}

// infinite loop
// while (true) {
//     console.log("This is an infinite loop.");
// }