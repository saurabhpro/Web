const request = require('request');
const temparatureConverter = require('./tempConv.js');

const getWeather = (lat = 26.9999, long = 76.8888, callback) => {
    //api key = ad0f7fe509d7b71572501bc74fae74b3

    request({
            url: `https://api.darksky.net/forecast/ad0f7fe509d7b71572501bc74fae74b3/${lat},${long}`,
            json: true
        },
        (error, response, body) => {

            if (!error && response.statusCode === 200) {
                callback(undefined, {
                    temparature: temparatureConverter.fToC(body.currently.temperature),
                    apparentTemp: temparatureConverter.fToC(body.currently.apparentTemperature)
                });
            } else {
                callback('Unable to fetch weather.');
            }
        });
}

module.exports.getWeather = getWeather;