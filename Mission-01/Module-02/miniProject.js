// mini project for students 

let students = [
  {
    id: 1,
    name: 'Alice',
    age: 20,
    department: 'Computer Science',
    email: 'alice@example.com',
    phone: '1234567890'
  },
  {
    id: 2,
    name: 'Bob',
    age: 22,
    department: 'Electrical Engineering',
    email: 'bob@example.com',
    phone: '0987654321'
  }
];


function addStudent(name, age, department, email, phone) {
  if (!isValidEmail(email)) {
    throw new Error('Invalid email');
  }

  if (!isValidPhoneNumber(phone)) {
    throw new Error('Invalid phone number');
  }

  let newId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
  const newStudent = {
    id: newId,
    name: capitalizeFirstLetter(name),
    age,
    department,
    email,
    phone
  };

  students.push(newStudent);
  return newStudent;


}

addStudent('charlie', 21, 'Mechanical Engineering', 'charlie@example.com', '5555555555');


// function to get all students
function getAll() {
  for (let student of students) {
    console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Department: ${student.department}, Email: ${student.email}, Phone: ${student.phone}`);
  }
}


// function to find student
function findStudentById(id) {
  const student = students.find(student => student.id === id);
  if (!student) {
    throw new Error('Student not found');
  }
  return student;
}

findStudentById(1); // Example usage

// delete student by id
function deleteStudentById(id) {
  const index = students.findIndex(student => student.id === id);
  if (index === -1) {
    throw new Error('Student not found');
  }
  students.splice(index, 1);
}


