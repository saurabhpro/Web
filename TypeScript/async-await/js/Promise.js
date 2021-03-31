"use strict";
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
Promise.all([p1, p2, p3]).then(values => {
    console.log(values);
});

function serialAsyncMap(collection, fn) {
    let results = [];
    let promise = Promise.resolve();
    for (let item of collection) {
        promise.then(() => fn(item))
            .then(result => results.push(result));
    }
    return promise.then(() => results);
}


const resolvedProm = Promise.resolve(33);
const thenProm = resolvedProm.then(function (value) {
    console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
    return value;
});
console.log(thenProm);
setTimeout(function () {
    console.log(thenProm);
});


const promis = Promise.resolve([1, 2, 3]);
promis.then(function (v) {
    console.log(v[0]);
});
Promise.reject(new Error('fail'))
    .then(function (error) {
    }, function (error) {
        console.log(error);
    });


const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
const p = Promise.race(resolvedPromisesArray);
console.log(p);
setTimeout(function () {
    console.log('the stack is now empty');
    console.log(p);
});
