const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose-config');
const { TodoModel } = require('../server/model/todo');

var id = '59d86598566b1f126e6d08d6';

if (!ObjectID.isValid(id)) {
  console.log('ID not valid');
}

TodoModel.find({
  _id: id,
}).then((todos) => {
  console.log('Todos', todos);
});

TodoModel.findOne({
  _id: id,
}).then((todo) => {
  console.log('Todo', todo);
});

TodoModel.findById(id)
  .then((todo) => {
    if (!todo) {
      return console.log('Id not found');
    }
    console.log('Todo By Id', todo);
  })
  .catch((e) => console.log(e));
