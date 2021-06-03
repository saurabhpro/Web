const mongoose = require('mongoose');
const validator = require('validator');

const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      //validator: validator.isEmail, //or
      validator: (value) => validator.isEmail(value),
      message: '{VALUE} is not a valid email',
    },
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  tokens: [
    {
      access: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// {
//   email: 'andrew@example.com',
//   password: 'adpsofijasdfmpoijwerew',
//   tokens: [{
//     access: 'auth',
//     token: 'poijasdpfoimasdpfjiweproijwer'
//   }]
// }

// override what exactly is send back to client when mongoose object is sent as JSON
// without it - token / password etc will be sent
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  return _.pick(userObject, ['_id', 'email']);
};

// generate auth token and then pusk it in DB
UserSchema.methods.generateAuthToken = function () {
  const user = this;
  var access = 'auth';
  var token = jwt
    .sign(
      {
        _id: user._id.toHexString(),
        access,
      },
      process.env.JWT_SECRET
    )
    .toString();

  user.tokens.push({
    access,
    token,
  });

  return user.save().then(() => {
    return token;
  });
};

UserSchema.statics.findByToken = function (token) {
  // model method are called with this stored as a local variable
  const User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    // return new Promise ((resolve, reject) => {
    //   reject();
    // });
    return Promise.reject();
  }

  // findOne is from mongoose
  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth',
  });
};

// pre defines methods that will be called at the beginning
UserSchema.pre('save', function (next) {
  const user = this;

  if (user.isModified('password')) {
    // gensalt  for user.password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        // hash password
        user.password = hash;
        console.log('Bcrypt has: ' + hash);

        //call next()
        next();
      });
    });
  } else {
    next();
  }
});

// statics are the methods that can be called directly using the User exports
UserSchema.statics.findByCredentials = function (email, password) {
  const User = this;

  return User.findOne({
    email,
  }).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      // use bcrypt.compare to compare the user.password and compare
      bcrypt.compare(password, user.password, (err, res) => {
        // res = true/false

        console.log(res);
        if (res) resolve(user);
        else reject(); // sends a 400 back
      });
    });
  });
};

// note methods defined the methods to be used on this schema
UserSchema.methods.removeToken = function (token) {
  //lets you remove items from array
  const user = this;

  return user.update({
    $pull: {
      tokens: {
        token,
      },
    }, // the entire object is removed from
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = {
  User,
};
