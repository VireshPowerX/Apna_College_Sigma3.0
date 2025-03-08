// For Loop Syntax: for(initialization; condition; increment/decrement){}
// For loop to print numbers from 1 to 5
for(let i = 1; i <= 5; i++) { 
    console.log(i); // Output: 1 2 3 4 5
}
// -----------------------------------------------------------------------------------------------
/*
// Infinite loops due to incorrect conditions
for(let i = 1; i = i + 5;) { // i is always reassigned, causing an infinite loop
    console.log(i); 
}

for(let i = 1; i <= 5; i--) { // i is decreasing, never reaching 5
    console.log(i); 
}

for(let i = 1; i > 0; i++) { // Condition is always true, infinite loop
    console.log(i); 
}
*/
// -----------------------------------------------------------------------------------------------
// Incorrect increment placement leading to unexpected output
for(let i = 1; i++ <= 5;) { 
    console.log(i); // Output: 2 3 4 5 6
}
// -----------------------------------------------------------------------------------------------
// Multiplication table of a user-entered number
let n = prompt("Enter a number: "); // Prompt user for input
n = parseInt(n); // Convert input string to an integer
for(let i = n; i <= n * 10; i = i + n) { // Loop to print the multiplication table
    console.log(i); // Output: n, 2n, 3n, ..., 10n
}
// -----------------------------------------------------------------------------------------------
// Nested for loop example
for(let i = 1; i <= 3; i++) {
    console.log(`Outer loop iteration ${i}`); // Outer loop message
    for(let j = 1; j <= 3; j++) {
        console.log(j); // Inner loop output: 1 2 3
    }
}
// -----------------------------------------------------------------------------------------------
// While Loop Syntax: while(condition){}
// Using while loop to print numbers from 1 to 5
let i = 1; // Initialize i to 1
while(i <= 5) { 
    console.log(i); // Output: 1 2 3 4 5
    i++; // Increment i
}
// -----------------------------------------------------------------------------------------------
// Using break in a while loop
while(i <= 5) {
    if(i == 3) {
        break; // Exits the loop when i equals 3
    }
    console.log(i); // Output: 1 2
}
// -----------------------------------------------------------------------------------------------
// Iterating over an array using a for loop
let fruits = ['apple', 'banana', 'mango', 'orange']; // Array of fruits
for(let i = 0; i < fruits.length; i++) { 
    console.log(i, fruits[i]); // Output: index and fruit name
}
// -----------------------------------------------------------------------------------------------
// Nested for loop with a nested array
let heroes = [
    ["superman", "batman", "wonderwoman"],
    ["ironman", "captainamerica", "thor"],
    ["spiderman", "hulk", "blackwidow"]
];
for(let i = 0; i < heroes.length; i++) { // Outer loop
    console.log(`Outer array index ${i}`);
    for(let j = 0; j < heroes[i].length; j++) { // Inner loop
        console.log(heroes[i][j]); // Output: superhero names
    }
}
// -----------------------------------------------------------------------------------------------
// For...of loop syntax: for (variable of iterable){}
// Iterating over an array using for...of loop
let colors = ['red', 'green', 'blue', 'yellow'];
for(let color of colors) { 
    console.log(color); // Output: red green blue yellow
}
// -----------------------------------------------------------------------------------------------
// Iterating over a string using for...of loop
let name1 = "javascript";
for(let char of name1) {
    console.log(char); // Output: j a v a s c r i p t
}
// -----------------------------------------------------------------------------------------------
// Nested for...of loop with a nested array
let nestedColors = [['red', 'green'], ['blue', 'yellow'], ['pink', 'orange']];
for(let colors of nestedColors) { // Outer loop
    console.log(`Outer array: ${colors}`);
    for(let color of colors) { // Inner loop
        console.log(color); // Output: red green blue yellow pink orange
    }
}
// -----------------------------------------------------------------------------------------------
// Simple Todo App using loops
let todos = []; // Empty array to store todos
let input = prompt("Enter a todo: "); // Prompt user for input
while(input !== 'quit') { // Loop continues until user types 'quit'
    if(input === 'list') { // If user types 'list', display all todos
        console.log("**********");
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`); // Display todos with index
        }
        console.log("**********");
    } else if(input === 'delete') { // If user types 'delete'
        let index = prompt("Enter index to delete: "); // Prompt for index
        todos.splice(index, 1); // Remove the todo at given index
        console.log("Todo deleted");
    } else {
        todos.push(input); // Add new todo to the array
        console.log("Todo added");
    }
    input = prompt("Enter a todo: "); // Ask for next input
}