// optional chaining and nullish coalescing operator

const user = {
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'New York',
    zip: '10001'
  }
};

// Accessing nested properties using optional chaining
const street = user.address?.street;
console.log(street); // '123 Main St'

// Using nullish coalescing operator to provide a default value
const city = user.address?.city ?? 'Unknown';
console.log(city); // 'New York'

// Using nullish coalescing operator to provide a default value for a non-existent property
const country = user.address?.country ?? 'Unknown';
console.log(country); // 'Unknown'


