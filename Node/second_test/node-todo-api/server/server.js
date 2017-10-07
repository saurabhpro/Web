const express = require('express');
const bodyParser = require('body-parser');

const {
    mongoose
} = require('./db/mongoose-config');
const {
    TodoModel
} = require('./model/todo');


const app = express();

app.use(bodyParser.json());

// post mapping
app.post('/todos', (req, res) => {
    const todo = new TodoModel({
        text: req.body.text
    })

    //console.log(req.body);

    todo.save()
        .then((doc) => {
                console.log('inserted data');
                res.send(doc);
                //defualt status send by express is 200
            },
            (error) => {
                console.log('error inserting data', error);
                res.sendStatus(400).send(error);
            });
});

// get methods
app.get('/todos', (req, res) => {
    TodoModel.find()
        .then((todos) => {
            res.send({
                todos
            });
        }, (e) => {
            res.status(400).send(e);
        });
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = {
    app
};
/*
const todoObj = new TodoModel({
    text: ' hi there ',
    completed: true,
    completedAt: 123
});

ntodoObj.save()
    .then((doc) => {
    console.log('Saved Todo: ', JSON.stringify(doc, undefined, 2));
}, (error) => {
    console.log('This is a problem', error);
});
*/