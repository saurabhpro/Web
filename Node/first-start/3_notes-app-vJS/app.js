console.log('starting app.js');

const fs = require('fs');

//2 -- require custom js files exported
const notes = require('./notes.js');

//3 -- npm installed modules
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't',
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b',
};
const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions,
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .help().argv;

//const argv = yargs.argv;
const command = argv._[0];

console.log('Yargs: ', argv);

switch (command) {
  case 'listAll':
    const notesList = notes.listAllNote();

    if (_.isEmpty(notesList)) {
      console.error('No Note Present');
    } else {
      console.log(`Printing ${notesList.length} Notes`);
      console.time('for');

      /*for(let note of notesList){
                notes.printNote(note);
            }*/ //for: 0.541ms

      notesList.forEach((note) => notes.printNote(note)); //for: 0.395ms
      console.timeEnd('for');
    }
    break;

  case 'add':
    const noteAdded = notes.addNote(argv.title, argv.body);
    if (_.isUndefined(noteAdded)) {
      console.error('Duplicate Note Title Found');
    } else {
      console.info('Added Note');
      notes.printNote(noteAdded);
    }
    break;

  case 'read':
    const note = notes.getThisNote(argv.title);
    if (_.isEmpty(note)) console.error('Note Not Found');
    else notes.printNote(note[0]);
    break;

  case 'remove':
    const isRemoved = notes.removeThisNote(argv.title);

    if (isRemoved) console.info('Removed Note');
    else console.error(`Note with Title = ${argv.title} Not Found`);
    break;

  default:
    console.error('Command not recognized');
}
