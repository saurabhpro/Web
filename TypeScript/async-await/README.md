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