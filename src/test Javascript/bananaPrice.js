const puppeteer = require("puppeteer");

//LocationIQ for reverse geocoding to get the city name 
//Documentiation: https://locationiq.com/docs
const LoactionIQAPIKey = "pk.c36b5affc8078e76726e5d513ee7d004"; 

//XML path
const numbeoURL = "https://www.numbeo.com/cost-of-living/";
const bananaXMLPath = "/html/body/div[2]/table/tbody/tr[19]/td[2]/span";

async function scrapBananaPrice(city){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(numbeoURL + "/" + city); //Need country too
    await browser.close();
}

navigator.geolocation.getCurrentPosition(position => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    let LocationIQURL = "https://eu1.locationiq.com/v1/reverse.php?key=" + LoactionIQAPIKey + "&lat=" + lat + "&lon=" + lon + "&format=json"; 
    console.log("LocationIQ API request link: " + LocationIQURL);
    fetch(LocationIQURL)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        let city = data.address.city;
        sessionStorage.setItem("city", city); //stored in session storage
        
    })
    .catch(error => {
        console.log("LocationIQ has failed to respond");
    });
});


