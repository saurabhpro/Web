# GraphQL with node js and express

## Resources
- https://www.youtube.com/watch?v=ZQL7tL2S0oQ
- https://github.com/WebDevSimplified/Learn-GraphQL/blob/master/server.js

## Level 1
```js
// input
query FirstMessage {
  message
}

// output
{
  "data": {
    "message": "Hello World"
  }
}
```