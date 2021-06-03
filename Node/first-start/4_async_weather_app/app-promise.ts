const yargs = require('yargs');
const temparatureConverter = require('./weather/tempConv');
const axios = require('axios');

//additional types
import {AxiosResponse, AxiosPromise} from 'axios';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address of the user',
            string: true //always parse as string
        },
    })
    .help().alias('help', 'h')
    .argv;

console.debug(argv);

console.time('req');

const google_map_api_key =  "<get your key from: https://console.cloud.google.com/apis/credentials?project=weather-api-demo-309319>";
const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${google_map_api_key}`;

axios.get(geocodeUrl)
    .then((response: AxiosResponse): AxiosPromise | never => {
            if (response.data.status === 'ZERO_RESULTS') {
                throw new Error('Unable to find that location');    //return type will be never
            }

            const latitude = response.data.results[0].geometry.location.lat;
            const longitude = response.data.results[0].geometry.location.lng;
            const weatherUrl = `https://api.darksky.net/forecast/ad0f7fe509d7b71572501bc74fae74b3/${latitude},${longitude}`;

            console.log(response.data.results[0].formatted_address);

            return axios.get(weatherUrl);
        }
    )
    .then((response: AxiosResponse): void => {
            const temparature = temparatureConverter.fToC(response.data.currently.temperature);
            const apparentTemp = temparatureConverter.fToC(response.data.currently.apparentTemperature);

            console.log(`It is ${temparature} but it feels like ${apparentTemp}`);
        }
    )
    .catch((e: Error | any): void => {
            if (e.code === 'ENOTFOUND') {
                console.error('Unable to connect to API Servers');
            } else {
                console.error(e);
            }
        }
    )