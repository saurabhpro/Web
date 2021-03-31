const express = require('express');
const hbs = require('hbs');

var app = express();

//to support partials in web page - 
hbs.registerPartials(__dirname + '/views/partials');

//the default directory for express tempates in /views
app.set('view engine', 'hbs');

//to load static pages
//__dirname = base director absolute path -> 5_express-basics
app.use(express.static(__dirname + '/public'));


//registering hbs helpers which can clean out our send data
hbs.registerHelper('getCuurentYear', () => {
    return new Date().getUTCFullYear();
})

//registering hbs helpers which accepts argument
hbs.registerHelper('getTextInCaps', (text) => {
    return text.toUpperCase();
})


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
        welcomeMsg: 'Welcome to the jungle'
    })
});

app.get('/about', (req, res) => {
    //res.send('About Page');
    res.render('about.hbs',
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
        errorMessage: 'Unable to handle request'
    });
});

app.listen(3000,
    //optional 2nd argument
    () => {
        console.log('Server is up on port 3000');
    }
);


//$ node server.js to run then goto http://localhost:3000/ this is your base url -> /