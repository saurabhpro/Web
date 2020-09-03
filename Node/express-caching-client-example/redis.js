import express from "express";
import Database from "./database.js";

//FIXME fix for es6 
// https://riptutorial.com/node-js/example/23851/getting-started
const redis = require("redis").createClient();

const app = express();
const database = new Database();

app.use(express.json());

app.get("/nocache/index.html", (req, res) => {
  database.get("index.html", (page) => {
    res.status(200).send(page);
  });
});

app.get("/withcache/index.html", (req, res) => {
  redis.get("index.html", (err, redisRes) => {
    if (redisRes) {
      res.status(200).send(redisRes);
      return;
    }
    // if not found load and update cache
    database.get("index.html", (page) => {
      redis.set("index.html", page, "EX", 10);
      res.status(200).send(page);
    });
  });
});

// END ------------------------------------------------------

// start listening on port 3001 and print the message on success
app.listen(3001, () => console.log("This is my server at 3001"));
