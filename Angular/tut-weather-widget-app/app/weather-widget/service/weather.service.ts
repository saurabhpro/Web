import { Injectable } from "@angular/core";

import {FORECAST_KEY, FORECAST_ROOT } from "../constants/constants";
@Injectable()
export class WeatherService{ 
    getCurrentLocaction() :[number, number]{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log("Current position :", position.coords.latitude, ",",position.coords.longitude);
                    return [position.coords.latitude, position.coords.longitude];
                },
                err =>{
                    console.log("Unable to get location", err.message);
                }
            )
        }
        else{
            console.log("Geolocation not available");
            return [0,0];
        }
    }
}

//the first two line will always be part of service to be available to be injectable