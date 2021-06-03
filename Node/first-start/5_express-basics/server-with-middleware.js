const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

//setting port dynamically
const port = process.env.PORT || 3000;

var app = express();

//to support partials in web page -
hbs.registerPartials(__dirname + '/views/partials');

//the default directory for express tempates in /views
app.set('view engine', 'hbs');

//app.use is how we call middlewares
// order is how things progress

app.use(
  (
    req,
    res,
    next /*this is how you will tell the system that the middleware has finished*/
  ) => {
    //if not call to next() system will be hangged since it doesn't khnow if the application finished

    //basic logger as a middleare
    var now = new Date().toLocaleString();
    var log = `${now} : ${req.method} ${req.url}`;
    console.log(log);

    //write the lod to a file
    fs.appendFile('server.log', log + '\n', (err) => {
      if (err) {
        console.error('Unable to append to Server.log');
      }
    });

    next();
  }
);

// //middleware for having a site wide maintaince view
// app.use((req, res, next) => {
//   res.render('maintainance.hbs');
// })

//to load static pages
//__dirname = base director absolute path -> 5_express-basics
app.use(express.static(__dirname + '/public'));

//registering hbs helpers which can clean out our send data
hbs.registerHelper('getCuurentYear', () => {
  return new Date().getUTCFullYear();
});

//registering hbs helpers which accepts argument
hbs.registerHelper('getTextInCaps', (text) => {
  return text.toUpperCase();
});

//home url mapping
app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  // res.send(
  //   //send json object automatically changes the content-type in response
  //   {
  //     name: 'Andrew',
  //     likes: [
  //       'Biking',
  //       'Cities'
  //     ]
  //   });

  res.render('home.hbs', {
    pageTitle: 'Home Page',
    //currentYear: new Date().getUTCFullYear(),
    welcomeMsg: 'Welcome to the jungle',
  });
});

app.get('/about', (req, res) => {
  //res.send('About Page');
  res.render(
    'about.hbs',
    //optional argument to send data to be used in hbs template
    {
      pageTitle: 'About Page',
      //currentYear: new Date().getUTCFullYear() -> since we are using helpers
    }
  );
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request',
  });
});

app.listen(
  port,
  //optional 2nd argument
  () => {
    console.log(`Server is up on port ${port}`);
  }
);

//$ node server.js to run then goto http://localhost:3000/ this is your base url -> /
