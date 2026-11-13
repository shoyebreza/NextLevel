// array 

// foreach method
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});

// map method

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// filter method
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]


// reduce method
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 15


// find method
const foundNumber = numbers.find((num) => num > 3);
console.log(foundNumber); // 4

// find using include method
const fruitsList = ['apple', 'banana', 'cherry', 'date'];
const hasApple = fruitsList.includes('apple');
console.log(hasApple); // true

// find using indexOf method
const indexOfBanana = fruitsList.indexOf('banana');
console.log(indexOfBanana); // 1

// find using some method
const hasCherry = fruitsList.some((fruit) => fruit === 'cherry');
console.log(hasCherry); // true

// find using every method
const allFruitsHaveE = fruitsList.every((fruit) => fruit.includes('e'));
console.log(allFruitsHaveE); // false

// sorted method
const sortedFruits = fruitsList.sort();
console.log(sortedFruits); // ['apple', 'banana', 'cherry', 'date']

// in controlled number sort method 

const numbersToSort = [5, 2, 9, 1, 5, 6];
const sortedNumbers = numbersToSort.sort((a, b) => a - b);
console.log(sortedNumbers); // [1, 2, 5, 5, 6, 9]



// reducer with filter method

let allfruits = [
    { name: 'apple', quantity: 1, price: 0.5, inStock: true },
    { name: 'banana', quantity: 2, price: 0.25, inStock: true },
    { name: 'cherry', quantity: 3, price: 1.0, inStock: false }
];

const totalCost = allfruits
  .filter((fruit) => fruit.inStock)
  .reduce((total, fruit) => total + fruit.quantity * fruit.price, 0);
console.log(totalCost); // 1.0


