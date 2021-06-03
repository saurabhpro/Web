```js

// basics callback
saurabh.kumar@C02D70TBMD6N 4_async_weather_app % node playground/callbacks.js
{ id: 31, name: 'Vikram' }

saurabh.kumar@C02D70TBMD6N 4_async_weather_app % node playground/async-basics.js
Starting App
Sucessfuly completed
second callback
first callback after two seconds

// promise callback
saurabh.kumar@C02D70TBMD6N 4_async_weather_app % node playground/promise
fn 1 sample with .then( + , ?)
Result of 5 + 6 =  11

fn 2 where we see catch()
E2  this is bad

fn 3 where we see chained Promises with problem when first then() is havin reject()
E3  this is bad
Result should be 44 =>  undefined

fn 4 where we see chained Promises with common catch()
E4  this is bad
P: 1.515s

// weather - using geocoding api https://console.cloud.google.com/apis/library?filter=category:maps&project=weather-api-demo-309319&folder&organizationId
saurabh.kumar@C02D70TBMD6N 4_async_weather_app % node playground/promise-weather-result.js
RESPONSE TIME: 0.162ms
{
    "Address": "12, 10, Block 52, Ashok Nagar, Delhi, 110018, India",
    "Latitude": 28.6348792,
    "Longitude": 77.1024709
}

// weather - using geocoding api & temprature conv checked the following
// weather/** api
// geocode/** api
saurabh.kumar@C02D70TBMD6N 4_async_weather_app % node playground/app-request-callback.js --address=dwarka,delhi
{
  _: [],
  version: false,
  help: false,
  h: false,
  address: 'dwarka,delhi',
  a: 'dwarka,delhi',
  '$0': 'playground/app-request-callback.js'
}

Address For Dwarka, New Delhi, Delhi, India
RESPONSE TIME: 0.906ms
It is 23.39°C but it feels like 23.39°C

```
