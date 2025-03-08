// Object Literals  
// Object literals are a way to define objects in JavaScript using curly braces {}.  
// They can contain properties and methods to store structured data.  
const obj = { 
    name: 'Jane', // String property  
    age: 25, // Number property  
    isMarried: true, // Boolean property  
    salary: 100.5, // Float property  
    latitude: '45.5° N', // String property  
    city: 'New York', // String property  
    hobbies: ['reading', 'music', 'sports'], // Array property  
    address: { // Nested Object  
        street: '123 Main St',
        city: 'New York'
    },
    getBirthYear: function() { // Method to calculate birth year  
        return 2024 - this.age; // Assuming the current year is 2024  
    }
};
// -----------------------------------------------------------------------------------------------
// Accessing object properties  
obj["name"]; // 'Jane' (Bracket notation)  
obj.name; // 'Jane' (Dot notation)  
obj.getBirthYear(); // Returns birth year based on the current year  
obj.hobbies[0]; // 'reading' (Accessing first hobby)  
obj.address.city; // 'New York' (Accessing nested object property)  
// -----------------------------------------------------------------------------------------------
// Object with different key types  
const obj1 = {
    1: 'one', // Number as key  
    true: 'true', // Boolean as key  
}; 
// Accessing values  
obj1[1]; // 'one'  
obj1[true]; // 'true'  
// Modifying object properties  
obj1.true = 'false'; // Changing value of key 'true'  
obj1.gender = 'female'; // Adding a new property  
delete obj1.true; // Deleting a property  
obj1.gender = ['Male', 'Female']; // Overwriting with an array  
// -----------------------------------------------------------------------------------------------
// Nested objects  
const obj2 = {
    alice: {
        age: 25,
        personality: 'friendly'
    },
    roy: {
        age: 35,
        personality: 'funny'
    }
}; 
// Accessing nested object properties  
obj2.alice.age; // 25  
obj2.roy.personality; // 'funny'  
// Modifying a nested property  
obj2.alice.age = 30; // Updating Alice's age  
// -----------------------------------------------------------------------------------------------
// Array of objects  
const arr = [
    { name: 'Alice', age: 25 },
    { name: 'Roy', age: 30 }
]; 
// Accessing array of objects  
arr[0].name; // 'Alice'  
arr[1].age; // 30  
// Modifying a value in an array of objects  
arr[0].age = 30; // Updating Alice's age  
// -----------------------------------------------------------------------------------------------
// Math Object  
// The Math object provides mathematical constants and functions.  
Math.PI; // 3.141592653589793 (Pi constant)  
Math.E; // 2.718281828459045 (Euler's number)  
// Math functions  
Math.abs(-4); // 4 (Absolute value)  
Math.round(4.5); // 5 (Rounds to the nearest integer)  
Math.round(-4.5); // -4 (Rounds to the nearest integer)  
Math.sqrt(16); // 4 (Square root)  
Math.pow(2, 4); // 16 (Power of 2^4)  
Math.max(1, 2, 3, 4, 5); // 5 (Largest number)  
Math.min(1, 2, 3, 4, 5); // 1 (Smallest number)  
Math.random(); // Generates a random number between 0 and 1  
Math.random() * 10; // Generates a random number between 0 and 10  
Math.ceil(4.7); // 5 (Rounds up)  
Math.floor(4.2); // 4 (Rounds down)  
// -----------------------------------------------------------------------------------------------
// Generating a random number within a specific range  
Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10  
Math.floor(Math.random() * 5) + 21; // Random number between 21 and 25  
// -----------------------------------------------------------------------------------------------
// Guess the number game  
const max = prompt("Enter the max number"); // User enters the max limit  
const random = Math.round(Math.random() * max) + 1; // Generates a random number  
let guess = prompt("Enter the guess number"); // User enters a guess  
// Loop until the correct guess or user quits  
while (true) {
    if (guess === "quit") { // If user types 'quit', exit  
        console.log("Quit the program");  
        break;
    } 
    if (guess == random) { // If the guess is correct  
        console.log("Congratulations! You guessed the right number: " + random);  
        break;
    } else if (guess < random) { // If the guess is too low  
        guess = prompt("You guessed a small number. Please try again");
    } else { // If the guess is too high  
        guess = prompt("You guessed a large number. Please try again");
    }
}