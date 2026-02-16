/* Task 7
Create an object `weatherApp` with a method `fetchWeather(city)`.
Use `fetch` to get weather data from an API and display it in an HTML element.
(API: OpenWeather or any free weather API)
*/


const weatherApp = {
    apiKey: '9e915b61c791f18fd3e8913a9dcf5250',

    fetchWeather: function() {
        const city = document.getElementById('city').value;
        
        if (!city) {
            alert("Please enter a city name!");
            return;
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&       units=metric`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.displayWeather(data))
            .catch(error => {
                console.error('Error fetching weather data:', error);
                document.getElementById('weather-result').innerHTML = 'Error fetching weather data.';
            });
    },

    displayWeather: function(data) {
        if (data.cod !== 200) {
            document.getElementById('weather-result').innerHTML = 'City not found or invalid API key.';
            return;
        }

        const weatherInfo = `
            <h3>Weather in ${data.name}, ${data.sys.country}</h3>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weather-result').innerHTML = weatherInfo;
    }
};
