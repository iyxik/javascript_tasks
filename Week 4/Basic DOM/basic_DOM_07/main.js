/* 
Create an HTML file with a button and a counter display.
Write JavaScript to count and display the number of times the button is clicked. 
*/

const btn = document.getElementById("btn");
const para = document.getElementById("para");

let count = 0;
const counter = () => {
  para.textContent = `Click: ${count}`;
  count++;
};
btn.addEventListener("click", counter);
