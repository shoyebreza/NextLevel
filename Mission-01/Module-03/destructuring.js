// Destructuring
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

const { name, age, city } = person;
console.log(name, age, city);

const person1 = {
  name: 'Bob',
  age: 25,
  city: 'Los Angeles',
  address: {
    street: '123 Main St',
    zip: '90001'
  }
};

const { name: personName, age: personAge, city: personCity, address: { street, zip } } = person1;