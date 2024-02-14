// Function to fetch weather forecast using OpenWeatherMap API
async function getWeatherForecast(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching weather forecast:', error);
    }
}

// Function to display weather forecast
function displayWeatherForecast(city, forecastData) {
    console.log(`Weather forecast for ${city}:`);
    forecastData.list.forEach((item) => {
        const date = new Date(item.dt * 1000);
        const dateString = date.toLocaleDateString();
        const timeString = date.toLocaleTimeString();
        const temperature = item.main.temp;
        const description = item.weather[0].description;
        console.log(`${dateString} ${timeString} - Temperature: ${temperature}°C, Description: ${description}`);
    });
}

// Example usage
const city = 'London'; // Replace 'London' with the city you want to forecast
getWeatherForecast(city)
    .then(forecastData => displayWeatherForecast(city, forecastData))
    .catch(error => console.error('Error:', error));
