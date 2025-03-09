let name = "    Viresh    "; 
// trim() removes whitespace from both ends but does not modify the original string.
name.trim(); // This will not change the original string.
console.log(name); // Outputs: "    Viresh    "
// To store the trimmed value, assign it to a new variable.
let name1 = name.trim(); // Now, name1 contains "Viresh".
console.log(name1); // Outputs: "Viresh"
// toUpperCase() converts a string to uppercase but does not modify the original string.
name.toUpperCase(); // This will not change the original string.
name.toLowerCase(); // This will not change the original string.
console.log(name); // Outputs: "    Viresh    "
console.log(name.toUpperCase()); // Outputs: "    VIRESH    "
// slice() extracts a section of a string but does not modify the original string.
name1.slice(2, 5); // Extracts characters from index 2 to 4 ("res"), but does not change name1.
name1.slice(2); // Extracts substring from index 2 to the end ("resh").
name1.slice(-2); // Extracts the last 2 characters ("sh").
// replace() replaces a part of the string but does not modify the original string.
name1.replace("V", "M"); // Replaces "V" with "M", result: "Miresh".
name1.replace("Vi", "Me"); // Replaces "Vi" with "Me", result: "Meresh".
// -----------------------------------------------------------------------------------------------
let name2 = "okokok"; 
name2.replace("ok", "no"); // Only replaces the first occurrence, result: "nookok".
// repeat() repeats the string.
name1.repeat(3); // Outputs: "VireshVireshViresh"
// Chaining replace() to replace multiple occurrences.
console.log(name2.replace("ok", "no").replace("ok", "no")); // Outputs: "nonook"
// -----------------------------------------------------------------------------------------------
// Array declaration
let students = ["Viresh", "Rahul", "Rohit", "Rajesh"];
console.log(students[0]); // Outputs: "Viresh"
// Accessing first character of first two names.
console.log(students[0][0], students[1][0]); // Outputs: "V R"
// typeof operator
typeof students; // Returns "object" because arrays are objects.
typeof students[0]; // Returns "string" because array elements are strings.
// -----------------------------------------------------------------------------------------------
// Arrays can store multiple data types.
students = ["Viresh", "Rahul", "Rohit", "Rajesh", 1, 2, 3, 4, 5.5];
// Strings are immutable; trying to change a character does nothing.
name1[0] = "M"; // This will not change "Viresh" to "Miresh".
// Arrays are mutable; modifying an element works.
students[0] = "M"; // Changes "Viresh" to "M".
// Array methods
students.push("Ramesh"); // Adds "Ramesh" to the end of the array.
students.pop(); // Removes the last element of the array.
students.unshift("Ramesh"); // Adds "Ramesh" at the beginning.
students.shift(); // Removes the first element of the array.
// Finding elements in the array
students.indexOf("Rohit"); // Returns index 2.
students.indexOf("rohit"); // Returns -1 (case-sensitive).
students.includes("Rohit"); // Returns true.
students.includes("rohit"); // Returns false (case-sensitive).
// -----------------------------------------------------------------------------------------------
let teachers = ["Ramesh", "Suresh", "Rajesh", "Rohit"];
// concat() joins two arrays but does not modify the original arrays.
students.concat(teachers); // Returns a new array without modifying "students".
// reverse() modifies the original array.
students.reverse(); 
// slice() creates a copy of the array.
students.slice(); // Copies entire array.
students.slice(1); // Copies elements from index 1 to the end.
students.slice(1, 3); // Copies elements from index 1 to 2.
students.slice(-2); // Copies the last 2 elements.
teachers.splice(1, 2); // Removes 2 elements from index 1.
teachers.splice(1, 2, "Rahul", "Rohit"); // Removes 2 elements from index 1 and adds "Rahul" and "Rohit".
teachers.splice(2); // Removes all elements from index 2 onward.
teachers.sort(); // Sorts the array alphabetically.
teachers.sort().reverse(); // Sorts in reverse order.
let marks = [100, 50, 90, 80, 20, 30, 70];
marks.sort(); // Sorts as ["100", "20", "30", "50", "70", "80", "90"] (string comparison).
// -----------------------------------------------------------------------------------------------
let arr = [1, 2, 3, 4, 5];
let arr1 = arr; // arr1 refers to the same array as arr.
arr1 === arr; // true (both refer to the same memory location).
arr1 = [6, 7, 8, 9, 10]; // Now, arr1 is a new array.
arr1 === arr; // false (now they refer to different arrays).
const arr2 = [1, 2, 3, 4, 5];
arr2[0] = 6; // Works because arrays are mutable.
arr2; // Outputs: [6, 2, 3, 4, 5].
arr2 = [6, 7, 8, 9, 10]; // Error: Cannot reassign a new array to a "const" variable.
let arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
arr3[1][2]; // Outputs: 6 (Accessing 2nd row, 3rd column).
// -----------------------------------------------------------------------------------------------
let arr4 = ["hello", 'a', 28, 64, 99, -6];
let item = 64;
// Checking if an item exists in the array
if (arr4.indexOf(item) != -1) {
    console.log("It exists in the array"); 
} else {
    console.log("Not exists in the array");
}
// Outputs: "It exists in the array" (indexOf returns position, not -1).