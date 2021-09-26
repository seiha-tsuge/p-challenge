const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(
  cors({
    origin: `http://localhost:3000`,
    methods: ['POST'],
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    get: 'get',
  });
});

app.post('/', (req, res) => {
  res.json({
    post: 'post',
  });
});

app.put('/', (req, res) => {
  res.json({
    put: 'put',
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
