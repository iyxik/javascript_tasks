'use strict';

/* Task 1: Fix the Array Copying  
Fix the function to correctly clone `fruits`.  
*/

const fruits = ["apple", "banana", "orange"];
const newFruits = fruits;
newFruits.push("grape");
console.log(fruits);


/* Task 2: Fix Array Merging  
Correctly merge the `oldTasks` and `newTasks` arrays.  
*/

const oldTasks = ["task1", "task2"];
const newTasks = ["task3", "task4"];
const allTasks = oldTasks.concat(newTasks)
console.log(allTasks);


/* Task 3: Fix Object Merging  
Combine `defaultSettings` with `userSettings`.  
*/

const defaultSettings = { theme: "light", fontSize: 14 };
const userSettings = { theme: "dark" };
const finalSettings = { defaultSettings, userSettings };
console.log(finalSettings);


/* Task 4: Fix Function with Rest Operator  
Make the function work for any number of numbers.  
*/


function sumNumbers(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers(5, 2, 4));


/* Task 5: Fix Rest Destructuring  
Extract `title` and collect the remaining properties into `extraInfo`.  
*/

const book = { title: "JavaScript Guide", pages: 400, author: "John Doe" };
const { title, ...extraInfo } = book;
console.log(title, extraInfo);



/* Task 6: Create Your Own
Write a function that receives multiple numbers and returns their average using the rest operator.
Test with: `average(10, 20, 30, 40)`. Expected output: `25`.
*/

// Write your code here


function average(...numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}
console.log(average(10, 20, 30, 40));