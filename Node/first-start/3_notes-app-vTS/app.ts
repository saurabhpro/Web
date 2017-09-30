console.log('starting app.js');

const fs = require('fs');

//2 -- require custom js files exported
//const notes = require('./notes.js');

//3 -- npm installed modules
const _ = require('lodash');
const yargs = require('yargs');

import { Note, Notes } from "./notes";

type HelpObject = { describe: string, demand: boolean, alias?: string }

const titleOptions: HelpObject = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions: HelpObject = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions,
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;


//const argv = yargs.argv;
const command: string = argv._[0];

console.log('Yargs: ', argv);

const notes = new Notes();

switch (command) {
    case 'listAll':
        const notesList: Array<Note> = notes.listAllNote();

        if (_.isEmpty(notesList)) {
            console.log("No Note Present");
        } else {
            console.log(`Printing ${notesList.length} Notes`);
            console.time('for');

            /*for(let note of notesList){
                notes.printNote(note);
            }*/ //for: 0.541ms

            notesList.forEach((note: Note) => notes.printNote(note)); //for: 0.395ms
            console.timeEnd('for');
        }
        break;

    case 'add':
        const noteAdded: boolean = notes.addNote(argv.title, argv.body);
        if (!noteAdded) {
            console.log('Duplicate Note Title Found');
        } else {
            console.log('Added Note');
            //notes.printNote(noteAdded);
        }
        break;

    case 'read':
        const note: Note = notes.getThisNote(argv.title);
        _.isEmpty(note) ? 'Note Not Found' : notes.printNote(note);
        break;

    case 'remove':
        const isRemoved: boolean = notes.removeThisNote(argv.title);

        const msg = isRemoved ? 'Removed Note' : `Note with Title = ${argv.title} Not Found`;
        console.log(msg);
        break;

    default:
        console.log('Command not recognized');
}