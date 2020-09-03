import express from "express";

const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  console.log(req.headers);
  res.send("Hello Saurabh");
});

// END ------------------------------------------------------

// start listening on port 3001 and print the message on success
app.listen(3001, () => console.log("This is my server at 3001"));
