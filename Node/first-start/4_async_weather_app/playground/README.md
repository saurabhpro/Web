in chrome type this
(https://maps.googleapis.com/maps/api/geocode/json?address=12 10 ashok nagar delhi)

automatically makes to

https://maps.googleapis.com/maps/api/geocode/json?address=12%2010%20ashok%20nagar%20delhi

if you want to search for stupid addressess like

https://maps.googleapis.com/maps/api/geocode/json?address=0XX0000

```json
{
    results: [ ],
    status: "ZERO_RESULTS"
}
```

is returned. Note that this is not an error in terms of web, since it has returned something

in js use
https://www.npmjs.com/package/request

## request (to , results)

```js

var request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

//SECOND ARG FOR request
(error, response, body) => {
  console.log(JSON.stringify(body //the complete body from the response object (inc html page etc)
    , undefined //so that we can provide 3rd arg
    , 1 //how many spaces to indent (can be either 2 or '  ')
  ));
}
```

## To Convert the String address to encoded string for url

```c
$ node
> encodeURIComponent('12 10 ashok agar delhi')
'12%2010%20ashok%20agar%20delhi'
> decodeURIComponent('Saurabh%20Kumar');
'Saurabh Kumar'
>
```
