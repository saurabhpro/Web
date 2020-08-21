import express from "express";
import fs from "fs";

export const app = express();
app.use(express.json());

const DATA_DIR = "my-database"; // our file database
const hashTable = {}; // our memory database

//API's
export const API_V1_MEMORY = "/memory/:key";
export const API_V1_DISK = "/disk/:key";

// POST ------------------------------------------------------
// - memory
app.post(API_V1_MEMORY, (req, res) => {
  // add to the hash table (in memory)
  hashTable[req.params.key] = req.body.data;
  res.status(201).send(req.body.data);
});

// - file db
app.post(API_V1_DISK, (req, res) => {
  const destinationFile = `${DATA_DIR}/${req.params.key}`;

  // add to the persitant file
  fs.writeFileSync(destinationFile, req.body.data);
  res.status(201).send(req.body.data);
});

// END ------------------------------------------------------

// GET ------------------------------------------------------
// - memory
app.get(API_V1_MEMORY, (req, res) => {
  const key = req.params.key;

  // this is cool
  if (key in hashTable) {
    res.status(200).send(hashTable[key]);
    return;
  }

  res.status(404).send(`Sorry can't find the requested ${req.params.key}`);
});

// - file db
app.get(API_V1_DISK, (req, res) => {
  const destinationFile = `${DATA_DIR}/${req.params.key}`;

  try {
    const data = fs.readFileSync(destinationFile, req.body.data);
    res.status(200).send(data);
  } catch (e) {
    res.status(404).send(`Sorry can't find the requested ${req.params.key}`);
  }
});
// END ------------------------------------------------------

// start listening on port 3001 and print the message on success
app.listen(3001, () => console.log("This is my server at 3001"));
