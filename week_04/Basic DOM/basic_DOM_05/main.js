/*
Create an HTML file with:
- A <button> to change the background color.
- A <input> field for users to enter a color.
- A <p> element where the text color changes based on the input.

Write JavaScript to:
- Change the background color to a random color when the button is clicked.
- Update the paragraph’s text color to match the user’s input valu
*/

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const para = document.getElementById("para");

const changeBackground = () => {
  para.style.backgroundColor = "red";
};
btn.addEventListener("click", changeBackground);

const changeColor = () => {
  const inputValue = input.value;
  para.style.color = inputValue;
};
input.addEventListener("input", changeColor);
