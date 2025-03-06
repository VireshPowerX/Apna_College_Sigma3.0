//Object Literals
//Object literals are a way to define objects in JavaScript. They are defined using curly braces {} and can contain properties and methods.
//Complex objects can be created using object literals. Object literals are defined using curly braces {} and can contain properties and methods.
//Array of objects
//An array of objects is a collection of objects stored in a single variable. Each object in the array can have different properties and methods.
const obj = { 
    name: 'Jane',
    age: 25,
    isMarried: true,
    salary: 100.5,
    latitute: '45.5° N',
    city: 'New York',
    hobbies: ['reading', 'music', 'sports'],
    address: {
        street: '123 Main St',
        city: 'New York'
    },
    getBirthYear: function() {
        return 2019 - this.age;
    }
}; obj["name"]; obj.name; obj.getBirthYear(); obj.hobbies[0]; obj.address.city;
const obj1 = {
    1: 'one', // key is a number
    true: 'true', // key is a boolean
}; obj1[1]; // obj[1]; // 'one' obj1[true]; // 'true' obj1['1']; // 'one'
obj1.true = 'false'; // obj1['true'] = 'false'; obj1.true; // 'false'
obj1.gender = 'female'; // add a new property
delete obj1.true; // remove a property
obj1.gender = "Female"; // add a new property
obj1.gender = ['Male','Female']; // add a new property
//Nested objects
const obj2 = {
    alice: {
        age: 25,
        personality: 'friendly'
    },
    roy: {
        age: 35,
        personality: 'funny'
    }
}; obj2.alice.age; // 25 obj2.roy.personality; // 'funny'
obj2.alice.age = 30; // change the value of a property
//Array of objects
const arr = [
    { name: 'Alice', age: 25 },
    { name: 'Roy', age: 30 }
]; arr[0].name; // 'Alice' arr[1].age; // 30
arr[0].age = 30; // change the value of a property
//Math object
//The Math object provides mathematical constants and functions. It is not a function object.
Math
//Math.PI is pie, Math.E is Euler's number, Math.SQRT2 is the square root of 2, Math.SQRT1_2 is the square root of 1/2, Math.LN2 is the natural logarithm of 2, Math.LN10 is the natural logarithm of 10, Math.LOG2E is the base 2 logarithm of E, Math.abs() returns the absolute value of a number, Math.ceil() rounds a number up to the nearest integer, Math.floor() rounds a number down to the nearest integer, Math.round() rounds a number to the nearest integer, Math.max() returns the largest of zero or more numbers, Math.min() returns the smallest of zero or more numbers, Math.pow() returns the base to the exponent power, Math.sqrt() returns the square root of a number, Math.random() returns a random number between 0 and 1.
Math.PI; // 3.141592653589793 Properties
Math.E; // 2.718281828459045 Properties
Math.abs(-4); // 4 absolute form positive number convert always
Math.round(4.5); // 5 round to the nearest integer 4.4 round to 4
Math.round(-4.5); // -4 round to the nearest integer -4.6 round to -5
Math.sqrt(16); // 4 square root of 16
Math.pow(2, 4); // 16 power of 2^4 = 2*2*2*2 = 16
Math.max(1, 2, 3, 4, 5); // 5 largest number
Math.min(1, 2, 3, 4, 5); // 1 smallest number
Math.random(); // random number between 0 and 1
Math.random() * 10; // random number between 0 and 10
Math.ceil(4.7); // 5 round up to the nearest integer
Math.floor(4.2); // 4 round down to the nearest integer
let num = 0; Math.floor(Math.random()*10)+1; // 1 to 10 random number generate
Math.floor(Math.random()*5)+21; //generate random number 21 to 25
