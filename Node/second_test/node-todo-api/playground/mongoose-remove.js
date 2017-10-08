const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

// remove all documents from collection
Todo.remove({})
  .then((result) => {
    console.log(result);
  });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// this needs id as ObjectID and we can also provide more arguments 
Todo.findOneAndRemove({
    _id: '57c4610dbb35fcbf6fda1154'
  })
  .then((todo) => {
    console.log(todo);
  });

// we only need to provide the id in string 
// returns null if no id was deleted - hence the response is 200
Todo.findByIdAndRemove('57c4610dbb35fcbf6fda1154')
  .then((todo) => {
    console.log(todo);
  });