"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
console.log('Starting notes.js');
const fs = require('fs');

class Notes {
    constructor() {
        this.printNote = (note) => {
            console.log('---------');
            console.log(`Title: ${note.title}\nBody: ${note.body}`);
        };
        this.fetchNotes = () => {
            try {
                const existingValues = fs.readFileSync('notes-data.json');
                console.log(JSON.parse(existingValues));
                return JSON.parse(existingValues);
            } catch (e) {
                return [];
            }
        };
        this.saveNotes = (notes) => {
            fs.writeFileSync('notes-data.json', JSON.stringify(notes));
        };
        this.addNote = (title, body) => {
            let notes = this.fetchNotes();
            const note = {
                title,
                body
            };
            const duplicateNote = notes.filter((note) => note.title == title);
            if (duplicateNote.length == 0) {
                notes.push(note);
                this.saveNotes(notes);
                return true;
            }
            return false;
        };
        this.removeThisNote = (title) => {
            console.log('Trying to remove note', title);
            const notes = this.fetchNotes();
            const filteredNotes = notes.filter((note) => note.title !== title);
            this.saveNotes(filteredNotes);
            return (notes.length !== filteredNotes.length);
        };
        this.listAllNote = () => {
            console.log('listAllNotes');
            return this.fetchNotes();
        };
        this.getThisNote = (title) => {
            debugger;
            console.log('getting note', title);
            return this.fetchNotes().filter((note) => note.title == title)[0];
        };
    }
}

exports.Notes = Notes;
