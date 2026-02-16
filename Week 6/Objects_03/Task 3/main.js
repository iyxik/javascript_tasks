/* Task 3
Create an object `theme` with properties `name` (light or dark) and `isActive`.
Add a button in HTML. When clicked, toggle the theme between light and dark, updating the `isActive` property.
*/

const theme = {
    Name: 'light',
    isActive: true
}

const btn = document.getElementById('btn')

const themeActivate = () => {
    if (theme.Name == 'light') {
        theme.Name = 'dark'
        theme.isActive = false
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }
    else {
        theme.Name = 'light'
        theme.isActive = true
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
}
btn.addEventListener('click', themeActivate)