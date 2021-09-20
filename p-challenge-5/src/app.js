const express = require('express');

const app1 = express();
const port1 = 8080;

const cookie1 = (req, res, next) => {
  res.cookie("first-cookie", "hoge", {
    httpOnly: true,
  });
  next();
};
app1.use(cookie1);
app1.use(express.static("public-1"));

app1.listen(port1, () => {
  console.log(`Example app listening at http://localhost:${port1}`);
});

const app2 = express();
const port2 = 8081;

const cookie2 = (req, res, next) => {
  res.cookie("third-cookie", "fuga", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  next();
};

app2.use(cookie2);
app2.use(express.static("public-2"));

app2.listen(port2, () => {
  console.log(`Example app listening at http://localhost:${port2}`);
});
