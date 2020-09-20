import messagingAPI from "./messagingAPI.js";
import readline from "readline";

const TOPIC_ID = process.env.TOPIC_ID;

const terminal = readline.createInterface({
  input: process.stdin,
});

terminal.on("line", (text) => {
  const userName = process.env.NAME;

  // make a message
  const message = { userName, text };

  // send it along with the Topic Id
  messagingAPI.publish(message, TOPIC_ID);
});
