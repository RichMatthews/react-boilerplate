var express = require("express");
var app = express();
var axios = require("axios");
// var fetch = require("node-fetch");
require("isomorphic-fetch");
app.use("/", express.static("public"));

// app.get("/users", (req, res) => {
//   console.log("a get request");
//   var tryFetch = { myString: "I am working fetch" };
//   res.json(tryFetch);
// });

app.get("/fetchUsers", async (req, res) => {
  try {
    console.log("a get request");
    var getData = await fetch("https://jsonplaceholder.typicode.com/users");
    var response = await getData.json();
    res.send(response);
    // res.json(response);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

app.get("*", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 8050);
