/**
 * The Promise.all() method returns a single Promise that resolves when all of the promises 
 * in the iterable argument have resolved or when the iterable argument contains no promises. 
 * It rejects with the reason of the first promise that rejects.
 */
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // [3, 1337, "foo"] 
});


function serialAsyncMap(collection: Array<number>, fn: any) {

    let results: Array<number> = [];
    let promise: Promise<void> = Promise.resolve();

    for (let item of collection) {
        promise.then(() => fn(item))
            .then(result => results.push(result));
    }

    return promise.then(() => results);
}

// using a resolved promise, the 'then' block will be triggered instantly, but its handlers will be triggered asynchronously as demonstrated by the console.logs
const resolvedProm = Promise.resolve(33);

const thenProm = resolvedProm.then(
    function (value) {
        console.log("this gets called after the end of the main stack. the value received and returned is: " + value);
        return value;
    });
// instantly logging the value of thenProm
console.log(thenProm);

// using setTimeout we can postpone the execution of a function to the moment the stack is empty
setTimeout(function () {
    console.log(thenProm);
});


const promis = Promise.resolve([1, 2, 3]);
promis.then(function (v) {
    console.log(v[0]); // 1
});

Promise.reject(new Error('fail'))
    .then(function (error) {
        // not called
    }, function (error) {
        console.log(error); // Stacktrace
    });


// we are passing as argument an array of promises that are already resolved,
// to trigger Promise.race as soon as possible
const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.race(resolvedPromisesArray);
// immediately logging the value of p
console.log(p);

// using setTimeout we can execute code after the stack is empty
setTimeout(function(){
    console.log('the stack is now empty');
    console.log(p);
});


/*
function urlPromiseGenerator(encodedLongURI: string) {
    return new Promise((resolve, reject) => {
        request({
            url: 'https://api-ssl.bitly.com/v3/shorten?access_token=ACCESS_TOKEN5&longUrl=' + encodedLongURI
        },
            function (err: any, res: any) {
                if (err)
                    reject(err);

                resolve(JSON.parse(res.body).data.url);
            })
    });
}

var arrayOfMemes = ["https://www.youtube.com/watch?v=y6120QOlsfU", "https://www.youtube.com/watch?v=gy1B3agGNxw", "https://www.youtube.com/watch?v=ZZ5LpwO-An4", "https://www.youtube.com/watch?v=o0u4M6vppCI"];

var promiseArray: Promise<{}>[] = [];

arrayOfMemes.map((meme) => { // Map is exactly the same as for each and I could interchange both if I wanted to 
    var memePromise = urlPromiseGenerator(meme);
    promiseArray.push(memePromise);
});

Promise.all(promiseArray).then((smallLinkToMeme) => { // Doesn't continue until each meme in the promise array has been requested and received
    console.log(smallLinkToMeme) // Returns all of the links memes
});
*/

