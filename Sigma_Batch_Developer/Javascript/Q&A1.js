// Function to reverse a string
function reverseString(str) {
  let arr = new Array(str.length); // Create an array with the same length as the string
  for (let i = 0; i < str.length; i++) {
      arr[i] = str[str.length - 1 - i]; // Assign characters in reverse order
  }
  let reversedStr = arr.join(''); // Convert array back to string
  return reversedStr;
}
console.log(reverseString("JAVASCRIPT")); // Output: TPIRCSAVAJ ✅

// Simplified approach to reverse a string using built-in methods
const reversedString = "JAVASCRIPT".split('').reverse().join('');
console.log(reversedString); // Output: TPIRCSAVAJ ✅

// Function to create a palindrome by appending the reverse of the string
function makePalindrome(str) {
  str = str.toLowerCase(); // Convert to lowercase for consistency
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i]; // Build reversed string
  }
  return str + reversed; // Concatenate original and reversed
}
console.log(makePalindrome("hello")); // Output: "helloolleh" ✅
console.log(makePalindrome("world")); // Output: "worlddlrow" ✅

// Function to check if a string is a palindrome (ignoring case and non-alphabet characters)
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters
  return str === str.split('').reverse().join(''); // Compare string with its reverse
}
console.log(isPalindrome("racecar")); // Output: true ✅
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true ✅
console.log(isPalindrome("hello")); // Output: false ❌

// Function to sum all numbers in a nested array
function sumNestedArray(numbers) {
  let sum = 0; // Initialize sum
  for (let i = 0; i < numbers.length; i++) { // Loop through outer array
      for (let j = 0; j < numbers[i].length; j++) { // Loop through inner arrays
          sum += numbers[i][j]; // Add each value to sum
      }
  } 
  return sum;
}
const numbers = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];  
console.log(sumNestedArray(numbers)); // Output: 45 ✅

// Simple Todo List with 'add', 'delete', 'list', and 'quit' commands
let todo = []; // Initialize an empty array
let input = prompt("Enter a command: add, delete, list, quit");
while (input !== 'quit') {
  if (input === 'add') {
      let item = prompt("Add item to list:");
      todo.push(item); // Add item to array
      console.log(`"${item}" added to your list.`);
  } else if (input === 'delete') {
      let item = prompt("Enter item to delete:");
      let index = todo.indexOf(item); // Find index of item
      if (index !== -1) {
          todo.splice(index, 1); // Remove item if found
          console.log(`"${item}" deleted from your list.`);
      } else {
          console.log(`"${item}" not found in your list.`);
      }
  } else if (input === 'list') {
      console.log("***************");
      for (let i = 0; i < todo.length; i++) {
          console.log(`${i}: ${todo[i]}`);
      }
      console.log("***************");
  } else {
      console.log("Invalid command. Use 'add', 'delete', 'list', or 'quit'.");
  }
  input = prompt("Enter a command: add, delete, list, quit"); // Ask again
}
console.log("Exited Todo List.");

// Function to find the most repeated element in an array
function mostFrequent(arr) {
  const count = {}; // Object to store occurrences
  let maxCount = 0;
  let maxElements = [];
  for (let num of arr) {
      count[num] = (count[num] || 0) + 1; // Increase count
      if (count[num] > maxCount) {
          maxCount = count[num];
          maxElements = [num]; // Reset list with new max element
      } else if (count[num] === maxCount) {
          maxElements.push(num); // Add if frequency matches max
      }
  }
  return maxElements.length === 1 ? maxElements[0] : maxElements;
}
console.log(mostFrequent([1, 2, 3, 2, 4, 2, 5, 1, 3, 1])); // Output: [2, 1] ✅

// Function to remove duplicate values from an array
function removeDuplicates(arr) {
  return [...new Set(arr)]; // Convert to Set (stores only unique values)
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6])); // Output: [1, 2, 3, 4, 5, 6] ✅

// One-liner function to check if two words are anagrams
const isAnagram = (str1, str2) => [...str1].sort().join('') === [...str2].sort().join('');
console.log(isAnagram("listen", "silent")); // Output: true ✅
console.log(isAnagram("hello", "world")); // Output: false ❌