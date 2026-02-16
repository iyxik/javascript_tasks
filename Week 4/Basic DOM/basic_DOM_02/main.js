/*
Use an HTML file with an <input> field, a <button>, and a <ul> list with the ID fruitList.
Write JavaScript to:
- Retrieve the value from the input field when the button is clicked.
- Create a new <li> element and set its text content to the input field's value.
- Append the <li> element to the list.
- Clear the input field after adding the fruit.
*/

const btn = document.getElementById("btn");
const fruitList = document.getElementById("fruitList");

const fruitInput = () => {
  const input = document.getElementById("input");
  const inputValue = input.value;
  const list = document.createElement("li");
  list.textContent = inputValue;
  fruitList.appendChild(list);
  input.value = "";
};
btn.addEventListener("click", fruitInput);
