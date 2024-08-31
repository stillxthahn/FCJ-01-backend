const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");

// MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
 bodyParser.urlencoded({
  extended: true,
 })
);
app.use(cors());

app.get("/todos", (req, res) => {
 console.log("CHECK");
 const q = "SELECT * FROM todos";
 db.query(q, (err, result) => {
  console.log("err", err);
  if (err) return res.json(err);
  return res.status(200).json(result);
 });
});

const port = 8000;
app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
