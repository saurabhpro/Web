//require our custom module


console.log('Starting notes.js');

const fs = require('fs');

export interface Note {
    title: string,
    body: string
}

type fnWithNoArgs = () => Array<Note>;

export class Notes {

    constructor() {
    }

    printNote = (note: Note) => {
        console.log('---------');
        console.log(`Title: ${note.title}\nBody: ${note.body}`);
    }

    private fetchNotes: fnWithNoArgs = (): Array<Note> => {
        try {
            const existingValues = fs.readFileSync('notes-data.json');
            console.log(JSON.parse(existingValues));
            return JSON.parse(existingValues);
        } catch (e) {
            return [];
        }
    }

    private saveNotes = (notes: Array<Note>): void => {
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }

    addNote = (title: string, body: string): boolean => {
        let notes = this.fetchNotes();
        const note = {
            title,
            body
        }

        const duplicateNote = notes.filter((note: Note) => note.title == title);
        if (duplicateNote.length == 0) {
            notes.push(note);
            this.saveNotes(notes);

            return true;
        }
        return false;
    }

    removeThisNote = (title: string): boolean => {
        console.log('Trying to remove note', title);
        const notes = this.fetchNotes();

        const filteredNotes = notes.filter((note: Note) => note.title !== title);

        //overwrite
        this.saveNotes(filteredNotes);

        return (notes.length !== filteredNotes.length);

    }

    listAllNote = (): Array<Note> => {
        console.log('listAllNotes');
        return this.fetchNotes();
    }

    getThisNote = (title: string): Note => {
        debugger;
        console.log('getting note', title);
        return this.fetchNotes().filter((note: Note) => note.title == title)[0];
    }

}
