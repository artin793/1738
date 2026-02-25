const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hei verden!</h1>");
});

app.listen(port, () => {
  console.log(`Server kjører på http://localhost:${port}`);
});