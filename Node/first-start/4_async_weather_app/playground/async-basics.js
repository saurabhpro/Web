console.log('Starting App');

setTimeout(
    () => {
        console.log('first callback after two seconds');
    }, 2000
);

setTimeout(
    () => {
        console.log('second callback');
    }, 0
);

console.log('Sucessfuly completed');

/*
Output
$ node async.js
Starting App
Sucessfuly completed
second callback
first callback after two seconds
*/