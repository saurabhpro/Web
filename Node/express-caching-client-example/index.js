import express from "express";
import Database from "./database.js";

const app = express();
const cache = {};
const database = new Database();

app.use(express.json());

app.get("/nocache/index.html", (req, res) => {
  database.get("index.html", (page) => {
    res.status(200).send(page);
  });
});


app.get("/withcache/index.html", (req, res) => {
  if ("index.html" in cache) {
    res.status(200).send(cache["index.html"]);
    return;
  }

  // if not found load and update cache
  database.get("index.html", (page) => {
    cache["index.html"] = page;
    res.status(200).send(page);
  });
});

// END ------------------------------------------------------

// start listening on port 3001 and print the message on success
app.listen(3001, () => console.log("This is my server at 3001"));
