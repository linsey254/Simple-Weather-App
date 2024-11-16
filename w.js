const fakeWeatherData = {
    "New York": {temp: "22°C", condition: "Cloudy", humidity: "65%", precipitation: "5mm", windspeed: "15km/h", winddirection: "NorthWest"},
    "Los Angeles": {temp: "28°C", condition: "Sunny", humidity: "40%", precipitation: "0mm", windspeed: "10km/h", winddirection: "SouthWest"},
    "Chicago": {temp: "18°C", condition: "Windy", humidity: "75%", precipitation: "2mm", windspeed: "20km/h", winddirection: "NorthEast"},
    "Miami": {temp: "30°C", condition: "Humid", humidity: "85%", precipitation: "15mm", windspeed: "12km/h", winddirection: "SouthWest"},
    "San Fransisco": {temp: "20°C", condition: "Rainy", humidity: "70%", precipitation: "1mm", windspeed: "18km/h", winddirection: "West"}

};

document.getElementById("get-weather").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    const weather = fakeWeatherData[city];

    if(weather) {
        document.getElementById("weather-output").classList.remove("hidden");
        document.getElementById("weather-output").innerHTML = `
        <h2>${city}</h2>
        <p>Temperature: ${weather.temp}</p>
        <p>Condition: ${weather.condition}</p>
        <p>Humidity: ${weather.humidity}</p>
        <p>Precipitation: ${weather.precipitation}</p>
        <p>Wind Speed: ${weather.windspeed}</p>
        <p>Wind Direction: ${weather.winddirection}</p>
        `
    } 
    else {
        alert("City not found. Try a different one.");
    }
})