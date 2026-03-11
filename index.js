const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3001;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "mysecretpassword",
  port: 5432,
});

// Forside
app.get("/", (req, res) => {
  res.send("<h1>Serveren fungerer!</h1>");
});


// JSON-rute
app.get("/users-json", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Database-feil");
  }
});

// Deltagere-rute
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

app.get('/api', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// START SERVER (ALLTID NEDERST)
app.listen(port, () => {
  console.log(`Server kjører på http://localhost:${port}`);
});

