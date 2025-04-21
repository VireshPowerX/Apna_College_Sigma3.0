// Exporting a simple value
// filename.js
module.exports = 123;

// Importing the exported value
let a = require("./filename");
console.log(a); // Output: 123

// Exporting multiple values using an object
let b = 5, c = 7;

// Function to add two numbers
let sum = (d, e) => d + e;

// Function to multiply two numbers
let mul = (f, g) => f * g;

// Exporting all functions and values as an object
let obj = {
    sum: sum,
    mul: mul,
    b: b,
    c: c
};

module.exports = obj;

// Importing the object from the file
let h = require("./filename");
console.log(h.sum(2, 3)); // Output: 5
console.log(h.b);         // Output: 5

// If a folder contains index.js, you can require the folder directly
let data = require("./foldername");
console.log(data); // Runs index.js inside that folder

// 📦 Example using 'figlet' package to generate ASCII text
let figlet = require("figlet");

figlet("Hello AI", function (err, data) {
    if (err) {
        console.log("Something went wrong");
        console.dir(err);
        return;
    }
    console.log(data); // Outputs "Hello AI" in ASCII art
});

// 📤 ES Module syntax (use when "type": "module" is set in package.json)
// filename.js
export let sum = (a, b) => a + b;
export let b = 0;
export let c = 0;

// Importing specific exports from file
import { sum, b, c } from "./filename";
