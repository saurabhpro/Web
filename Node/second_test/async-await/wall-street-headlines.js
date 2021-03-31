import pkg  from 'axios';
const {get} = pkg;

const wall_street_journel_api_key = '86cc672b0b774673b11dfd0fb4373fa1';
const feedURL = `https://newsapi.org/v1/articles?source=the-wall-street-journal&sortBy=top&apiKey=${wall_street_journel_api_key}`;

// Main function without using Async/Await
const printProject = () => {
    // Asynchronous function returning a Promise
    const newsFeed = get(feedURL);

    // newsFeed is a Promise object
    newsFeed
        .then((res) => pickFav(res.data))
        .then(print)
        .catch(console.error);
}

// print the random headlines from the response
console.time('random');
printProject();
console.timeEnd('random'); // 0.480ms


// using jQuery - manually returning promises
// function getFeed(url) {
//     return new Promise((resolve, reject) => {
//         $.getJSON(url, (data) => {
//             resolve(data);
//         });
//     });
// }

// Synchronous function returning a Promise
function pickFav(data) {
    const pick = Math.floor(Math.random() * data.articles.length);

    return Promise.resolve(data.articles[pick]);
}

function print(project) {
    console.log(`"${project.title}" - by @WSJ & I ❤️ this project.`);
}


/*
async & await work together to help you write synchronous style of asynchronous code. 
This new feature is built on top of Promises.

async keyword defines that the function is asynchronous.

Specify in your code which functions are asynchronous by adding the async keyword and 
what part of the code will have to await for that Promise to resolve with the await keyword.

Notes:
1. When an async function is called, it returns a Promise.
2. await can be only used inside async context.
3. The await expression pauses the execution and waits for the resolution of returned Promise, and then resumes execution.
*/

// Main function with using Async/Await
const latestHeadline = async (feedUrl) => {
    // Fetch raw feed or JSON feed if using axios with await, since internally await resolves the response form axios
    const response = await get(feedUrl);

    // Convert to JSON - if using axios NO NEED
    // const data = await response.json();
    const articles = response.data.articles;

    // Pick latest
    return Promise.resolve(articles[0]);
}

console.time('latest');
// Get latestHeadline From The Wall Street Journel
const project = latestHeadline(feedURL);
// Print latestHeadline
project.then(print);
console.timeEnd('latest');

