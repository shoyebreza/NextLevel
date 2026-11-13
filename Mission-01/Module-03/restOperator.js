// rest operator

// function with rest parameters

function addNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(addNumbers(1, 2, 3, 4, 5)); // 15

// object destructuring with rest operator

const person = {
  name: 'Charlie',
  age: 28,
  city: 'Chicago',
  email: 'charlie@example.com',
  phone: '123-456-7890'
};

const { name, age, ...contactInfo } = person;

console.log(name); // 'Charlie'
console.log(age); // 28
console.log(contactInfo); // { city: 'Chicago', email: 'charlie@example.com', phone: '123-456-7890' }


// array destructuring with rest operator

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]