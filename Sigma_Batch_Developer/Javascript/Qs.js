// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.
const arr = [1, 2, 3, 4, 5];
const squaredArray = arr.map(num => num ** 2);
const sumOfSquares = squaredArray.reduce((acc, curr) => acc + curr, 0);
const averageOfSquares = sumOfSquares / arr.length;
console.log("Squared Array:", squaredArray);
console.log("Sum of Squares:", sumOfSquares);
console.log("Average of Squares:", averageOfSquares);
// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.map(num => num + 5);
console.log("New Array:", newArray);
// Qs3. Create a new array whose elements are in uppercase of words present in the original array.
const wordsArray = ["apple", "banana", "cherry", "date", "elderberry"];
const uppercaseWordsArray = wordsArray.map(word => word.toUpperCase());
console.log("Uppercase Words Array:", uppercaseWordsArray);
// Qs4.Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.The function should return a new array with the original array values and all of the additional arguments doubled.
const doubleAndReturnArgs = (...args) => {
    const originalArray = args[0];
    const doubledArgs = args.slice(1).map(arg => arg * 2);
    return [...originalArray, ...doubledArgs];
};
console.log(doubleAndReturnArgs([1, 2, 3], 4, 5, 6)); // Output: [1, 2, 3, 8, 10, 12]
// Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const obj1 = {name: "John", age: 30};
const obj2 = {city: "New York", job: "Developer"};
const mergeObjects = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    };
};
console.log(mergeObjects(obj1, obj2)); // Output: {name: "John", age: 30, city: "New York", job: "Developer"}