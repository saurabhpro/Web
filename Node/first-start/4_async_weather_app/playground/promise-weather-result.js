const request = require('request');

const geocodeAddressUsingPromise = (address) => {
    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                //tested with $ node app.js -a 'sector 16-c dwarka delhi'
                const encodedAddress = encodeURIComponent(address);
                //console.info(encodedAddress);

                request({
                        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
                        json: true //data coming in form of json [useful steps]//creates request header content type for our application
                    } //options object
                    , (error, response, body) => {

                        if (error) {
                            //bad links r no network
                            reject('Unable to connect to Google Servers');
                        } else if (body.status === 'ZERO_RESULTS') {
                            //error is not filled if you asked for wrong address, hence we need this case
                            reject('Unable to find that Address');
                        } else if (body.status === 'OK') {

                            resolve({
                                Address: body.results[0].formatted_address,
                                Latitude: body.results[0].geometry.location.lat,
                                Longitude: body.results[0].geometry.location.lng
                            });
                        }
                    })
            }, 500);
    })
}

const f2 = geocodeAddressUsingPromise('12 10 Ashok Nagar, Delhi').then(
    (result) => {
        console.log(JSON.stringify(result, undefined, 4));
    },
    (errorMessage) => {
        console.error('Unable to fetch Weather');
    }
)