const express = require("express");
const app = express();
const db = require("../database-pg/index.js");
const bodyParser = require("body-parser");
const {
  findMostRecent10,
  findMostRelevant10
} = require("../database-pg/index.js");

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/rooms/reviews/recent", function(req, res) {
  console.log("Inside server for post request");

  findMostRecent10().then(records => {
    // console.log("here are the records ", records);
    console.log("retrieved recent reviews from DB!!!");
    return res.status(200).send(records);
  });
});

app.get("/rooms/reviews/relevant", function(req, res) {
  console.log("Inside server for relevant post request");

  findMostRelevant10().then(records => {
    // console.log("here are the records ", records);
    console.log("retrieved relevant reviews from DB!!!");
    return res.status(200).send(records);
  });
});

app.listen(port);
console.log("Listening on port", port);
