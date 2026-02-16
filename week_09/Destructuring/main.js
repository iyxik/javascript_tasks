'use strict';

/* Task 1: Fix the Employee Destructuring  
Extract `name` and `position` from the employee object.  
*/

const employee = { name: "Sarah", position: "Manager", department: "HR" };
const { fullName, jobTitle } = employee;
console.log(fullName, jobTitle)


/* Task 2: Fix the Array Destructuring  
Extract the first two colors from the colors array.  
*/

const colors = ["red", "blue", "green", "yellow"];
const {primary, secondary} = colors;
console.log(primary, secondary);


/* Task 3: Fix Nested Destructuring  
Extract `username` and `email` from the user object.  
*/


const user = {
    id: 101,
    details: { username: "john_doe", email: "john@example.com" },
};

const { details } = user;
console.log(username, email);



/* Task 4: Add Default Values  
Modify the function so that if `role` is missing, it defaults to `"guest"`.  
*/


function getUserInfo(user) {
    const { name, role } = user;
    console.log(`${name} - ${role}`);
}
getUserInfo({ name: "Alice" });


/* Task 5: Fix Function Parameters  
Fix the function so it correctly destructures `name` and `age`.  
*/

function introduce(person) {
    console.log(`${name} is ${age} years old.`);
}

introduce({ name: "Emma", age: 28 });


/* Task 6: Create Your Own
Write a function that receives a `car` object and logs the `brand` and `year`.
Test with `{ brand: "Toyota", year: 2020 }`.
*/

// Write your code here


function logCarDetails(car) {
    const { brand, year } = car;
    console.log(`Brand: ${brand}, Year: ${year}`);
}
const car = { brand: "Toyota", year: 2020 };
logCarDetails(car);
