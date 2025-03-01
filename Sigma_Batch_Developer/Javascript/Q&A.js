// JAVASCRIPT reverse a string
function reverseString(str) {
    let arr = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
      arr[i] = str[str.length - 1 - i];
    }
   
    let reversedStr = arr.join('');
    return reversedStr;
  }
  console.log(reverseString("JAVASCRIPT")); // TPIRCSDAJ

  function reverseString(str) {
    let arr = new Array(str.length);
    for (let i = 0; i < str.length; i++) {
      arr[i] = str[str.length - 1 - i];
    }
   
    let reversedStr = arr.join('');
    return reversedStr;
  }  
  console.log(reverseString("JAVASCRIPT")); // TPIRCSDAJ

  const reversedString = "JAVASCRIPT".split('').reverse().join('');
console.log(reversedString); // TPIRCSDAJ

// Palindrome string
function makePalindrome(str) {
    str = str.toLowerCase();
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    const palindrome = str + reversed;
    return palindrome;
  }
  console.log(makePalindrome("hello")); // Output: "helloolleh"
  console.log(makePalindrome("world")); // Output: "worlddlrow"

  function isPalindrome(str) {
    str = str.toLowerCase();
    let cleanedStr = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char >= 'a' && char <= 'z') {
        cleanedStr += char;
      }
    }
    let reversed = '';
    for (let i = cleanedStr.length - 1; i >= 0; i--) {
      reversed += cleanedStr[i];
    }
    return cleanedStr === reversed;
  }
  console.log(isPalindrome("racecar")); // Output: true
  console.log(isPalindrome("level")); // Output: true
  console.log(isPalindrome("hello")); // Output: false

  function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); 
    return str === str.split('').reverse().join('');
  }
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
  console.log(isPalindrome("hello")); // false

// Nested Array sum
function sumNestedArray(numbers1) {
    let sum = 0; // Initialize sum
  
    for (let i = 0; i < numbers1.length; i++) { // Loop through main array
      for (let j = 0; j < numbers1[i].length; j++) { // Loop through inner arrays
        sum += numbers1[i][j]; // Add the value to sum
      }
    } 
    return sum;
  }
  const numbers1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
  ];  
  console.log(sumNestedArray(numbers1)); // Output: 45 ✅
  
  function sumNestedArray(numbers) {
    let sum = 0; // Initialize sum
    for (let i = 0; i < numbers.length; i++) { // Loop through main array
      for (let j = 0; j < numbers[i].length; j++) { // Loop through inner arrays
        sum += numbers[i][j]; // Add the value to sum
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
  
// Todo List string 'add' 'delete' 'list' 'quit'
let todo = []; // Make sure the array exists
let input1 = prompt("Enter the commands");
while (input1 !== 'quit') {
  if (input1 === 'add') {
    let item = prompt("Add to list");
    todo.push(item);
    console.log(`"${item}" added to your list.`);
  } else if (input1 === 'delete') {
    let item = prompt("Enter the item name to delete");
    let index = todo.indexOf(item); // Find index of item
    if (index !== -1) { // If item exists in array
      todo.splice(index, 1); // Remove it
      console.log(`"${item}" deleted from your list.`);
    } else {
      console.log(`"${item}" not found in your list.`);
    }
  } else if (input1 === 'list') {
    console.log("***************");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}: ${todo[i]}`);
    }
    console.log("***************");
  } else {
    console.log("Invalid command. Use 'add', 'delete', 'list', or 'quit'.");
  }
  input1 = prompt("Enter the commands"); // Ask again for next command
}
console.log("Quit the program.");



  Challenge 2: Find the Most Frequent Element in an Array
Write a function that finds the most repeated element in an array.

Example Input:
javascript
Copy
Edit
mostFrequent([1, 2, 3, 2, 4, 2, 5, 1, 3, 2]);
Expected Output:
javascript
Copy
Edit
2
💡 Hint: Use an object to count occurrences.

Challenge 3: Remove Duplicates From an Array
Write a function that removes duplicate values from an array.

Example Input:
javascript
Copy
Edit
removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6]);
Expected Output:
javascript
Copy
Edit
[1, 2, 3, 4, 5, 6]
💡 Hint: Use a Set or filter method.

:

🔥 The Tricky One-Liner 🔥
Write a one-liner function that checks if two words are anagrams (contain the same letters in different orders).

Example:

js
Copy
Edit
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
Rules:

No loops (for, while, etc.)
No .map() or .forEach()
Use only string & array methods
Let’s see if you dodge or conquer this! 😏