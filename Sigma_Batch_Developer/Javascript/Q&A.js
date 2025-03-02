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

// Write a function that finds the most repeated element in an array.
function mostFrequent(arr) {
  const count = {}; // Object to store the frequency of each element
  let maxCount = 0; // Variable to store the maximum frequency
  let maxElement; // Variable to store the element with the maximum frequency
  // Count the occurrences of each element
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    // Update the element with the maximum frequency
    if (count[num] > maxCount) {
      maxCount = count[num];
      maxElement = num;
    }
  }
  return maxElement;
}
console.log(mostFrequent([1, 2, 3, 2, 4, 2, 5, 1, 3, 2])); // Output: 2

function mostFrequent(arr) {
  const count = {};
  let maxCount = 0;
  let maxElements = [];
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxCount) {
      maxCount = count[num];
      maxElements = [num]; // Reset with new max element
    } else if (count[num] === maxCount) {
      maxElements.push(num); // Add if same max count
    }
  }
  return maxElements.length === 1 ? maxElements[0] : maxElements;
}
console.log(mostFrequent([1, 2, 3, 2, 4, 2, 5, 1, 3, 1])); // Output: [2, 1]

// Write a function that removes duplicate values from an array.
function removeDuplicates(arr) {
  return [...new Set(arr)]; // Convert to Set to remove duplicates
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6])); // Output: [1, 2, 3, 4, 5, 6] 
// Set is an object that stores unique values of any type.
// Set is faster (better performance for large arrays).

function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index); // Filter unique values
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 6, 6])); // Output: [1, 2, 3, 4, 5, 6] 
// The filter method creates a new array with elements that pass the test implemented by the provided function.
// filter() works without Set but is slower (since indexOf checks the array multiple times).

// Write a one-liner function that checks if two words are anagrams (contain the same letters in different orders).
const isAnagram = (str1, str2) => [...str1].sort().join('') === [...str2].sort().join('');
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false