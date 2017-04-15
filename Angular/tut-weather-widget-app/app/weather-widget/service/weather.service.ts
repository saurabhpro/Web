import { Injectable } from "@angular/core";
import { Jsonp } from "@angular/http";
import { Observable } from "rxjs/Observable";

//directly import from rxjs to only import relevant lib
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

//import constants
import {FORECAST_KEY, FORECAST_ROOT } from "../constants/constants";


//part of service to be available for injectable
@Injectable()
export class WeatherService{ 

    constructor(private jsonp: Jsonp){ }

       getCurrentLocation(): Observable<any> {
        if (navigator.geolocation) {
            return Observable.create(observer => {
                navigator.geolocation.getCurrentPosition(
                    pos => {
                        observer.next(pos);
                    },
                    err => {
                        observer.error(err);
                    });
            });
        } else {
            return Observable.throw("Geolocation is not available");
        }
    }

    getCurrentWeather(lat: number, long: number): Observable<any> {
        const url = FORECAST_ROOT + FORECAST_KEY + "/" + lat + "," + long;
        const queryParams = "?callback=JSONP_CALLBACK";

        return this.jsonp.get(url + queryParams)
            .map(data => data.json())
            .catch(err => {
                console.error("Unable to get weather data - ", err);
                return Observable.throw(err.json());
            });
    }
}



    /*basic version
    getCurrentLocaction() :[number, number]{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                //arg1
                position => {
                    console.log("Current position :", position.coords.latitude, ",",position.coords.longitude);
                    return [position.coords.latitude, position.coords.longitude];
                },
                //arg2
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
    */