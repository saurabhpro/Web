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

## Level 3 - GraphQL Return Books with the books author name)
```js
// input
{
  books {
    name
    authorId
    author {
      name
    }
  }
}



// output
{
  "data": {
    "books": [
      {
        "name": "Harry Potter and the Chamber of Secrets",
        "authorId": 1,
        "author": {
          "name": "J. K. Rowling"
        }
      },
      {
        "name": "Harry Potter and the Prisoner of Azkaban",
        "authorId": 1,
        "author": {
          "name": "J. K. Rowling"
        }
      }
    ]
  }
}

// on authours
{
  authors {
    name
    books {
      name
    }
  }
}

{
  "data": {
    "authors": [
      {
        "name": "J. K. Rowling",
        "books": [
          {
            "name": "Harry Potter and the Chamber of Secrets"
          },
          {
            "name": "Harry Potter and the Prisoner of Azkaban"
          },
          {
            "name": "Harry Potter and the Goblet of Fire"
          }
        ]
      },
      {
        "name": "J. R. R. Tolkien",
        "books": [
          {
            "name": "The Fellowship of the Ring"
          },
          {
            "name": "The Two Towers"
          },
          {
            "name": "The Return of the King"
          }
        ]
      },
      {
        "name": "Brent Weeks",
        "books": [
          {
            "name": "The Way of Shadows"
          },
          {
            "name": "Beyond the Shadows"
          }
        ]
      }
    ]
  }
}
```

## Level 3: Find books by id
```js
{
  book(id: 1) {
    name
    author{
      name
    }
  }
}

{
  "data": {
    "book": {
      "name": "Harry Potter and the Chamber of Secrets",
      "author": {
        "name": "J. K. Rowling"
      }
    }
  }
}
```