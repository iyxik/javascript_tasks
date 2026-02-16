/* Task 1
Create a constructor function `User` that takes `username` and `email` as parameters.
It should create an object with these properties and a method `showInfo` that logs user details.
Instantiate a new user and call `showInfo()`.
*/

function User(username, email) {
    this.username = username;
    this.email = email;

    this.showInfo = function() {
      console.log(`Username: ${this.username}, Email: ${this.email}`);
    };
  }
  
const newUser = new User('Alice', 'alice@gmail.com');
 newUser.showInfo();
  