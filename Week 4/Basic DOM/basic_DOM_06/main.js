/* 
Create a form with a required name and email field.
Write JavaScript to:
- Prevent form submission if either field is empty.
- Display an error message if fields are missing. 
*/

const form = document.getElementById("form");

form.addEventListener("submit", function () {
  const name = document.getElementById("name").value;
  const mail = document.getElementById("mail").value;
  if (!name || !mail) {
    alert("Please fill all the fields");
  } else {
    alert("Form submitted!");
  }
});
