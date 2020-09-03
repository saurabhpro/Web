import express from "express";

const app = express();
app.use(express.json());

const port = process.env.PORT;
// start listening on port defined by nginx and print the message on success
app.listen(port, () => console.log(`This is my server at ${port}`));

app.get("/hello", (req, res) => {
  console.log(req.headers);
  res.send("Hello Saurabh");
});
