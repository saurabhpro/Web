console.log('starting app.js');

//require() ->  //tells node to load all the content of fs module functionality from node library and store them in fs

//1 -- require Node library Modules
//fs means File System Module
const fs = require('fs');
//os Operating System
const os = require('os');

//2 -- require custom js files exported
const notes = require('./notes.js');

//3 -- npm installed modules
const _ = require('lodash'); //same module name as in package.json
//first searches local directory then the node_modules
//lodash is a common utility module
// _ is popular way of writing lodash variable

/*
Option 1 -> with warnings
// fs.appendFile('greetings.md', 'Hello World');

//Option 2 - adding a callback which executes on sucess or error 
fs.appendFile('greetings.md', 'Hello World', function(error) {
    if(error){
        console.log('Unable to write file');
    }
});
*/

//load OS data
// let user = os.userInfo();
// //console.log(user);

// //Option 3 - without warnings
// fs.appendFileSync('greetings.md', `Hello ${user.username}! You are ${notes.age}`); //no third argument!!!

var result = notes.addNote();
console.log(result);

var sumResult = notes.add(5, 9);
console.log(sumResult);

//testing lodash
//console.log('Hi is String = '+ _.isString("Hi"));
const filteredArray = _.uniq(['Saurabh', 1, 'Saurabh', 2, 3, 1, 4]);
console.log(filteredArray);

//read command passed during node app.js x x
//this is stored in "process" object
const command = process.argv[2];
console.log('Command: ' + command);
console.log(process.argv);

//$ node app.js remove--title = "secrets"
/*
this shows output as
[ '/usr/local/bin/node',
  '/Users/saurabhkumar/GitHub/Node/first-start/3_notes-app/app.js',
  'remove',
  '--title=secrets' ]

  but key value this way is too complex
  */

//sings yargs

const argv = yargs.argv;
notes.addNote(argv.title, argv.body);
const command = argv._[0];

//$ node app.js add --title helo --body "Yo Sup"
/*
starting app.js
Starting notes.js
Yargs:  { _: [ 'add' ],
  help: false,
  version: false,
  title: 'helo',
  body: 'Yo Sup',
  '$0': 'app.js' }
adding note to our list
addNote with title helo Yo Sup
*/
