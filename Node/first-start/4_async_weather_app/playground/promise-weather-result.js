const geocode = require('../geocode/geocode');

const geocodeAddressUsingPromise = (address) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      geocode.geocodeAddress(
        address, //options object
        (error, body) => {
          if (error) {
            reject(error);
          } else if (body) {
            resolve(body);
          }
        }
      );
    }, 500);
  });
};

const f2 = geocodeAddressUsingPromise('12 10 Ashok Nagar, Delhi').then(
  (result) => {
    console.log(JSON.stringify(result, undefined, 4));
  },
  (errorMessage) => {
    console.error('Unable to fetch Weather');
  }
);
