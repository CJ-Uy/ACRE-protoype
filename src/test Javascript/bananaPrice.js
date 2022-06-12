//LocationIQ for reverse geocoding to get the city name 

//Documentiation: https://locationiq.com/docs
const LoactionIQAPIKey = "pk.c36b5affc8078e76726e5d513ee7d004"; 

async function main() {
    
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
        let country = data.address.country;
        

        let bananaPriceAPIUrl = "http://localhost:3000/" + country + "/" + city;

        fetch(bananaPriceAPIUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log("Banna Price: " + data.bananaPrice);
            console.log(data);
        })
        .catch(error => {
            console.log("Banana Price failed to fetch");
            console.log(error);
        });

    })
    .catch(error => {
        console.log("LocationIQ has failed to respond");
        console.log(error);
    });
});


