import moment from 'moment';

import pkg from 'xmppjs';
const { send, on, connect } = pkg;

const sendMessage = () => {
    setTimeout(sendMessage, 3000);
    send(
        'saurabh@localhost',
        `hi! ${moment().format('MMMM Do YYYY, h:mm:ss a')}`
    );
};

on('online', (data) => {
    console.log('Hay you are online');
    console.log(`connected as ${data.jid.user}`);
    sendMessage();
});

on('error', (error) => console.log(`something went wrong! ${error}`));

on('chat', (from, message) => {
    console.log(`Got a message~ ${message} from ${from}`);
});

connect({
    jid: 'admin@localhost',
    password: 'password',
    host: 'localhost',
    port: 5222,
});
