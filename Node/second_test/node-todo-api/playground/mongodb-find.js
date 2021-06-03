// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID, //lets you make new Object ID
} = require('mongodb'); //identical to code above

// arg 1 = url to db
// arg 2 = callback to do something
// database name if not there - will be created new
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, dbObject) => {
  if (error) {
    return console.log('Unable to connect to database server');
  }

  console.log('Connected to MongoDB Server');

  // get all the data
  dbObject
    .collection('Todos')
    .find()
    .toArray()
    .then(
      (result) => {
        console.log('Get all data');
        console.log(JSON.stringify(result, undefined, 2));
      },
      (error) => {
        console.log('Unable to fetch record!', error);
      }
    );

  // get filtered data
  dbObject
    .collection('Todos')
    .find({
      completed: false,
    })
    .toArray()
    .then(
      (result) => {
        console.log('get filtered data');
        console.log(JSON.stringify(result, undefined, 2));
      },
      (error) => {
        console.log('Unable to fetch record!', error);
      }
    );

  // get filtered data by id
  dbObject
    .collection('Todos')
    .find({
      _id: new ObjectID('59d5e13c384e707d87611892'), //string won't work as _id is not a string but ObjectID type
    })
    .toArray()
    .then(
      (result) => {
        console.log('get filtered data');
        console.log(JSON.stringify(result, undefined, 2));
      },
      (error) => {
        console.log('Unable to fetch record!', error);
      }
    );

  // get count of the cursors
  dbObject
    .collection('Todos')
    .find()
    .count() //method that is followed by a promise
    .then(
      (count) => {
        console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(count, undefined, 2));
      },
      (error) => {
        console.log('Unable to fetch record!', error);
      }
    );

  // test on users
  dbObject
    .collection('Users')
    .find({
      name: 'saurabh kumar',
    })
    .toArray() //method that is followed by a promise
    .then(
      (docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
      },
      (error) => {
        console.log('Unable to fetch record!', error);
      }
    );
  dbObject.close();
});
