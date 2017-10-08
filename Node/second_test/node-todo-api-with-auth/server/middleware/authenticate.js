const {
  User
} = require('../model/user');


// to test this add x-auth in yout http header and add 
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWQ5ZjZkYzcwNzAyYTI5MjQ0ZTNiN2MiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTA3NDU2NzMyfQ.syHvghC5eFB9oZ_SwL_VGqZgP7_ZGC28oKvvBdOKBgY
// as its value
const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  User.findByToken(token)
    .then((user) => {
      if (!user) {
        return Promise.reject('This is the e value for catch');
      }

      // modifying the request with found values
      req.user = user;
      req.token = token;
      next();

    })
    .catch((e) => {
      console.log(e);
      res.status(401).send();
    });
};

module.exports = {
  authenticate
};