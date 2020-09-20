import axios from "axios";
import WebSocket from "ws";

// only used by publishers
const publish = (message, topicId) => {
  return axios.post(`http://localhost:3001/${topicId}`, message);
};

// only used by subscribers
const subscribe = (topicId) => {
  return new WebSocket(`ws://localhost:3001/${topicId}`);
};

const messagingAPI = { publish, subscribe };
export default messagingAPI;
