// /* Comments in JavaScript and CSS use the same syntax: `/* comment */`,  
// but in HTML, comments are written as `<!-- comment -->` 

// Printing "Hello World" to the console
console.log("Hello World");

// Attempting to print an undefined variable (this will cause an error if "variable" is not declared)
console.log(variable); 

// Performing addition and printing the result
console.log(10 + 20);

// Printing multiple values in a single console.log statement
console.log("Hello", "World", variable, (10 - 20), "!");

// Using template literals (backticks) to insert variables and expressions in a string
console.log(`Hello World ${variable} ${10 + 20} !`);

// Declaring three variables with different numerical values
let a = 255; 
let b = 150; 
let c = 200;

// Checking which number is the largest and printing it
if (c > b && c > a) {
    console.log(c);  // If "c" is the largest, print "c"
} 
else if (b > c && b > a) {
    console.log(b);  // If "b" is the largest, print "b"
} 
else if (a > b && a > c) {
    console.log(a);  // If "a" is the largest, print "a"
}

// Checking if the last digit of two numbers is the same

// Declaring two numbers
let num = 32; 
let num1 = 47852; 

// Extracting the last digit of each number using the modulus operator
let last = num % 10;   // last digit of "num" (32 % 10 = 2)
let last1 = num1 % 10; // last digit of "num1" (47852 % 10 = 2)

// Comparing the last digits and printing the result
if (last == last1) {
    console.log("same");  // If last digits are the same, print "same"
} 
else {
    console.log("not same"); // If last digits are different, print "not same"
}