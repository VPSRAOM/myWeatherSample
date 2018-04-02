import {browser, by, element, protractor} from "protractor";
import {WeatherPageObject} from "../pages/submitPage";
import {TableDefinition} from "cucumber";
import {until} from "selenium-webdriver";
import * as assert from "assert";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const {When, Then} = require("cucumber");

const search: WeatherPageObject = new WeatherPageObject();

When(/^I type "(.*?)"$/, async (text) => {
    await search.cityTextBox.sendKeys(text);
});


Then(/^I press the enter key$/, async () => {
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
});


When(/^I type City$/, async (table: TableDefinition) => {
    await table.rows().forEach(element => {
        search.cityTextBox.sendKeys(element.toString());
        // });
    });

});

Then(/^I see application displays 3 hourly weather forecasts$/, async () => {

    await element(by.cssContainingText('.name', 'Tue')).isPresent();
    await element(by.cssContainingText('.name', 'Tue')).click();
    element.all(by.deepCss('.hour')).getText().then(function (gtext) {
        console.log(gtext);

    });

});

Then(/^I see the weather forecast$/, async () => {
    await element(by.cssContainingText('.name', 'Tue')).isPresent();
    await element(by.cssContainingText('.name', 'Tue')).click();
});

When(/^I click I see the weather forecast$/, async () => {
    await element(by.cssContainingText('.name', 'Tue')).isPresent();
    await element(by.cssContainingText('.name', 'Tue')).click();
});

Then(/^I see the weather forecast for five days$/, async () => {
    await element(by.cssContainingText('.name', 'Tue')).isPresent();
    await element(by.cssContainingText('.name', 'Wed')).click();
    element.all(by.deepCss('.name')).count().then(function (count) {
        console.log(count);
        assert.equal(count, '5', 'The val is as expected');
    });

});


When(/^I click I see the weather and I click again the weather forecast is hidden$/, async () => {

    await element(by.cssContainingText('.name', 'Tue')).isPresent();
    await element(by.cssContainingText('.name', 'Tue')).click();
    element.all(by.deepCss('.hour')).count().then(function (count) {
        console.log(count);
    });
    element.all(by.deepCss('.hour')).getText().then(function (gtext) {
        console.log(gtext);

    });
    await element(by.cssContainingText('.name', 'Tue')).click();
    await element(by.cssContainingText('.name', 'Wed')).isPresent();
    await element(by.cssContainingText('.name', 'Wed')).click();
    element.all(by.deepCss('.hour')).count().then(function (count) {
        console.log(count);
    });
    element.all(by.deepCss('.hour')).getText().then(function (gtext) {
        console.log(gtext);


    });
    await element(by.cssContainingText('.name', 'Wed')).click();
    await element(by.cssContainingText('.name', 'Thu')).isPresent();
    await element(by.cssContainingText('.name', 'Thu')).click();
    element.all(by.deepCss('.hour')).count().then(function (count) {
        console.log(count);
    });
    element.all(by.deepCss('.hour')).getText().then(function (gtext) {
        console.log(gtext);

    });
    await element(by.cssContainingText('.name', 'Thu')).click();
    await element(by.cssContainingText('.name', 'Fri')).isPresent();
    await element(by.cssContainingText('.name', 'Fri')).click();
    element.all(by.deepCss('.hour')).count().then(function (count) {
        console.log(count);
    });
    element.all(by.deepCss('.hour')).getText().then(function (gtext) {
        console.log(gtext);

    });
    await element(by.cssContainingText('.name', 'Fri')).click();
    await element(by.cssContainingText('.name', 'Sat')).isPresent();
    await element(by.cssContainingText('.name', 'Sat')).click();
    element.all(by.deepCss('.hour')).count().then(function (count) {
        console.log(count);
    });
    element.all(by.deepCss('.hour')).getText().then(function (gtext) {
        console.log(gtext);

    });
    await element(by.cssContainingText('.name', 'Sat')).click();

});


When(/^I check Daily forecast should summarise the three hour data$/, async () => {

    await element(by.cssContainingText('.name', 'Tue')).isPresent();
    await element(by.cssContainingText('.name', 'Tue')).click();

    // element(by.css('.hour')).getText().then(function (gtext) {
    //     console.log(gtext);
    //
    // });

    // var li = browser.findElement(by.xpath('//*[@id="root"]/div/div[1]/div[2]/div[1]/span[1]/span'));
    //
    // console.log(li.getText());
    //
    // var visibleSpans = element.all(by.css('span'));
    // expect(visibleSpans.count()).assert(1);

    // element.all(by.deepCss('.hour')).count().then(function (count) {
    //     console.log(count);
    //     assert.equal(count, '36', 'The val is as expected');
    // });

    // element.all(by.deepCss('.hour')).get(1).getText().then(function (xdis) {
    //     console.log(xdis);
    //    // assert.equal(xdis, '36', 'The val is as expected');
    // });

    element.all(by.deepCss('.hour')).get(10).getText().then(function (gtext) {
        console.log(gtext);

    });


});





