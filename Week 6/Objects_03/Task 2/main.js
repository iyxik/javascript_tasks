/* Task 2
Modify Task 1: Use an ES6 `class` instead of a constructor function to define `User`.
Add a method `changeEmail(newEmail)` that updates the user's email.
*/

class User {
    constructor(username, email) {
        this.username = username
        this.email = email
    }
    showInfo() {
        console.log(`Username: ${this.username}, Email: ${this.email}`)
    }
}
const newInfo = new User('Alice', 'alice23@gmail.com')
newInfo.showInfo()