
/*

Task - Assignment: Building a Student Management System

Description:
You are tasked with building a student management system using JavaScript. The system should allow you to
perform various operations on a list of students, including adding, updating, deleting, and displaying student
information.

Requirements:
There is an initial array of students. Each student is represented as an object with the following properties: id,
firstName, lastName, age, and grade as below code

`
const students = [
    {id: 1, firstName: "John", lastName: "Doe", age:20, grade:"A" },
    {id: 2, firstName: "Jane", lastName: "Smith", age:22, grade:"B" },
    {id: 3, firstName: "Bob", lastName: "Johnson", age:19, grade:"A" },
]

`
Implement the following functions using pure JavaScript (without any external libraries or frameworks):
a). Add a Student: Create a function to add a new student to the array.
b). Update Student Information: Create a function to update a student's information based on their id.
c). Delete a Student: Create a function to delete a student based on their id.
d). List All Students: Create a function to display a list of all students.
e). Find Students by Grade: Create a function to find all students who have a specific grade.
f). Calculate Average Age: Create a function to calculate the average age of all students using array method.

*/

const students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "B" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "A" },
    { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "C" },
];

// a) Add a Student
function addStudent(student) {
    students.push(student);
}

// b) Update Student Information
function updateStudent(id, updatedInfo) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students[studentIndex] = { ...students[studentIndex], ...updatedInfo };
    }
}

// c) Delete a Student
function deleteStudent(id) {
    const studentIndex = students.findIndex(student => student.id === id);
    if (studentIndex !== -1) {
        students.splice(studentIndex, 1);
    }
}

// d) List All Students
function listAllStudents() {
    console.log("List of Students:");
    students.forEach(student => {
        console.log(`${student.firstName} ${student.lastName} (ID: ${student.id}) - Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// e) Find Students by Grade
function findStudentsByGrade(grade) {
    return students.filter(student => student.grade === grade);
}

// f) Calculate Average Age
function calculateAverageAge() {
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
}

// Example usage:
addStudent({ id: 4, firstName: "Alice", lastName: "Jones", age: 21, grade: "B" });
addStudent({ id: 5, firstName: "Dean", lastName: "Jones", age: 31, grade: "A" });
addStudent({ id: 6, firstName: "Peter", lastName: "Flintoff", age: 33, grade: "A" });

// listAllStudents();

updateStudent(2, { age: 23 });
updateStudent(5, { age: 30 });

deleteStudent(1);
deleteStudent(3);

listAllStudents();

const getStudentsByGrade = findStudentsByGrade("A");
console.log("Students with Grade A:", getStudentsByGrade);

const averageAge = calculateAverageAge();
console.log("Average Age of Students:", averageAge);
