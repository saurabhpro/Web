# GraphQL with node js and express

## Resources
- https://www.youtube.com/watch?v=ZQL7tL2S0oQ
- https://github.com/WebDevSimplified/Learn-GraphQL/blob/master/server.js

## Level 1 - GraphQL Hello World
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

## Level 2 - GraphQL Return Books (note: we are not displaying the books author name)
```js
// input
{
  books {
    name
    authorId
  }
}


// output
{
  "data": {
    "books": [
      {
        "name": "Harry Potter and the Chamber of Secrets",
        "authorId": 1
      },
      {
        "name": "Harry Potter and the Prisoner of Azkaban",
        "authorId": 1
      },
      {
        "name": "Harry Potter and the Goblet of Fire",
        "authorId": 1
      },
      {
        "name": "The Fellowship of the Ring",
        "authorId": 2
      },
      {
        "name": "The Two Towers",
        "authorId": 2
      },
      {
        "name": "The Return of the King",
        "authorId": 2
      },
      {
        "name": "The Way of Shadows",
        "authorId": 3
      },
      {
        "name": "Beyond the Shadows",
        "authorId": 3
      }
    ]
  }
}
```