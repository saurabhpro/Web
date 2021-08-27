import express from 'express';

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0',
  });
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'Mike',
      age: 27,
    },
    {
      name: 'Andrew',
      age: 25,
    },
    {
      name: 'Jen',
      age: 26,
    },
  ]);
});
// GET /users
// Give users a name prop and age prop

app.listen(3000, () => {
  console.log(`Started on port 3000`);
});
const _app = app;
export { _app as app };
