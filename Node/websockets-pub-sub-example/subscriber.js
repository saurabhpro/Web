import messagingAPI from "./messagingAPI.js";

const TOPIC_ID = process.env.TOPIC_ID;

const displayMessage = (message) => {
  console.log(` > ${message.userName}: ${message.text}`);
};

const streamMessages = () => {
  const messagingSocket = messagingAPI.subscribe(TOPIC_ID);

  messagingSocket.on("message", (data) => {
    const msg = JSON.parse(data);
    // as soon as we get the message on the socket - show it
    displayMessage(msg);
  });
};

streamMessages();
