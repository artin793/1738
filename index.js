const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
});

app.listen(port, () => {
  console.log(`Server kjører på http://localhost:${port}`);
});

app.get("/deltagere-1", (req, res) => {
  res.send(`
    <h1>Deltagere</h1>
    <ul>
      <li>Ola</li>
      <li>Kari</li>
      <li>Ali</li>
      <li>Sara</li>
    </ul>
  `);
});