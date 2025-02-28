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
