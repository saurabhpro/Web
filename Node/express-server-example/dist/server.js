"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_V1_DISK = exports.API_V1_MEMORY = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
exports.app = app;
app.use(_express["default"].json());
var DATA_DIR = "my-database"; // our file database

var hashTable = {}; // our memory database
//API's

var API_V1_MEMORY = "/memory/:key";
exports.API_V1_MEMORY = API_V1_MEMORY;
var API_V1_DISK = "/disk/:key"; // POST ------------------------------------------------------
// - memory

exports.API_V1_DISK = API_V1_DISK;
app.post(API_V1_MEMORY, function (req, res) {
  // add to the hash table (in memory)
  hashTable[req.params.key] = req.body.data;
  res.status(201).send(req.body.data);
}); // - file db

app.post(API_V1_DISK, function (req, res) {
  var destinationFile = "".concat(DATA_DIR, "/").concat(req.params.key); // add to the persitant file

  _fs["default"].writeFileSync(destinationFile, req.body.data);

  res.status(201).send(req.body.data);
}); // END ------------------------------------------------------
// GET ------------------------------------------------------
// - memory

app.get(API_V1_MEMORY, function (req, res) {
  var key = req.params.key; // this is cool

  if (key in hashTable) {
    res.status(200).send(hashTable[key]);
    return;
  }

  res.status(404).send("Sorry can't find the requested ".concat(req.params.key));
}); // - file db

app.get(API_V1_DISK, function (req, res) {
  var destinationFile = "".concat(DATA_DIR, "/").concat(req.params.key);

  try {
    var data = _fs["default"].readFileSync(destinationFile, req.body.data);

    res.status(200).send(data);
  } catch (e) {
    res.status(404).send("Sorry can't find the requested ".concat(req.params.key));
  }
}); // END ------------------------------------------------------
// start listening on port 3001 and print the message on success

app.listen(3001, function () {
  return console.log("This is my server at 3001");
});