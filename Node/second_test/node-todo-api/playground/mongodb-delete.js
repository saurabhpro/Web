// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID //lets you make new Object ID
} = require('mongodb'); //identical to code above


// arg 1 = url to db
// arg 2 = callback to do something
// database name if not there - will be created new
MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, dbObject) => {
    if (error) {
        return console.log('Unable to connect to database server');
    }

    console.log('Connected to MongoDB Server');

    // deleteMany - delete many objects that match the criteria
    dbObject.collection('Todos')
        .deleteMany({
            text: 'Eat Lunch'
        })
        .then((result) => {
            console.log(result);
        })

    // CommandResult {
    //  result: { n: 0, ok: 1 },

    // deleteOne
    dbObject.collection('Todos')
        .deleteOne({
            text: 'Eat Lunch'
        })
        .then((result) => {
            console.log(result);
        })

    //findOneAndDelete - delete with confirm button
    dbObject.collection('Todos')
        .findOneAndDelete({
            completed: false
        })
        .then((result) => {
            console.log(result);
        })


    //test on users
    dbObject.collection('Users').deleteMany({
        name: 'saurabh kuamr'
    });


    dbObject.collection('Users').findOneAndDelete({
            _id: new ObjectID('59d83ba9a5bb79257f6f77a3')
        })
        .then((result) => {
                console.log(JSON.stringify(result, undefined, 2))
            },
            (error) => {
                console.log('Unable to fetch record!', error);
            });
    dbObject.close();
})