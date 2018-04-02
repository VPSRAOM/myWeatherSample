import {browser} from "protractor";
import {WeatherPageObject} from "../pages/submitPage";

const {Given} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: WeatherPageObject = new WeatherPageObject();

Given(/^I opened the app$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("5 Weather Forecast");
});
