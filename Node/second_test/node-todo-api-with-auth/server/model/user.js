const mongoose = require('mongoose');
const validator = require('validator');


const jwt = require('jsonwebtoken');
const _ = require('lodash');


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      //validator: validator.isEmail, //or 
      validator: value => validator.isEmail(value),
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
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
  var token = jwt.sign({
    _id: user._id.toHexString(),
    access
  }, 'abc123').toString();

  user.tokens.push({
    access,
    token
  });

  return user.save()
    .then(() => {
      return token;
    });
};

UserSchema.statics.findByToken = function (token) {

  // model method are called with this stored as a local variable
  const User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch (e) {
    // return new Promise ((resolve, reject) => {
    //   reject();
    // });
    return Promise.reject();
  }

  // findOne is from mongoose
  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

var User = mongoose.model('User', UserSchema);

module.exports = {
  User
}