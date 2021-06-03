const fs = require('fs');

console.time('read12');
const data = fs.readFileSync('file.md'); // blocks here until file is read
console.log(data);

// moreWork(); will run after console.log

function moreWork() {
  console.log(fs.readFileSync('file.md'));
}

console.timeEnd('read12');

/*
Output

Saurabhs-MacBook-Air:blocking-vs-nonblocking saurabhkumar$ node blocking.js
<Buffer 48 65 6c 6c 6f 20 53 61 75 72 61 62 68>
read12: 3.023ms
*/
