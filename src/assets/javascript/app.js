const HOST_NAME = "http://localhost:3000/";

const WEATHER_CONDITIONS_API_KEY_REQUEST =
  HOST_NAME + "weather_conditions_api_key";
const LOCATION_IQ_QPI_KEY_REQUEST = HOST_NAME + "location_iq_api_key";

/* ----- MAIN FUNCTION ----- */
navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  console.log(`Lat: ${lat}   Lon: ${lon}`);
  getWeather(lat, lon);
  getBananaPrice(lat, lon);
}, showError);
/* ----- END OF MAIN FUNCTION ----- */

/* ----- WEATHER FUNCTIONS ----- */
async function getWeather(lat, lon) {
  fetch(WEATHER_CONDITIONS_API_KEY_REQUEST)
    .then((res) => {
      return res.json();
    })
    .then((key) => {
      let weatherAPIUrl =
        "https://api.openweathermap.org/data/2.5/onecall?lat=" +
        lat +
        "&lon=" +
        lon +
        "&exclude=minutely&units=metric&appid=" +
        key.WEATHER_API_KEY;
      fetch(weatherAPIUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //Weather Conditions Saved
          let wCon = new weatherInfo(data); //weather conditions

          console.log(wCon);
        })
        .catch(function (error) {
          console.log("OpenWeather API has failed to reply");
        });
    })
    .catch(function (error) {
      console.log("Backend API not reached");
    });
}

//We need these cause if the value of something in OpenWeather API is 0 they dont add the property (rain and alerts)
function checkForRain(obj) {
  if ("rain" in obj) return obj.rain; //rain in mm
  else return 0;
}
function checkForAlerts(obj) {
  if ("alerts" in obj) return true;
  else return false;
}

//Weather Conditions Constructor ---> Add unit conversions
function weatherInfo(data) {
  this.data = data; //literally everything

  this.timeOfCalc = new Date(data.current.dt * 1000 + data.timezone_offset); //Time set to local time
  this.timezone = data.timezone;
  //Reminder to get current weather data.current.weather[0].main;
}

//Shows errors regarding GeoLocate
function showError(error) {
  //Location of Charles' house (maybe change it)
  alert("GeoLocation error has occured");
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.");
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.");
      break;
  }
}

/* WEATHER UNITS
main.temp = Kelvin
main.pressure = hPa
main.humidity = %

visibility = meter (max: 10km)

wind.speed = meter/sec
wind.gust = meter/sec (gusts are sudden bursts of wind speed approx 20 secs)

clouds.all = cloudiness  %

rain.1h = rain voulem in the last hour in mm
rain.3h = same as ^ but for last 3 hours

snow = no need

dt = date and time of calculation on UTC
*/

/* ----- END OF WEATHER FUNCTIONS ----- */

/* ----- BANANA PRICE FUNCTIONS ----- */
async function getBananaPrice(lat, lon) {
  fetch(LOCATION_IQ_QPI_KEY_REQUEST)
    .then((res) => {
      return res.json();
    })
    .then((key) => {
      let LocationIQURL =
        "https://eu1.locationiq.com/v1/reverse.php?key=" +
        key.LOCATION_IQ_API_KEY +
        "&lat=" +
        lat +
        "&lon=" +
        lon +
        "&format=json";
      console.log("LocationIQ API request link: " + LocationIQURL);
      fetch(LocationIQURL)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let city = data.address.city;
          let country = data.address.country;

          let bananaPriceAPIUrl =
            HOST_NAME + "banana/price/" + country + "/" + city;
          console.log("Banana price API request: " + bananaPriceAPIUrl);

          fetch(bananaPriceAPIUrl)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data);
              sessionStorage.setItem("bananaPrice", data.bananaPrice);
            })
            .catch((error) => {
              console.log("Banana Price failed to fetch");
              console.log(error);
            });
        })
        .catch((error) => {
          console.log("LocationIQ has failed to respond");
          console.log(error);
        });
    });
}
/* ----- END OF BANANA PRICE FUNCTIONS ----- */
