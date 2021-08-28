const moment = require('moment');
const xmpp = require('simple-xmpp');

//saurabh
xmpp.on('online', (data) => {
  console.log('Hey you are online! ');
  console.log(`Connected as ${data.jid.user}`);
  sendMessage();
});

/**
 * A function that sends a message periodically
 */
const sendMessage = () => {
  setTimeout(sendMessage, 5000);
  xmpp.send(
    'admin@localhost',
    `hi! ${moment().format('MMMM Do YYYY, h:mm:ss a')}`
  );
};

xmpp.on('error', (error) => console.log(`something went wrong!${error} `));

xmpp.on('chat', (from, message) => {
  console.log(`Got a message! ${message} from ${from}`);
});

xmpp.connect({
  jid: 'saurabh@localhost',
  password: 'password',
  host: 'localhost',
  port: 5222,
});
