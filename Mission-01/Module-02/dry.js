// we'll build a order prpsessing system that for the understanding to how dry and import work a function.

function isValidPrice(price) {
  if (typeof price !== 'number' || price < 0) {
    return false;
  }
  return true;
}

// checking valid email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// checking valid phone number
function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number format
  return phoneRegex.test(phoneNumber);
}

// calculate  discounted price
function calculateDiscountedPrice(price, discountPercentage) {
  if (!isValidPrice(price) || typeof discountPercentage !== 'number' || discountPercentage < 0 || discountPercentage > 100) {
    throw new Error('Invalid price or discount percentage');
  }
  return price - (price * discountPercentage / 100);
}

// format currency to BDT
function formatCurrency(amount) {
  if (!isValidPrice(amount)) {
    throw new Error('Invalid amount');
  }
  return new Intl.NumberFormat('en-BD', {
    style: 'currency',
    currency: 'BDT'
  }).format(amount);
}

// capitalize the first letter of a string
function capitalizeFirstLetter(string) {
  if (typeof string !== 'string' || string.length === 0) {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// process order function
function processOrder(order) {
  const { price, discountPercentage, email, phoneNumber } = order;

  if (!isValidPrice(price)) {
    throw new Error('Invalid price');
  }

  if (!isValidEmail(email)) {
    throw new Error('Invalid email');
  }

  if (!isValidPhoneNumber(phoneNumber)) {
    throw new Error('Invalid phone number');
  }

  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);
  const formattedPrice = formatCurrency(discountedPrice);

  return {
    price: formattedPrice,
    email,
    phoneNumber
  };
}


