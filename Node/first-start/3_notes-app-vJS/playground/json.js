// const obj = {
//     name: 'Saurabh'
// }

// const nameStringify = JSON.stringify(obj);
// console.log(typeof nameStringify);
// console.log(nameStringify);
// //$ node playground/json.js
// //string
// //{"name":"Saurabh"}

// const personString = `{"name":"Saurabh", "age":"26"}`;
// const personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

const originalNote = {
  title: 'Hello',
  body: 'Saurabh',
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const readObjString = fs.readFileSync('notes.json');
//console.log(readObjString);
const readNoteObj = JSON.parse(readNoteObjString);
console.log(typeof readNoteObj, readNoteObj.title);
