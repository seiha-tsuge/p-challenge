const express = require('express');

const app1 = express();
const port1 = 8080;

const setCacheNoStore = (req, res, next) => {
  res.set('Cache-control', `no-store`);
  next();
};
app1.use(setCacheNoStore);
app1.use(express.static('public'));

app1.listen(port1, () => {
  console.log(`Example app listening at http://localhost:${port1}`);
});

const app2 = express();
const port2 = 8081;

// 何も指定しなくてもキャッシュが返却されてしまう・・・

// const setCache = (req, res, next) => {
//   res.set('Cache-control', `max-age=0, private, must-revalidate`);
//   next();
// };
// app2.use(setCache);
app2.use(express.static('public'));

app2.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`);
});
