import getRandomInt from "./helpers.js";
import messagingAPI from "./messagingAPI.js";
import readline from "readline";

const displayedMessage = {};

const terminal = readline.createInterface({
  input: process.stdin,
});

terminal.on("line", (text) => {
  const userName = process.env.NAME;
  const id = getRandomInt(100000);
  displayedMessage[id] = true;

  const message = { id, text, userName };

  messagingAPI.sendMessage(message);
});

const displayMessage = (message) => {
  console.log(`${message.userName}: ${message.text}`);
  displayedMessage[message.id] = true;
};

/**
 * make network request
 */
const getAndDisplayMessage = async () => {
  const messages = await messagingAPI.getMessages();

  messages
    .filter((msg) => !(msg.id in displayedMessage))
    .forEach((msg) => displayMessage(msg));
};

/**
 *
 */
const pollMessages = () => {
  // every 3 sec call this method
  setInterval(getAndDisplayMessage, 3000);
};

/**
 *
 */
const streamMessages = () => {
  const messagingSocket = messagingAPI.createMessagingSocket();

  messagingSocket.on("message", (data) => {
    const msg = JSON.parse(data);
    const messageAlreadyDisplayed = msg.id in displayedMessage;
    if (!messageAlreadyDisplayed) {
      displayMessage(msg);
    }
  });
};

//
if (process.env.MODE === "POLL") {
  getAndDisplayMessage();
  pollMessages();
} else if (process.env.MODE === "stream") {
  getAndDisplayMessage();
  streamMessages();
}
