// a simple BMI calculator

const weight = process.argv[2]; // in kilograms
const height = process.argv[3]; // in meters

function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
    return bmi;
}

console.log(calculateBMI(70, 1.75));

