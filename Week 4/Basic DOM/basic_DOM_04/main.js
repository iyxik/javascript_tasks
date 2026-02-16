/*
Create an HTML file with a <p> element and a button.
Write JavaScript to toggle the visibility of the paragraph each time the button is clicked.
 */

const btn = document.getElementById("btn");
const paraVisibility = () => {
  const para = document.getElementById("para");
  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
};
btn.addEventListener("click", paraVisibility);
