const yargs = require('yargs');
const temparatureConverter = require('./weather/tempConv.js');
const axios = require('axios');

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

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl)
    .then(
        (response) => {
            if (response.data.status === 'ZERO_RESULTS') {
                throw new Error('Unable to find that location');
            }

            const latitude = response.data.results[0].geometry.location.lat;
            const longitude = response.data.results[0].geometry.location.lng;
            const weatherUrl = `https://api.darksky.net/forecast/ad0f7fe509d7b71572501bc74fae74b3/${latitude},${longitude}`;

            console.log(response.data.results[0].formatted_address);

            return axios.get(weatherUrl);
        }
    )
    .then(
        (response) => {
            const temparature = temparatureConverter.fToC(response.data.currently.temperature);
            const apparentTemp = temparatureConverter.fToC(response.data.currently.apparentTemperature);

            console.log(`It is ${temparature} but it feels like ${apparentTemp}`);
        }
    )
    .catch(
        (e) => {
            if (e.code === 'ENOTFOUND') {
                console.error('Unable to connect to API Servers');
            } else {
                console.error(e);
            }
        }
    )