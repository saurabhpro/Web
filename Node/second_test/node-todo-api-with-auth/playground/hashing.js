const {
  SHA256
} = require('crypto-js');

const jwt = require('jsonwebtoken');

// checkout the SHA mechanism - always same for a message
var message = 'I am user number 3';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);


// checking the data has changed encryption
var data = {
  id: 4
};
var token = {
  data, //ES6 data: data (from above)
  hash: SHA256(JSON.stringify(data) + 'somesecretkey').toString() // has will be bad if secret is not there HENCE SAFE
}

// test using same id = 4 or different id
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


var resultHash = SHA256(JSON.stringify(token.data) + 'somesecretkey').toString();
if (resultHash === token.hash) {
  console.log('Data was not changed\n');
} else {
  console.log('Data was changed. Do not trust!\n');
}


// the above mechanism is used in jwt

var token = jwt.sign(data, '123abc');   // takes the data -> signs it and returns a token
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);

/*

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNTA3NDQ2MzA3fQ.JgV-5fIwN0ts6SN2-D-qbVCUSOW4eZctYGBCUQBB3FM

// HEADER:ALGORITHM & TOKEN TYPE
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
{
  "alg": "HS256",
  "typ": "JWT"
}

// PAYLOAD:DATA
eyJpZCI6NCwiaWF0IjoxNTA3NDQ2MzA3fQ
{
  "id": 4,
  "iat": 1507446307
}

//VERIFY SIGNATURE
JgV-5fIwN0ts6SN2-D-qbVCUSOW4eZctYGBCUQBB3FM

HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload), 
  
  123abc
)
*/