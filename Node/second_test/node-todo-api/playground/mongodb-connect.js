// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID, //lets you make new Object ID
} = require('mongodb'); //identical to code above

// es6 destructring
const user = {
  name: 'Saurabh',
  age: 25,
};
const { name } = user; //passes the value of user.name to name;
console.log(name);

let obj = new ObjectID();
console.log('My Object ID', obj);

// arg 1 = url to db
// arg 2 = callback to do something
// database name if not there - will be created new
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, dbObject) => {
  if (error) {
    return console.log('Unable to connect to database server');
  }

  console.log('Connected to MongoDB Server');

  dbObject
    .collection('Todos')
    // insert one record
    .insertOne(
      {
        text: 'Something to do',
        completed: false,
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert todo', error);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );

  // inserted document
  dbObject
    .collection('Users')
    // insert one record
    .insertOne(
      {
        name: 'saurabh kuamr',
        age: 25,
        location: 'Delhi',
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert user', error);
        }

        //JSON .stringify arg3 is the number of spaces for formatting
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(
          'TimeStamp from Object ID: ' +
            JSON.stringify(result.ops[0]._id.getTimestamp())
        );
      }
    );

  dbObject.close();
});
