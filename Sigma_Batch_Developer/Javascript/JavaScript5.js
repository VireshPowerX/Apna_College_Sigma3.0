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


let y = 20; // Global Scope
function outer() 
{
    let x = 10; // Function Scope
    function inner()
    {   let a = 55; // Block Scope {} not use out of brackets
        console.log(x); // 10 Lexical Scope
        console.log(y); // 20 Lexical Scope
    }
    inner(); // Lexical Scope 10 20
    x = 30;
    console.log(x); // 30 Global Scope for internal function and its Block Scope out of function not use
    // console.log(a); // ReferenceError: a is not defined
}
outer(); // 10 20 30


let z = 20;
function outer() {
    function inner() {
        console.log(x);
        console.log(z);
    }
    let x = 10;
    inner();
}   outer(); // 10 20 hoisting if its define afterwards then also we got output


function multiplegreet(func,count) { // High Order Function means argumennt take another function
    for(let i=0; i<count; i++) {
        func();
    }
}
    let name = function () {
        console.log('Hello World');
    }
console.log(multiplegreet(name,5));


function oddEvenTest(request) { // High Order Function Return means its returns lots ways
    if(request == "odd"){
        let n = prompt("number"); function odd(n) {
            console.log(!(n % 2 == 0));
        }
        return odd(n);
    } else if(request == "even") {
        let n = prompt("number"); function even(n) {
            console.log(n % 2 == 0);
        }
        return even(n);
    } else {
        console.log("Error");
    }
} let num = prompt("odd or even");
oddEvenTest(num);


const calculator = {
    add: function(a, b) { // Method
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    },
    div: function(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero.");
        }
        return a / b;
    }
}; 
console.log(
calculator.add(1,2),
calculator.sub(2,1),
calculator.mul(2,1),
calculator.div(2,1)); // 3 1 2 2