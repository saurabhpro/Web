const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose-config');
const { TodoModel } = require('./models/todo');
const { User } = require('./models/user');

var { authenticate } = require('./middleware/authenticate');

//setting up the port so that it can be dwployed on heroku
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// post mapping
app.post('/todos', authenticate, (req, res) => {
  const todo = new TodoModel({
    text: req.body.text,
    _creator: req.user._id,
  });

  //console.log(req.body);

  todo.save().then(
    (doc) => {
      console.log('inserted data');
      res.send(doc);
      //defualt status send by express is 200
    },
    (error) => {
      console.log('error inserting data', error);
      res.sendStatus(400).send(error);
    }
  );
});

// get methods
app.get('/todos', authenticate, (req, res) => {
  TodoModel.find({
    _creator: req.user._id, // all the todos for currenly logged in user
  }).then(
    (todos) => {
      res.send({
        todos,
      });
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});

// fetch individual item
app.get('/todos/:id', authenticate, (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  // TodoModel.findById(id)
  TodoModel.findOne({
    _id: id,
    _creator: req.user._id,
  })
    .then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({
        todo /* ES6 syntax -> if { title: title } we can send {title} automatically */,
      });
    })
    .catch((e) => {
      res.status(400).send();
    });
});

// delete specific documents
app.delete('/todos/:id', authenticate, (req, res) => {
  const id = req.params.id;

  // validate the ObjectID
  if (!ObjectID.isValid(id)) {
    return res.status(404).send(); // send only 404 with no data
  }

  //TodoModel.findByIdAndRemove(id)
  TodoModel.findOneAndRemove({
    _id: id,
    _creator: req.user._id,
  })
    .then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({
        todo,
      }); // by default sennds 200 as status
    })
    .catch((e) => {
      res.status(400).send(); // Bad Request = 400
    });
});

// update a resourse using PATCH
app.patch('/todos/:id', authenticate, (req, res) => {
  const id = req.params.id;

  // pick (from , pick_these ) and returns a new object with picked properties
  const body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed /*true*/) {
    body.completedAt = new Date().getTime(); // returns js timestamp from jan 1 1970 (-ve means past)
  } else {
    body.completed = false;
    body.completedAt = null; // will be removed from db
  }

  //  TodoModel.findByIdAndUpdate(id, {
  TodoModel.findOneAndUpdate(
    {
      _id: id,
      _creator: req.user._id,
    },
    {
      $set: body, // object having updated values
    },
    {
      new: true, // similar to returnOriginal = false to be processed further
    }
  )
    .then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({
        todo,
      });
    })
    .catch((e) => {
      res.status(400).send();
    });
});

// POST /users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user
    .save()
    .then(() => {
      return user.generateAuthToken();
    })
    .then((token) => {
      console.log('Added : ' + user.email);
      res.header('x-auth', token).send(user); // add x-auth token to head
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// without the x-auth in request header - this will return error
app.get('/users/me', authenticate, (req, res) => {
  // if next() isn't called - the callback won't execute
  res.send(req.user);
});

// POST Route /user/login {email, password} to find user in mongodb users collection
app.post('/users/login', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  //var user = new User(body);

  User.findByCredentials(body.email, body.password)
    .then((user) => {
      return user.generateAuthToken().then((token) => {
        console.log('Added : ' + user.email);
        res.header('x-auth', token).send(user); // add x-auth token to head
      });
      //res.send(user);
    })
    .catch((e) => {
      res.status(400).send();
    });
});

app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(
    () => {
      res.status(200).send();
    },
    () => {
      res.status(400).send();
    }
  );
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {
  app,
};
/*
const todoObj = new TodoModel({
    text: ' hi there ',
    completed: true,
    completedAt: 123
});

todoObj.save()
    .then((doc) => {
    console.log('Saved Todo: ', JSON.stringify(doc, undefined, 2));
}, (error) => {
    console.log('This is a problem', error);
});
*/
