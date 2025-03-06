let sum = 54; // Global Scope
function Calsum(a,b) // function (arguments)
{
    // let sum = a+b; // Function Scope if sum is not declare its take global scope
    return sum; // 54
}


Calsum(1,2); // call function 
// console.log(sum); // 54
let age = 25;

if(age>=18){
    let message = "Welcome"; // Block Scope is let and const its declared in {} 
    console.log(message); // Welcome
}
// console.log(message); // ReferenceError: message is not defined


function outer() 
{
    let x = 10;
    function inner() // Function Scope
    {   let a = 55; // Block Scope {} not use out of brackets
        console.log(x); // 10
    }
    inner(); // Lexical Scope 10
    x = 20; // Global Scope
    console.log(x); // 20
    // console.log(a); // ReferenceError: a is not defined
}
outer(); // 20