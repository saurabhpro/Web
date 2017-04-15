import { Injectable } from "@angular/core";
import { Jsonp, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

//directly import from rxjs to only import relevant lib
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

//import constants
import { FORECAST_KEY, FORECAST_ROOT, GOOGLEMAPS_KEY, GOOGLEMAPS_ROOT } from "../constants/constants";


//part of service to be available for injectable
@Injectable()
export class WeatherService {

    constructor(private jsonp: Jsonp, private http: Http) { }

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

        //some api's dont allow get request from cross domains, so jsonp is used as workaround
        return this.jsonp.get(url + queryParams)
            .map(data => data.json())
            .catch(err => {
                console.error("Unable to get weather data - ", err);
                return Observable.throw(err.json());
            });
    }

    getLocationName(lat: number, long: number): Observable<any> {
        const url = GOOGLEMAPS_ROOT;
        const queryParams = "?latlng=" + lat + "," + long + "&key=" + GOOGLEMAPS_KEY;


        //on google api's http works because they have Cross Origin Resouce Sharing enabled
        return this.http.get(url + queryParams)
            .map(loc => loc.json())
            .catch(err => {
                console.error("Unable to get location - ", err);
                return Observable.throw(err);
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