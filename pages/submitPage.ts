import {$} from "protractor";

export class WeatherPageObject {
    public cityTextBox: any;


    constructor() {
        this.cityTextBox = $("#city");

    }
}
