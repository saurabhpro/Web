```js
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

/*
Output
Saurabhs-MacBook-Air:3_notes-app saurabhkumar$ node app.js add
starting app.js
Starting notes.js
app.js add

Options:
  --version    Show version number                                     [boolean]
  --help       Show help                                               [boolean]
  --title, -t  Title of note                                          [required]
  --body, -b   Body of note                                           [required]

Missing required arguments: title, body
Saurabhs-MacBook-Air:3_notes-app saurabhkumar$ node app.js --help
starting app.js
Starting notes.js
Commands:
  add     Add a new note
  list    List all notes
  read    Read a note
  remove  Remove a note

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
*/
```
