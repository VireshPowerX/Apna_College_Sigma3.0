// ⭐️ Array Methods (forEach, map, filter, some, every, reduce)
let arr = [1,2,3,4,5];

// forEach: Executes a function for each element (no return)
arr.forEach((el) => {
    console.log(el * 2); // Doubles each element and logs it
});
arr.forEach(function (el) {
    console.log(el * 2); // Same using traditional function
});
let print = function (el) {
    console.log(el * 2);
}; 
arr.forEach(print); // Passing function by reference

// forEach with objects
let arr1 = [
    { name: "Fauna", marks: 95 },
    { name: "Viresh", marks: 92 },
    { name: "Love", marks: 100 }
];
arr1.forEach((student) => {
    console.log(student.name, student.marks); // Logs name and marks
});

// map: Creates a new array by transforming elements
let arr2 = [
    { name: "Fauna", marks: 95 },
    { name: "Viresh", marks: 92 },
    { name: "Love", marks: 100 }
];
let doubledArr = arr2.map((el) => {
    return el.marks * 2; // Doubles marks
});
console.log(doubledArr); // [190, 184, 200]

// filter: Returns array of elements that pass the condition
let num = [1,2,3,4,5,6,7,8,9,10,11,12];
let evenNum = num.filter((el) => {
    return el % 2 === 0; // Filters even numbers
    // return el % 2 != 0; // For odd numbers
    // return el < 5;      // For less than 5
});

// every: Returns true if ALL elements satisfy condition
[2,4,6,8].every((el) => el % 2 == 0); // true
[2,4,6,8,1].every((el) => el % 2 == 0); // false

// some: Returns true if ANY element satisfies condition
[1,3,5,7].some((el) => el % 2 == 0); // false
[2,4,6,8,1].some((el) => el % 2 == 0); // true

// reduce: Reduces array to a single value
[1,2,3,4].reduce((res, el) => res + el); // 10

// 🔥 Finding Maximum Value using Loop and Reduce
let arr4 = [1,4,2,5,6,7,11,2,9,2];
let max = -1;
for(let i = 0; i < arr4.length; i++) {
    if(arr4[i] > max) {
        max = arr4[i];
    }
}
console.log(max); // 11

// Same using reduce
max = arr4.reduce((max, el) => {
    return el > max ? el : max;
});
console.log(max); // 11

// 🧠 Default Parameters
function greet(name = "Guest", message = "Hello") {
    console.log(message, name);
}
greet(); // Hello Guest
greet("John"); // Hello John
greet("John", "Welcome"); // Welcome John

// ✨ Spread Operator (expands iterable values)
let arr5 = [1,2,3];
let arr6 = [4,5,6];
let arr7 = "hello";
let combined = [...arr6, ...arr5, ...arr7];
console.log(combined); // [4,5,6,1,2,3,"h","e","l","l","o"]

// Spread with object
const data = {
    email: "nomail@nomail.com",
    name: "abcd",
};
const dataCopy = { ...data, id: 123, country: "Unknown" };
console.log(dataCopy);

// Spread with string and array
const data1 = { ...'hello' }; // {0: "h", 1: "e", 2: "l", 3: "l", 4: "o"}
console.log(data1);
const data2 = { ...arr6 }; // {0: 4, 1: 5, 2: 6}
console.log(data2);

// 🔄 Rest Parameters (collects remaining args into array)
function sum(...nums) {
    let result = 0;
    for(let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(sum(1,2,3,4,5)); // 15

// max using reduce
function max(...num) {
    return num.reduce((max, el) => max + el); // Not max but sum
}
max(5,4); // 9

// diff: Incorrect usage of arr9 (not declared!)
function diff(msg, ...nums) {
    console.log(msg);
    return arr9.reduce((diff, el) => {
        return diff > el ? el : diff;
    });
}
diff(10,20,30,40,-30,50); // ❌ arr9 not defined!

// arguments object demo
function min() {
    console.log(arguments); // Logs all arguments passed
    console.log(arguments.length); // Number of arguments
}

// 📝 Template Literals
let name = "Fauna";
let message = `Hello, my name is ${name}`;
console.log(message); // Hello, my name is Fauna

// 🧩 Destructuring Arrays and Objects
let arr0 = ["Fauna", "Viresh", "Flora", "abc", "def", "ghi"];
let [first, second, ...rest] = names; // ❌ Error: 'names' not defined
console.log(first, second, rest);

let person = { name: "Fauna", age: 25, city: "New York" };
let { name: myName, age: myAge } = person;
console.log(myName, myAge); // Fauna 25

const student = {
    name: "Fauna",
    age: 25,
    class: "AI",
    subjects: ["english", "science", "math"],
    username: "fauna@123",
    password: "abcd",
}; 
// Destructuring with default value
let { username: user, password: secret, city: place = "Earth" } = student;
