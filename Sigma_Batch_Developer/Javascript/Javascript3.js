// for(intialization; condition; increment/decrement){} // syntax of for loop
for(let i=1; i<=5; i++){ // for loop to print 1 to 5
    console.log(i); // 1 2 3 4 5
}
/*for(let i=1; i=i+5;){ // for loop to print infinite numbers
    console.log(i); // infinite numbers
}
for(let i=1; i<=5; i--){ // for loop to print 1 to 5
    console.log(i); // infinite numbers
}
for(let i=1; i>0; i++){ // for loop to print infinite numbers
    console.log(i); // infinite numbers
}
*/
for(let i=1; i++ <=5;){ // for loop to print 1 to 5
    console.log(i); // 2 3 4 5 6
}
let n = prompt("Enter a number: "); // prompt to enter a number
n = parseInt(n); // converting string to integer
for(let i=n; i<=n*10; i=i+n){ // for loop to print table of entered number
    console.log(i); // multiplication table of entered number
}
//nested for loop
for(let i=1; i<=3; i++){
    console.log(`outer ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}
//while(condition){} // syntax of while loop
let i = 1; // initializing i to 1
while(i<=5){ // while loop to print 1 to 5
    console.log(i); // 1 2 3 4 5
    i++; // incrementing i
}
while(i<=5){
    if(i==3){
        break; // break statement to exit the loop
    }
    console.log(i); // 1 2
}
//array with for loop
let fruits = ['apple', 'banana', 'mango', 'orange']; // array of fruits
for(let i=0; i<fruits.length; i++){ // for loop to print array elements
    console.log(i,fruits[i]); // apple banana mango orange
}
//nested for loop with nested array
let heroes = [["superman", "batman", "wonderwoman"], ["ironman", "captainamerica", "thor"], ["spiderman", "hulk", "blackwidow"]]; // nested array of heroes
for(let i=0; i<heroes.length; i++){ // outer for loop
    console.log(`outer ${i}`);
    for(let j=0; j<heroes[i].length; j++){ // inner for loop
        console.log(heroes[i][j]); // superman batman wonderwoman ironman captainamerica thor spiderman hulk blackwidow
    }
}
//for (variable of iterable){} // syntax of for of loop
let colors = ['red', 'green', 'blue', 'yellow']; // array of colors
for(let color of colors){ // for of loop to print array elements
    console.log(color); // red green blue yellow
}
let name1 = "javascript"; // string
for(let char of name1){ // for of loop to print string characters
    console.log(char); // j a v a s c r i p t
}
//nested for of loop
let nestedColors = [['red', 'green'], ['blue', 'yellow'], ['pink', 'orange']]; // nested array of colors
for(let colors of nestedColors){ // outer for of loop
    console.log(`outer ${colors}`);
    for(let color of colors){ // inner for of loop
        console.log(color); // red green blue yellow pink orange
    }
}
//todo app
let todos = []; // empty array
let input = prompt("Enter a todo: "); // prompt to enter a todo
while(input !== 'quit'){ // while loop to add todos
    if(input === 'list'){ // if input is list
        console.log("**********");
        for(let i=0; i<todos.length; i++){ // for loop to print todos
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("**********");
    }else if(input === 'delete'){ // if input is delete
        let index = prompt("Enter index to delete: "); // prompt to enter index to delete
        todos.splice(index, 1); // deleting todo
        console.log("Todo deleted");
    }else{
        todos.push(input); // adding todo to array
        console.log("Todo added");
    }
    input = prompt("Enter a todo: "); // prompt to enter a todo
}