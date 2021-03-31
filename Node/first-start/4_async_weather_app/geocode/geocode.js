const request = require('request');

const geocodeAddress = (argv, callback) => {
    //tested with $ node app.js -a 'sector 16-c dwarka delhi'
    const encodedAddress = encodeURIComponent(argv);
    const google_map_api_key = "AIzaSyDaTjVaaecu53uX9SFSZJiRdx7lhTCG9Kw";
    // console.info(encodedAddress);

    request(
      {
        // update 2.0 - https://toolset.com/course-lesson/creating-a-maps-api-key/
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${google_map_api_key}`,
        json: true, //data coming in form of json [useful steps]//creates request header content type for our application
      } //options object
        , (error, response, body) => {
            console.time(`RESPONSE TIME`)

            if (error) {
                //bad links r no network
                callback('Unable to connect to Google Servers');
            } else if (body.status === 'ZERO_RESULTS') {
                //error is not filled if you asked for wrong address, hence we need this case
                callback('Unable to find that Address');
            } else if (body.status === 'OK') {

                callback(undefined, {
                    Address: body.results[0].formatted_address,
                    Latitude: body.results[0].geometry.location.lat,
                    Longitude: body.results[0].geometry.location.lng
                });
            }

            console.timeEnd(`RESPONSE TIME`)
        } //data function called when data comes
    );
}

module.exports = {
    geocodeAddress
}