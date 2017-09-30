//require our custom module

console.log('Starting notes.js');

const fs = require('fs');
/*
//console.log(module);    //exports are a object of module object and this module object will be used when used with require
module.exports.age = 26;

module.exports.add = (a , b) => {
    return a + b;
}
*/
const printNote = (note) => {
    console.log('---------');
    console.log(`Title: ${note.title}\nBody: ${note.body}`);
}

const fetchNotes = () => {
    try {
        const existingValues = fs.readFileSync('notes-data.json');
        console.log(JSON.parse(existingValues));
        return JSON.parse(existingValues);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    }

    const duplicateNote = notes.filter(note => note.title == title);
    if (duplicateNote.length == 0) {
        notes.push(note);
        saveNotes(notes);

        return note;
    }
}

const removeThisNote = (title) => {
    console.log('Trying to remove note', title);
    const notes = fetchNotes();

    const filteredNotes = notes.filter(note => note.title !== title);

    //overwrite
    saveNotes(filteredNotes);

    return (notes.length !== filteredNotes.length);

}

const listAllNote = () => {
    console.log('listAllNotes');
    return fetchNotes();
}

const getThisNote = (title) => {
    debugger;
    console.log('getting note', title);
    return fetchNotes().filter(note => note.title == title);
}



module.exports = {
    addNote,
    listAllNote,
    getThisNote,
    removeThisNote,
    printNote
}