import {WeatherPageObject} from "../pages/submitPage";

const {Then} = require("cucumber");

const search: WeatherPageObject = new WeatherPageObject();

Then(/^I clear the search text$/, async () => {
    await search.cityTextBox.clear();
});
