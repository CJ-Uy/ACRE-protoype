let lat = 11.229796172677945
let lon = 124.99143766836897
WEATHER_API_KEY = "7b39e155885385a5e75cc53586b392fb"

/* ----- WEATHER FUNCTIONS ----- */
async function getWeather(lat, lon){
    const weatherAPIUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely&units=metric&appid=" + WEATHER_API_KEY;
    
    const res = await fetch(weatherAPIUrl)
    const txt = await res.txt()
    console.table(res)
    console.table(txt)
}

getWeather(lat,lon)