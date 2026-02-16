/* 
Write a function named getDayName:
Take a parameter day.
Use a switch statement to:
Return the name of the day (1 = "Monday", 2 = "Tuesday", etc.).
Use default to return "Invalid day" for invalid values.
Call the function with valid and invalid day numbers. 
*/

const getDayName = (day) => {
  if (day == 1) {
    return "Monday";
  } else if (day == 2) {
    return "Tuesday";
  } else if (day == 3) {
    return "Wednesday";
  } else if (day == 4) {
    return "Thursday";
  } else if (day == 5) {
    return "Friday";
  } else if (day == 6) {
    return "Saturday";
  } else if (day == 7) {
    return "Sunday";
  } else {
    return "Invalid day";
  }
};
console.log(getDayName(1));
console.log(getDayName(2));
console.log(getDayName(3));
console.log(getDayName(4));
console.log(getDayName(5));
console.log(getDayName(6));
console.log(getDayName(7));
console.log(getDayName(8));
