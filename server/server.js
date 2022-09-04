const cors = require("cors");
const puppeteer = require("puppeteer");
const express = require("express");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

let bananaPrice;

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") }); //this path may change depending one where this file is

const ONE_CALL_WEATHER_API_KEY = process.env.ONE_CALL_WEATHER_API_KEY;
const HISTORY_WEATHER_API_KEY = process.env.HISTORY_WEATHER_API_KEY;
const LOCATION_IQ_API_KEY = process.env.LOCATION_IQ_API_KEY;

// app.get("/", async (req, res) => {
//     res.send("Hello World");
// });
app.get("/weather_conditions_api_key", (req, res) => {
  res.json({ ONE_CALL_WEATHER_API_KEY: ONE_CALL_WEATHER_API_KEY });
});

app.get("/weather_conditions_api_key", (req, res) => {
  res.json({ HISTORY_WEATHER_API_KEY: HISTORY_WEATHER_API_KEY });
});

app.get("/location_iq_api_key", (req, res) => {
  res.json({ LOCATION_IQ_API_KEY: LOCATION_IQ_API_KEY });
});

app.get("/banana/price/:country/:city", getBananaPrice, (req, res) => {
  console.log(bananaPrice);
  res.json({ bananaPrice: bananaPrice });
});

/* ----- MIDDLEWARE ----- */
//Getting the banana price
async function getBananaPrice(req, res, next) {
  let country = req.params.country;
  let city = req.params.city;

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  let NUMBEO = "https://www.numbeo.com/cost-of-living/in/";

  //Numbero banan price set to local
  await page.goto(NUMBEO + city + "-" + country);

  bananaPrice = await page.evaluate(() => {
    let price = document.querySelector(
      ".data_wide_table > tbody:nth-child(1) > tr:nth-child(19) > td:nth-child(2) > span:nth-child(1)"
    );
    return price ? price.innerHTML : "not found";
  });

  if (bananaPrice == "not found") {
    await page.goto(NUMBEO + city);
    bananaPrice = await page.evaluate(() => {
      let price = document.querySelector(
        ".data_wide_table > tbody:nth-child(1) > tr:nth-child(19) > td:nth-child(2) > span:nth-child(1)"
      );
      return price ? price.innerHTML : "No data retrieved from NUMBEO        "; //Spaces so i dont need to make a new conditional for splicing
    });
  }

  await browser.close();

  bananaPrice = bananaPrice.slice(0, bananaPrice.length - 8);
  next();
}

/* LISTENING TO PORT 3000 */

app.listen(3000, () => console.log("Server is now online!"));

/* LISTENING TO PORT 3000 */
