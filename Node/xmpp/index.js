const moment = require('moment');
const xmpp = require('simple-xmpp');

const sendMessage = () => {
  setTimeout(sendMessage, 3000);
  xmpp.send(
    'saurabh@localhost',
    `hi! ${moment().format('MMMM Do YYYY, h:mm:ss a')}`
  );
};

xmpp.on('online', (data) => {
  console.log('Hay you are online');
  console.log(`connected as ${data.jid.user}`);
  sendMessage();
});

xmpp.on('error', (error) => console.log(`something went wrong! ${error}`));

xmpp.on('chat', (from, message) => {
  console.log(`Got a message~ ${message} from ${from}`);
});

xmpp.connect({
  jid: 'admin@localhost',
  password: 'password',
  host: 'localhost',
  port: 5222,
});
