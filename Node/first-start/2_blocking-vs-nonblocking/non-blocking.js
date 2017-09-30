const fs = require('fs');
console.time('read22');
fs.readFile('file.md', (err, data) => {
    if (err)
        throw err;
    console.log(data);
});

// moreWork(); will run before console.log
function moreWork(){
    console.log(fs.readFileSync('file.md'));
}
console.timeEnd('read22');

/*
 Output
Saurabhs-MacBook-Air:blocking-vs-nonblocking saurabhkumar$ node non-blocking.js
read22: 0.649ms
<Buffer 48 65 6c 6c 6f 20 53 61 75 72 61 62 68>
Saurabhs-MacBook-Air:blocking-vs-nonblocking saurabhkumar$
 */