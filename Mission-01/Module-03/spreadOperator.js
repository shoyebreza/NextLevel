// spread operator ... three dot
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

arr3.push(7);
console.log(arr3); // [1, 2, 3, 4, 5, 6, 7]

// object spread operator

const personalInfo = {
  name: 'Charlie',
  age: 28,
  city: 'Chicago'
};

const contactInfo = {
  email: 'charlie@example.com',
  phone: '123-456-7890'
};

const fullInfo = { ...personalInfo, ...contactInfo };

console.log(fullInfo); // { name: 'Charlie', age: 28, city: 'Chicago', email: 'charlie@example.com', phone: '123-456-7890' }

