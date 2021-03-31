```js

/* () => {
    return new Promise((resolve, reject)=>{
        resolve('Mike');
    })
}*/


const getStatusAlt = async(userId) => {
    //if we throw Error we are basically rejecting
    return new Error('Im rejected');
    return 'Mike';
}

// console.log(getStatusAlt());        // prints = Promise { 'Mike' }

// hence we can chain then to it
getStatusAlt().then((user) => {
    console.log(user);
}).catch((err) => {
    console.log(err);
})
```

await should only be used inside async


```js
// headlines
saurabh.kumar@C02D70TBMD6N async-await % node wall-street-headlines.js
random: 0.601ms
latest: 0.16ms
"NCAA Pressed by Supreme Court Justices on Athletes’ Compensation" - by @WSJ & I ❤️ this project.
"Meme Stocks, NFTs, Tech Rotation Dominate Crazy Quarter on Wall Street" - by @WSJ & I ❤️ this project.

// currency
saurabh.kumar@C02D70TBMD6N async-await % node currency-convert.js     
1000 from EUR is 85923.74 in INR. 
INR can be used in countries: Bhutan, India, Zimbabwe 
cnv: 1.596s

// promise
saurabh.kumar@C02D70TBMD6N async-await % node app-promises.js    
Jessica has a 100% in the class
```