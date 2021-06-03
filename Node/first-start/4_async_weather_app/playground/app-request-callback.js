const yargs = require('yargs');
const geocode = require('../geocode/geocode');
const weather = require('../weather/weather.js');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address of the user',
      string: true, //always parse as string
    },
  })
  .help()
  .alias('help', 'h').argv;

console.debug(argv);

console.time('req');

const encodedAddress = geocode.geocodeAddress(
  argv.address,
  (errorMsg, results) => {
    //only one of the two will be set so we case use if else
    if (errorMsg) {
      console.error(errorMsg);
    } else {
      console.log(`Address For ${results.Address}`);
      // console.log(JSON.stringify(results, undefined, 4));

      weather.getWeather(
        results.Latitude,
        results.Longitude,
        (error, wresults) => {
          if (error) {
            console.error(error);
          } else {
            //console.log(JSON.stringify(results, undefined, 4));
            console.log(
              `It is ${wresults.temparature} but it feels like ${wresults.apparentTemp}`
            );
          }
        }
      );
    }
  }
);
