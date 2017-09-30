"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('starting app.js');
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes_1 = require("./notes");
const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};
const bodyOptions = {
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
const command = argv._[0];
console.log('Yargs: ', argv);
const notes = new notes_1.Notes();
switch (command) {
    case 'listAll':
        const notesList = notes.listAllNote();
        if (_.isEmpty(notesList)) {
            console.log("No Note Present");
        }
        else {
            console.log(`Printing ${notesList.length} Notes`);
            console.time('for');
            notesList.forEach((note) => notes.printNote(note));
            console.timeEnd('for');
        }
        break;
    case 'add':
        const noteAdded = notes.addNote(argv.title, argv.body);
        if (!noteAdded) {
            console.log('Duplicate Note Title Found');
        }
        else {
            console.log('Added Note');
        }
        break;
    case 'read':
        const note = notes.getThisNote(argv.title);
        _.isEmpty(note) ? 'Note Not Found' : notes.printNote(note);
        break;
    case 'remove':
        const isRemoved = notes.removeThisNote(argv.title);
        const msg = isRemoved ? 'Removed Note' : `Note with Title = ${argv.title} Not Found`;
        console.log(msg);
        break;
    default:
        console.log('Command not recognized');
}
