
/*

Object Extensibility and Sealing
a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.
b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable
called extensibleStatus.
c) Create a new object called teacher with a 'subject' property set to 'Math'.
d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
sealedStatus.
f) Print the extensibleStatus and sealedStatus to the console.

*/

// a) Use the Object.preventExtensions method to prevent any further additions of properties to the student object.
const student = { name: 'John', age: 20, grade: 'A' };
Object.preventExtensions(student);

// b) Use the Object.isExtensible method to check if the student object is extensible.
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property set to 'Math'.
const teacher = { subject: 'Math' };

// d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
Object.seal(teacher);

// e) Use the Object.isSealed method to check if the teacher object is sealed.
const sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console.
console.log('Extensible Status:', extensibleStatus);
console.log('Sealed Status:', sealedStatus);



