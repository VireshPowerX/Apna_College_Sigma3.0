let sum = 54; // Global Scope
function Calsum(a, b) // Function with parameters (a, b)
{
    // let sum = a + b; // If sum is declared inside, it follows Function Scope
    return sum; // Returns the global sum (54)
}
Calsum(1, 2); // Function call
// console.log(sum); // Outputs: 54
let age = 25;
if (age >= 18) {
    let message = "Welcome"; // Block Scope (let and const are block-scoped)
    console.log(message); // Outputs: Welcome
}
// console.log(message); // ReferenceError: message is not defined (Block Scope restriction)
// -----------------------------------------------------------------------------------------------
// Lexical Scope Example
let y = 20; // Global Scope
function outer() {
    let x = 10; // Function Scope
    function inner() {   
        let a = 55; // Block Scope (only accessible inside this function)
        console.log(x); // Outputs: 10 (Lexical Scope)
        console.log(y); // Outputs: 20 (Lexical Scope - accesses the outer variable)
    }
    inner(); // Calls inner function → Outputs: 10 20
    x = 30;
    console.log(x); // Outputs: 30 (Function Scope - updated value)
    // console.log(a); // ReferenceError: a is not defined (Block Scope restriction)
}
outer(); // Runs the function and prints 10, 20, and 30
// -----------------------------------------------------------------------------------------------
// Hoisting Example
let z = 20;
function outer() {
    function inner() {
        console.log(x); // Hoisted (declared later, but still accessible)
        console.log(z); // Outputs: 20 (Global Scope)
    }
    let x = 10; // Declared after the function but still accessible due to hoisting
    inner();
}
outer(); // Outputs: 10 20
// -----------------------------------------------------------------------------------------------
// Higher Order Function - Function as Argument
function multiplegreet(func, count) {
    for (let i = 0; i < count; i++) {
        func(); // Calls the function passed as an argument
    }
}
let name = function () {
    console.log('Hello World');
};
console.log(multiplegreet(name, 5)); // Calls the function 5 times
// -----------------------------------------------------------------------------------------------
// Higher Order Function - Function as Return Value
function oddEvenTest(request) {
    if (request == "odd") {
        let n = prompt("Enter a number:");
        function odd(n) {
            console.log(!(n % 2 == 0)); // True if number is odd
        }
        return odd(n);
    } else if (request == "even") {
        let n = prompt("Enter a number:");
        function even(n) {
            console.log(n % 2 == 0); // True if number is even
        }
        return even(n);
    } else {
        console.log("Error: Invalid Input");
    }
}
let num = prompt("Enter 'odd' or 'even'");
oddEvenTest(num); // Calls the function based on user input
// -----------------------------------------------------------------------------------------------
// Calculator Object with Methods
const calculator = {
    add: function(a, b) { 
        return a + b; // Addition
    },
    sub: function(a, b) {
        return a - b; // Subtraction
    },
    mul: function(a, b) {
        return a * b; // Multiplication
    },
    div: function(a, b) {
        if (b === 0) { // Prevent division by zero
            throw new Error("Cannot divide by zero.");
        }
        return a / b; // Division
    }
};
console.log(
    calculator.add(1, 2),  // Outputs: 3
    calculator.sub(2, 1),  // Outputs: 1
    calculator.mul(2, 1),  // Outputs: 2
    calculator.div(2, 1)   // Outputs: 2
);