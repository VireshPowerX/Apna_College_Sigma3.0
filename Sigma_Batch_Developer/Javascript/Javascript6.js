// 'this' is a keyword used to access properties of the current object
const student = { // 'student' is an object
    name: "Fauna", // 'name' is a key, "Fauna" is its value
    age: 18, // 'age' is an object property
    sci: 91, // science marks
    math: 96, // math marks
    phy: 99, // physics marks

    getAvg() { 
        // getAvg() {...} is a method of the student object
        let avg = Math.floor((this.sci + this.math + this.phy) / 3); 
        // 'this' refers to the student object and accesses its properties

        console.log(`${this.name} got average marks = ${avg}`); 
        // 'this.name' refers to student.name ("Fauna")
    }
};
student.getAvg(); // Calls the method to calculate and print the average
// -----------------------------------------------------------------------------------------------
// try & catch: 'try' always requires 'catch'
// If there is no error inside 'try', 'catch' is not executed
// If an error occurs, 'catch' handles it and prevents the program from crashing
try { 
    let a = 10;
    let b = 0;
    let result = a / b; // Division by zero (b = 0), but JavaScript allows it (Infinity)
    console.log(a); // Prints 10
    console.log(z); // This will throw an error (z is not defined)
    console.log(result); // This line will NOT execute due to the error above
} catch (error) { 
    console.log("Error: ", error); 
    // The catch block will handle the error and print the error message
}
// -----------------------------------------------------------------------------------------------
// Arrow functions: concise syntax for defining functions
const hello = () => {
    console.log("Hello World");
}; 
hello(); // Calls the hello function, prints "Hello World"
const cube = (n) => {
    return n * n * n; // Returns the cube of n
}; 
cube(3); // Returns 27
const add = (a, b) => {
    return a + b; // Returns the sum of a and b
}; 
add(1, 2); // Returns 3
const pow = (a, b) => {
    return Math.pow(a, b); // Returns 'a' raised to the power 'b'
}; 
pow(2, 5); // Returns 32 (2^5)
const sub = (a, b) => (a - b); // Shorthand syntax for subtraction
sub(10, 5); // Returns 5
// -----------------------------------------------------------------------------------------------
// setTimeout(function, timeout) executes a function after a delay (timeout in milliseconds)
console.log("Hello Programmer"); // Executes immediately
setTimeout(() => {
    console.log("Hello World"); // Executes after 4 seconds (4000 ms)
}, 4000);
console.log("Learning"); // Executes immediately
console.log("Coding"); // Executes immediately
// -----------------------------------------------------------------------------------------------
// setInterval(function, timeout) runs a function repeatedly at a set time interval (timeout in milliseconds)
// clearInterval stops the setInterval after a condition is met
let i = 0; // Counter variable
const interval = setInterval(() => {
    console.log(`Counter: ${i}`); // Prints counter value
    i++; // Increments counter by 1
    if (i === 10) { 
        clearInterval(interval); // Stops execution when i reaches 10
    }
}, 2000); // Runs every 2 seconds
// -----------------------------------------------------------------------------------------------
// Function is an object, and global variables are properties of the window object
const obj = {
    name: "Fauna",
    age: 18,
    // Regular function: 'this' refers to the object 'obj'
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`, this); 
        // 'this' refers to 'obj', so 'this.name' correctly outputs "Fauna"
        // 'this' logs the 'obj' itself
    },
    // Arrow function: 'this' is inherited from the surrounding lexical scope (window/global)
    sayHelloArrow: () => {
        console.log(`Hello, my name is ${this.name}`, this); 
        // 'this' refers to the parent scope (window object in a browser environment)
        // 'this.name' is 'undefined' because window.name is an empty string or global variable
        // 'this' logs the window object
    },
    // Regular function with arrow function inside setTimeout
    sayHelloBind: function () {
        console.log(`Hello, my name is ${this.name}`, this); 
        // 'this' refers to 'obj', so 'this.name' outputs "Fauna"
        // 'this' logs the 'obj' itself
        setTimeout(() => {
            console.log(this);
            // Arrow function doesn't have its own 'this', it inherits from 'sayHelloBind'
            // 'this' still refers to 'obj'
        }, 2000);
    },
    // Regular function with regular function inside setTimeout
    sayHelloBindArrow: function () {
        console.log(`Hello, my name is ${this.name}`, this);
        // 'this' refers to 'obj', so 'this.name' outputs "Fauna"
        // 'this' logs the 'obj' itself
        setTimeout(function () {
            console.log(this);
            // Regular function inside setTimeout has its own 'this'
            // 'this' refers to the global object (window in browsers)
        }, 2000);
    }
};