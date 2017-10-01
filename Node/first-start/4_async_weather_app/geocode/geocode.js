const request = require('request');

const geocodeAddress = (argv, callback) => {
    //tested with $ node app.js -a 'sector 16-c dwarka delhi'
    const encodedAddress = encodeURIComponent(argv);
    //console.info(encodedAddress);

    request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true //data coming in form of json [useful steps]//creates request header content type for our application
        } //options object
        , (error, response, body) => {
            
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

            console.timeEnd('req');
        } //data function called when data comes
    );
}

module.exports = {
    geocodeAddress
}