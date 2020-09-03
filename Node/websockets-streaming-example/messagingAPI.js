import axios from "axios";
import WebSocket from "ws";

const createMessagingSocket = () => {
  return new WebSocket("ws://localhost:3001/messages");
};

const getMessages = async () => {
  const res = await axios.get("http://localhost:3001/messages");
  return res.data;
};

const sendMessage = (message) => {
  return axios.post("http://localhost:3001/messages", message);
};

const messagingAPI = { createMessagingSocket, getMessages, sendMessage };
export default messagingAPI;
