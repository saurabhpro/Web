import fetch from 'node-fetch';

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done!'), 1000);
});

// resolve runs the first function in .then
promise.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console.log(error) // doesn't run
);

/* got print first 
Promise ready
Error
*/
new Promise((resolve, reject) => {
  throw new Error('error');
})
  .finally(() => console.log('Promise ready'))
  .catch((err) => console.log(err.name)); // <-- .catch handles the error object

////////////////////////////////
// individual promises execution - no chainings, they don’t pass the result to each other; instead they process it independently.
////////////////////////////////
promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

promise.then((result) => {
  console.log(result); // 1
  return result * 2;
});

promise.then((result) => {
  console.log(result); // 1
  return result * 2;
});

promise.then((result) => {
  console.log(result); // 1
  return result * 2;
});

////////////////////////////////
// chained promises execution - the result is passed through the chain of .then handlers
////////////////////////////////
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then((result) => {
    // (**)
    console.log(result); // 1
    return result * 2;
  })
  .then((result) => {
    // (***)
    console.log(result); // 2
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 4
    return result * 2;
  });

////////////////////////////////
// we want many promises to execute in parallel and wait until all of them are ready.
////////////////////////////////

let names = ['iliakan', 'remy', 'jeresig', 'saurabhpro'];

let requests = names.map((name) =>
  fetch(`https://api.github.com/users/${name}`)
);

Promise.all(requests)
  .then((responses) => {
    // all responses are resolved successfully
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`); // shows 200 for every url
    }

    return responses;
  })
  // map array of responses into an array of response.json() to read their content
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  // all JSON answers are parsed: "users" is the array of them
  .then((users) => users.forEach((user) => console.log(user.name)));
