const asyncOperation = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });
}

const promisesToMake = [asyncOperation(2000), asyncOperation(1000), asyncOperation(5000)];

Promise.all(promisesToMake)
    .then((results) => {
        console.log(results);
        // Promise.all will aggregate the promise results in the same order as we’ve given
        // Array(3) [2000, 1000, 5000]
    })
    .catch((err) => {
        console.log(err);
    });