/* 
Initial data:
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

1. Loop through the `teamMembers` array and log each name to the console.  
2. Remove the first member of the array.  
3. Remove the last member of the array.  
4. Add a new member "Alex" to the front of the array.  
5. Append a new member "Linda" to the end of the array.  
6. Create a new array that excludes the first two members, keeping the original array unchanged.  
7. Find the index of "Mike" in the array.  
8. Try to find the index of "Jake" (who is not in the array).  
9. Replace "Mike" with "Carol" and "Bruce" in the same position.  
10. Concatenate "Bob" to the array and create a new array, keeping the original array unchanged.  
11. Copy the entire `teamMembers` array using `slice` and store it in a new variable.  
12. Create a `newMembers` array with `"Tina"` and `"Dean"`, then merge it with `teamMembers` into a new array.  
13. Find all occurrences of "John" in the array and store their positions in a new array.  
14. Transform all names in the array to be uppercase while keeping the original array unchanged.  
15. Sort `teamMembers` in alphabetical order.  
16. Reverse the `teamMembers` array.  
17. Check if at least one member in the array is named "John".  
18. Check if all names in the array have more than three letters. 
*/


let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

teamMembers.forEach(name => console.log(name));

teamMembers.shift();
teamMembers.pop();

teamMembers.unshift('Alex');
teamMembers.push('Linda');

let slicedArray = teamMembers.slice(2);

let mikeIndex = teamMembers.indexOf('Mike');
let jakeIndex = teamMembers.indexOf('Jake');

teamMembers.splice(mikeIndex, 1, 'Carol', 'Bruce');

let newArray = teamMembers.concat('Bob');

let copiedArray = teamMembers.slice();

let newMembers = ['Tina', 'Dean'];
let mergedArray = teamMembers.concat(newMembers);

let johnIndexes = teamMembers
    .map((name, index) => name === 'John' ? index : -1)
    .filter(index => index !== -1);

let uppercasedArray = teamMembers.map(name => name.toUpperCase());

teamMembers.sort();
teamMembers.reverse();

let hasJohn = teamMembers.includes('John');
let allMoreThanThreeLetters = teamMembers.every(name => name.length > 3);
