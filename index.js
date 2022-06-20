const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mahboob@2001",
  database: "crud_contact",
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/users", (req, res) => {
  const sqlGet = "SELECT * FROM contact_db";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO contact_db(name,email,contact) VALUES ('chota bheem','john@gmail.com',23455666)";
  db.query(sqlInsert, (err, result) => {
    console.log("error", err);
    console.log("result", result), res.send("Hello Express");
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Hello I am working go on</h1>");
});

app.listen(4555, console.log("server is running at port 4555"));
