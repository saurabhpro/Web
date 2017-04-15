import { Component } from '@angular/core';

import { WeatherService } from '../service/weather.service'

@Component({
    moduleId: module.id,
    selector: 'weather-widget',
    templateUrl: 'weather.component.html',
    styles: ['weather.component.css'],
    providers: [WeatherService]
})
export class WeatherComponent {
    position: Position;

    constructor(private service: WeatherService) {
        
        this.service.getCurrentLocation()
        .subscribe(position => {
                this.position = position,
                this.service.getCurrentWeather(this.position.coords.latitude, this.position.coords.longitude)
                    .subscribe(weather => console.log(weather), err => console.error(err));
            },
            err => console.error(err));   
    }
}