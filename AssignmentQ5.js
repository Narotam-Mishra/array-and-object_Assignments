/*

You are given a JavaScript object representing a student's information. Your task is to use the 'for in' loop
to iterate over the properties of the object and perform various operations.

`
const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    inEnrolled: true
};

`
task - Create a function displayStudentInfo() that takes the student object as a parameter. Inside this function, use a
'for in' loop to iterate over the properties of the student object and print each property and its corresponding
value to the console. 

*/

const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
};

function displayStudentInfo(studentObj) {
    for (let property in studentObj) {
        console.log(`Property: ${property}, Value: ${studentObj[property]}`);
    }
}

// Call the function with the student object as a parameter
displayStudentInfo(student);
