import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service'
import { Weather } from '../model/weather'
import { WEATHER_COLORS } from '../constants/constants'

declare var Skycons: any;

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styleUrls: ['weather.component.css'],   //make sure its styleUrls<template> and !styles<template>
    providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
    //
    currentLocation: String;
    position: Position;                     //for Observable to fill it
    currentSpeedUnit = "mph";
    currentTemparatureUnit = "fahrenheit";


    //since we have already imported Weather
    weatherData = new Weather(null, null, null, null, null);

    /*
    This is a weird thing right here, as Skycons() is a js file, 
    but it wasn't that popular to have a Type TS file written for it

    so npm install Skycons though gets the .js file, it cannot be registered in the new TS Angular2
    hence use a local js reposiroty and then just to let the TS know its an object

    create global type using 'declare var Skycons: any;'
    */
    icons = new Skycons();

    //flag for checking if the data from darksky has been recieved
    dataReceived = false;

    //get the date and set into the class for exporting
    currentDate = new Date();

    //unused but gets the dependency injection
    constructor(private service: WeatherService) { }

    //override
    ngOnInit(): void {
        this.getCurrentLocation();
        //throw new Error('Method not implemented.');
    }

    refresh(): void {
        this.getCurrentLocation();
        this.currentDate = new Date();
    }

    private getCurrentLocation() {

        this.service.getCurrentLocation()
            .subscribe(position => {
                this.position = position,
                    this.getCurrentWeather();
                this.getLocationName();
            },
            err => console.error(err));
    }

    private getCurrentWeather() {
        this.service.getCurrentWeather(this.position.coords.latitude, this.position.coords.longitude)
            .subscribe(weather => {
                this.weatherData.temp = weather.currently.temperature,
                    this.weatherData.summary = weather.currently.summary,
                    this.weatherData.wind = weather.currently.windSpeed,
                    this.weatherData.humidity = weather.currently.humidity,
                    this.weatherData.icon = weather.currently.icon;
                console.log(this.weatherData);
                this.setIcon();             //call setIcon() from here
                this.dataReceived = true;   //arbitary value to indicate that data arrived 
            },
            err => console.error(err));
    }

    private getLocationName() {
        this.service.getLocationName(this.position.coords.latitude, this.position.coords.longitude)
            .subscribe(location => {
                console.log(location);

                //take a look into how i'm reading the json - also can use ["xyz"] notation instead of .
                this.currentLocation = location.results[0].address_components[5].long_name;
            });
    }

    public toggleUnit() {
        this.toggleSpeedUnit();
        this.toogleTemperatureUnit();
    }

    private toggleSpeedUnit() {
        this.currentSpeedUnit === "kmph" ? this.currentSpeedUnit = "mph" : this.currentSpeedUnit = "kmph";
    }

    private toogleTemperatureUnit() {
        this.currentTemparatureUnit === "celsius" ? this.currentTemparatureUnit = "fahrenheit" : this.currentTemparatureUnit = "celsius";
    }

    private setIcon() {
        this.icons.add("icon", this.weatherData.icon);
        this.icons.play();
    }

    private setStyles(): Object {
        if (this.weatherData.icon) {
            this.icons.color = WEATHER_COLORS[this.weatherData.icon]["color"];
            return WEATHER_COLORS[this.weatherData.icon];
        } else {
            this.icons.color = WEATHER_COLORS["default"]["color"];
            return WEATHER_COLORS["default"];
        }
    }

}