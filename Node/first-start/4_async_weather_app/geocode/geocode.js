const axios = require('axios');
const propertiesReader = require('properties-reader');
const properties = propertiesReader('./dev.properties');

const geocodeAddress = (argv, callback) => {
  //tested with $ node app.js -a 'sector 16-c dwarka delhi'
  const encodedAddress = encodeURIComponent(argv);
  const google_map_api_key = properties.get('main.api_key');
  console.info(encodedAddress);

  axios(
    // update 2.0 - https://toolset.com/course-lesson/creating-a-maps-api-key/
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${google_map_api_key}`
  )
    .then(
      (response) => {
        console.time(`RESPONSE TIME`);

        if (response.data.status === 'ZERO_RESULTS') {
          //error is not filled if you asked for wrong address, hence we need this case
          callback('Unable to find that Address');
        } else if (response.data.status === 'OK') {
          callback(undefined, {
            Address: response.data.results[0].formatted_address,
            Latitude: response.data.results[0].geometry.location.lat,
            Longitude: response.data.results[0].geometry.location.lng,
          });
        }

        console.timeEnd(`RESPONSE TIME`);
      } //data function called when data comes
    )
    .catch((e) => {
      //bad links r no network
      callback('Unable to connect to Google Servers');
    });
};

module.exports = {
  geocodeAddress,
};
