import moment from 'moment';
import pkg from 'simple-xmpp';
const { send, on, connect } = pkg;

//saurabh
on('online', (data) => {
  console.log('Hey you are online! ');
  console.log(`Connected as ${data.jid.user}`);
  sendMessage();
});

/**
 * A function that sends a message periodically
 */
const sendMessage = () => {
  setTimeout(sendMessage, 5000);
  send('admin@localhost', `hi! ${moment().format('MMMM Do YYYY, h:mm:ss a')}`);
};

on('error', (error) => console.log(`something went wrong!${error} `));

on('chat', (from, message) => {
  console.log(`Got a message! ${message} from ${from}`);
});

connect({
  jid: 'saurabh@localhost',
  password: 'password',
  host: 'localhost',
  port: 5222,
});
