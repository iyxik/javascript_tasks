/* Task 1
Create a JavaScript object named `student` with properties:
- `name`
- `age`
- `grade`
Convert the object into a JSON string and log it to the console.
*/

const student = {
    Name: 'Tanmay',
    Age: 22,
    Grade: 'S'
}

const convertToJSON = JSON.stringify(student)
console.log(convertToJSON)


/* Task 2
Take the JSON string from Task 1 and convert it back into a JavaScript object.
Log the `name` property of the converted object.
*/

const student = {
    Name: 'Tanmay',
    Age: 22,
    Grade: 'S'
}

const convertToJSON = JSON.stringify(student)
console.log(convertToJSON)
const convertToObject = JSON.parse(convertToJSON)
console.log(convertToObject)
console.log(convertToObject.Name)


/* Task 3
Create an array named `classroom`, where each element is an object representing a student.
Each student object should have properties for `name`, `age`, and `grade`.
Convert the array into a JSON string and log it to the console.
*/

const classroom = [
    {Name: 'Alice', Age: 24, Grade: 4},
    {Name: 'Bob', Age: 27, Grade: 5},
    {Name: 'Charles', Age: 21, Grade: 3},
    {Name: 'Daniel', Age: 26, Grade: 4}
]

const cnvrtClassroom = JSON.stringify(classroom)
console.log(cnvrtClassroom)


/* Task 4
Take the JSON string from Task 3, convert it back into a JavaScript array,
and log the names of all students in the classroom.
*/

const classroom = [
    {Name: 'Alice', Age: 24, Grade: 4},
    {Name: 'Bob', Age: 27, Grade: 5},
    {Name: 'Charles', Age: 21, Grade: 3},
    {Name: 'Daniel', Age: 26, Grade: 4}
]

const cnvrtClassroom = JSON.stringify(classroom)
console.log(cnvrtClassroom)
const againCnvrt = JSON.parse(cnvrtClassroom)
console.log(againCnvrt)
console.log(againCnvrt.Name)


/* Task 5
Create an object named `weatherReport` with the following properties:
- `temperature`
- `humidity`
- `conditions` (e.g., "Sunny", "Rainy")

Convert the object into a JSON string and store it in a variable named `weatherJSON`.
Then, parse the JSON string back into an object and log the `conditions` property.
*/

const weatherReport = {
    temperature: 10,
    humidity: '61%',
    conditions: 'Sunny'
}

const weatherJSON = JSON.stringify(weatherReport)
console.log(weatherJSON)
const weatherParse = JSON.parse(weatherJSON)
console.log(weatherParse)
console.log(weatherParse.conditions)


/* Task 6
Define an array named `movies`, where each movie has:
- `title`
- `director`
- `rating`

Convert this array into a JSON string, then parse it back into a JavaScript object.
Log all movie titles with a rating higher than 8.
*/

const movies = [
    {title: 'Iron Man', director: 'Jon Favreau', rating: 8},
    {title: 'Reservoir Dogs', director: 'Quentin Tarantino', rating: 8.5},
    {title: 'The Martian', director: 'Ridley Scott', rating: 8.5},
    {title: 'Transformers', director: 'Michael Bay', rating: 7.5},
]

const moviesJson = JSON.stringify(movies)
const moviesParse = JSON.parse(moviesJson)
console.log(moviesJson)
console.log(moviesParse)

const higherRating = () => {
    moviesParse.forEach(movieParse => {
        if (movieParse.rating > 8) {
            console.log(movieParse.title)
        }
    })
}
higherRating()


/* Task 7
Write a function `filterHighRatedMovies(jsonString)` that:
- Takes a JSON string representing an array of movie objects.
- Converts it into a JavaScript array.
- Returns a new array containing only movies with a rating higher than 8.
*/

const filterHighRatedMovies = () => {
    const jsonString = '[{"title": "Inception", "rating": 8.8}, {"title": "The Room", "rating": 3.7}, {"title": "The Dark Knight", "rating": 9.0}]'
    const cnvrtArray = JSON.parse(jsonString)
    cnvrtArray.forEach(cnvrt => {
        if (cnvrt.rating > 8) {
            console.log(cnvrt.title)
        }
    })
}
filterHighRatedMovies()


/* Task 8
Define an object named `shoppingCart` with:
- `items` (an array of product objects, each with `name` and `price`)
Convert `shoppingCart` into a JSON string and log it to the console.
*/

const shoppingCart = {
    items: [
        {Name: 'Keyboard', price: 12.99},
        {Name: 'Mouse', price: 7.99},
        {Name: 'Monitor', price: 135},
    ]
}

const convertCart = JSON.stringify(shoppingCart)
console.log(convertCart)


/* Task 9
Write a function `totalCartValue(jsonString)` that:
- Takes a JSON string representing a shopping cart.
- Converts it into a JavaScript object.
- Returns the total price of all items in the cart.
*/

const totalCartValue = () => {
    const jsonString = '{"items":[{"name":"Keyboard","price":12.99},{"name":"Mouse","price":7.99},{"name":"Monitor","price":135}]}'
    const convertObjetc = JSON.parse(jsonString)
    console.log(convertObjetc)
    const totalPrice = convertObjetc.items.reduce((total, item) => total + item.price, 0)
    console.log(totalPrice)
}
totalCartValue()


/* Task 10
Create an object named `gameProgress` with:
- `level`
- `score`
- `livesRemaining`

Convert the object into a JSON string and log it.
Parse the JSON back into an object and update the `score` property by adding 100 points.
Log the updated object.
*/

const gameProgress = {
    level: 1,
    score: 50,
    livesRemaining: 5
}

const convertGame = JSON.stringify(gameProgress)
console.log(convertGame)
const update = JSON.parse(convertGame)
console.log(update)
update.score += 100
console.log(update)