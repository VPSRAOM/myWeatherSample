


### myWeather Project Setup Guide   

### Features
* No typings.json or typings folder, they have been replaced by better **'@types'** modules in package.json.
* ts-node(typescript execution environment for node) in cucumberOpts. 
* All scripts written with > Typescript2.0 & Cucumber2.0.
* Neat folder structures with transpiled js files in separate output folder.
* Page Object design pattern implementation.
* Extensive hooks implemented for BeforeFeature, AfterScenarios etc.
* Screenshots on failure feature scenarios.


### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Chrome or Firefox browsers installed.

3.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
   npm install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

* First step is to fire up the selenium server which could be done in many ways,  **webdriver-manager** proves very handy for this.The below command should download the **chrome & gecko driver** binaries locally for you!

```
npm run webdriver-update
``` 

* Then you should start your selenium server!
```
npm run webdriver-start
```

* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```

* Now just run the test command which launches the Chrome Browser and runs the scripts.
```
npm test
```

#### Writing Features
```
@WeatherScenario
  Scenario: Get forecast for added location Aberdeen
    Given I opened the app
    Then I clear the search text
    When I type "Aberdeen"
    When I press the enter key
    Then I see the weather forecast
```
#### Writing Step Definitions
    
```
import {browser} from "protractor";
import {WeatherPageObject} from "../pages/submitPage";

const {Given} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: WeatherPageObject = new WeatherPageObject();

Given(/^I opened the app$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("5 Weather Forecast");
});

```

#### Writing Page Objects
```
import {browser} from "protractor";
import {WeatherPageObject} from "../pages/submitPage";

const {Given} = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const search: WeatherPageObject = new WeatherPageObject();

Given(/^I opened the app$/, async () => {
    await expect(browser.getTitle()).to.eventually.equal("5 Weather Forecast");
});

```
#### Cucumber Hooks
Following method takes screenshot on failure of each scenario
```
After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
});
```
#### CucumberOpts Tags
Following configuration shows to call specific tags from feature files
```
cucumberOpts: {
    compiler: "ts:ts-node/register",
    format: "json:./reports/json/cucumber_report.json",
    require: ["../../stepdefinitions/*.ts", "../../support/*.ts"],
    strict: true,
    tags: "@WeatherScenario",
},
```
#### HTML Reports
Currently this project has been integrated with [cucumber-html-reporter], which is generated in the `reports` folder when you run `npm test`.
They can be customized according to user's specific needs.



