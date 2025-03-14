// Array Methods Prebuild
// forEach map filter some every reduce
let arr = [1,2,3,4,5];
arr.forEach((el) => {
    console.log(el * 2);
});
arr.forEach(function (el) {
    console.log(el * 2);
});
let print = function (el) {
    console.log(el * 2);
}; arr.forEach(print);
let arr1 = [{name: "Fauna", marks: 95,}, {name: "Viresh", marks: 92,}, {name: "Love", marks: 100},];
arr1.forEach((student) => {
    console.log(student.name, student.marks);
});

// map & filter
let arr2 = [{name: "Fauna", marks: 95,}, {name: "Viresh", marks: 92,}, {name: "Love", marks: 100},];
let doubledArr = arr2.map((el) => {
    return el.marks * 2;
});
console.log(doubledArr);
let num = [1,2,3,4,5,6,7,8,9,10,11,12];
let evenNum = num.filter((el) => {
    return el % 2 === 0; // for even
    // or return el % 2 != 0; for odd
    // or return el < 5; less then five
});

// every method is same like logical AND
[2,4,6,8].every((el) => el%2 == 0); // check all return true
[2,4,6,8,1].every((el) => el%2 == 0); // check all any false return false
// some method is same like logical OR
[1,3,5,7].every((el) => el%2 == 0); // check if all false return false
[2,4,6,8,1].every((el) => el%2 == 0); // check all any false return true

// reduce method
[1,2,3,4].reduce((res,el) => (res+el));

// Maximum Array
 let arr4 = [1,4,2,5,6,7,11,2,9,2];
 let max = -1;
 for(let i=0; i<arr4.length; i++){
     if(arr4[i] > max){
         max = arr4[i];
     };
 }; console.log(max);
 max = arr4.reduce((max,el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
 }); console.log(max);

 // Default Parameters
 function greet(name = "Guest", message = "Hello") {
    console.log(message, name);
 }
 greet(); // Output: Hello Guest
 greet("John"); // Output: Hello John
 greet("John", "Welcome"); // Output: Welcome John

 // Spread
 let arr5 = [1,2,3];
 let arr6 = [4,5,6];
 let arr7 = "hello";
 let combined = [...arr6, ...arr5, ...arr7];
 console.log(combined); // Output: [4,5,6,1,2,3,"h","e,"l,"l,"o]
 const data = {
    email: "nomail@nomail.com",
    name: "abcd",
 };
 const dataCopy = {...data, id: 123, country: "Unknown"};
 console.log(dataCopy); // Output: {email: "nomail@nomail.com", name: "abcd", id: 123, country: "Unknown"}
 const data1 = {..."hello"};
 console.log(data1); // Output: "hello"
 const data2 = {...arr6};
 console.log(data2); // Output: [1,2,3,4,5]

 // Rest Parameter
 function sum(...nums) {
    let result = 0;
    for(let i=0; i<nums.length; i++){
        result += nums[i];
    };
    return result;
 }
 console.log(sum(1,2,3,4,5)); // Output: 15
 function max(...num) {
    return num.reduce((max, el) => max + el);
 } max(5,4); // Output 9
 function diff(msg, ...nums) {
    console.log(msg);
    return arr9.reduce((diff, el) => {
        if(diff > el) {
            return el;
        } else {
            return diff;
        }
    });
 } diff(10,20,30,40,-30,50); // Output 10 -30
 function min() {
    console.log(arguments);
    console.log(arguments.length);
 }

 // Template String
 let name = "Fauna";
 let message = `Hello, my name is ${name}`;
 console.log(message); // Output: Hello, my name is Fauna

 // Destructuring
 let arr0 = ["Fauna", "Viresh", "Flora", "abc", "def", "ghi"];
 let [first,second,...rest] = names;
 console.log(first, second, rest); // Output: Fauna Viresh ["Flora", "abc", "def", "ghi"]
 let person = {name: "Fauna", age: 25, city: "New York"};
 let {name: myName, age: myAge} = person;
 console.log(myName, myAge); // Output: Fauna 25
 const student = {
    name: "Fauna",
    age: 25,
    class: "AI",
    subjects: ["english", "science", "math"],
    username: "fauna@123",
    password: "abcd",
 }; 
 let { username: user, password: secret, city:place="Earth"} = student;