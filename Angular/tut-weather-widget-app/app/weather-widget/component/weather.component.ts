import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../service/weather.service'
import { Weather } from '../model/weather'
import { WEATHER_COLORS } from '../constants/constants'

declare var Skycons: any;

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styles: ['weather.component.css'],
    providers: [WeatherService]
})
export class WeatherComponent implements OnInit {
    currentLocation: String;
    position: Position;
    weatherData = new Weather(null, null, null, null, null);

    currentSpeedUnit = "mph";
    currentTemparatureUnit = "fahrenheit";

    icons = new Skycons();

    dataReceived = false;

    currentDate = new Date();

    constructor(private service: WeatherService) { }


    //override
    ngOnInit(): void {
        this.getCurrentLocation();
        //throw new Error('Method not implemented.');
    }

    getCurrentLocation() {

        this.service.getCurrentLocation()
            .subscribe(position => {
                this.position = position,
                    this.getCurrentWeather();
                this.getLocationName();
            },
            err => console.error(err));
    }

    getCurrentWeather() {
        this.service.getCurrentWeather(this.position.coords.latitude, this.position.coords.longitude)
            .subscribe(weather => {
                this.weatherData.temp = weather.currently.temperature,
                    this.weatherData.summary = weather.currently.summary,
                    this.weatherData.wind = weather.currently.windSpeed,
                    this.weatherData.humidity = weather.currently.humidity,
                    this.weatherData.icon = weather.currently.icon;
                console.log(this.weatherData);
                this.setIcon();
                this.dataReceived = true;   //arbitary value to indicate that data arrived 
            },
            err => console.error(err));
    }

    getLocationName() {
        this.service.getLocationName(this.position.coords.latitude, this.position.coords.longitude)
            .subscribe(location => {
                console.log(location);
                this.currentLocation = location.results[0].address_components[5].long_name;
            });
    }

    toggleUnit() {
        this.toggleSpeedUnit();
        this.toogleTemperatureUnit();
    }

    toggleSpeedUnit() {
        this.currentSpeedUnit === "kph" ? this.currentSpeedUnit = "mph" : this.currentSpeedUnit = "kph";
    }

    toogleTemperatureUnit() {
        this.currentTemparatureUnit === "celsius" ? this.currentTemparatureUnit = "fahrenheit" : this.currentTemparatureUnit = "celsius";
    }

    setIcon() {
        this.icons.add("icon", this.weatherData.icon);
        this.icons.play();
    }

    setStyles(): Object {
        if(this.weatherData.icon) {
            this.icons.color = WEATHER_COLORS[this.weatherData.icon]["color"];
            return WEATHER_COLORS[this.weatherData.icon];
        } else {
            this.icons.color = WEATHER_COLORS["default"]["color"];
            return WEATHER_COLORS["default"];
        }
    }

}