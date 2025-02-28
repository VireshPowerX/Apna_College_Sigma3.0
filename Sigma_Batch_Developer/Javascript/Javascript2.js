let name = "    Viresh    ";
name.trim(); // This will not work as trim() does not change the original string
console.log(name);
let name1 = name.trim(); // This will work as trim() does not change the original string
console.log(name1);
name.toUpperCase(); // This will not work as toUpperCase() does not change the original string
name.toLowerCase(); // This will not work as toLowerCase() does not change the original string
console.log(name);
console.log(name.toUpperCase());
name1.slice (2, 5); // This will not work as slice() does not change the original string res 
name1.slice(2) // resh
name1.slice(-2) // sh
name1.replace("V","M") // V convert into M
name1.replace("Vi","Me") // Vi convert into Me
let name2 = "okokok";
name2.replace("ok","no") // nookok
name1.repeat(3) // VireshVireshViresh
console.log(name2.replace("ok","no").replace("ok","no")); // nonook
let students = ["Viresh", "Rahul", "Rohit", "Rajesh"];
console.log(students[0]); // Viresh
console.log(students[0][0],students[1][0]); // V R
typeof students; // object
typeof students[0]; // string
students = ["Viresh", "Rahul", "Rohit", "Rajesh", 1, 2, 3, 4, 5.5];
name1[0] = "M"; // This will not work as strings are immutable its not change value of Viresh to M
students[0] = "M"; // This will work as arrays are mutable its change value of Viresh to M
students.push("Ramesh"); // Add Ramesh at the end of the array
students.pop(); // Remove the last element from the array
students.unshift("Ramesh"); // Add Ramesh at the beginning of the array
students.shift(); // Remove the first element from the array
students.indexOf("Rohit"); // 2
students.indexOf("rohit"); // -1
students.includes("Rohit"); // true
students.includes("rohit"); // false
let teachers = ["Ramesh", "Suresh", "Rajesh", "Rohit"];
students.concat(teachers); // Combine students and teachers array its not change original array
students.reverse(); // Reverse the array its change original array
students.slice(); // Copy the array its not change original array
students.slice(1); // Copy the array from 1 index
students.slice(1, 3); // Copy the array from 1 to 3 index
students.slice(-2); // Copy the last 2 elements from the array
teachers.splice(1, 2); // Remove 2 elements from 1 index
teachers.splice(1, 2, "Rahul", "Rohit"); // Remove 2 elements from 1 index and add Rahul and Rohit
teachers.splice(2); // Remove all elements from 2 index
teachers.sort(); // Sort the array
teachers.sort().reverse(); // Sort the array in reverse order
let marks = [100,50,90,80,20,30,70]; 
marks.sort(); // [100, 20, 30, 50, 70, 80, 90]
let arr = [1,2,3,4,5];
let arr1 = arr; // This will not work as it will change the original array
arr1 === arr; // true
arr1 = [6, 7, 8, 9, 10]; // This will work as it will not change the original array
arr1 === arr; // false
const arr2 = [1,2,3,4,5];
arr2[0] = 6; // This will work as arrays are mutable
arr2; // [6, 2, 3, 4, 5]
arr2 = [6, 7, 8, 9, 10]; // This will not work as arrays are mutable
let arr3 = [[1,2,3],[4,5,6],[7,8,9]];
arr3[1][2]; // 6
let arr4 = ["hello", 'a', 28, 64, 99, -6]; 
let item = 64; 
if (arr4.indexOf(item) != -1) {console.log("its exists in array");} // item if not found then return -1 not equal to -1 condition true 
else {console.log("not exists in array");} // its exists in array