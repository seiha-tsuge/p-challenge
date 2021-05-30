const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ text: 'hello world' });
});

app.post('/', (req, res) => {
  if (req.is('application/json')) {
    const { name } = req.body;

    res.status(201).json({ name });
  } else {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
