var express = require("express");
var app = express();
var axios = require("axios");
// var fetch = require("node-fetch");
require("isomorphic-fetch");
app.use("/", express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

// app.get("/users", (req, res) => {
//   console.log("a get request");
//   var tryFetch = { myString: "I am working fetch" };
//   res.json(tryFetch);
// });

app.get("/fetchUsers", async (req, res) => {
  console.log("a get request");
  var getData = await fetch("https://jsonplaceholder.typicode.com/users");
  var response = await getData.json();
  res.write(response);
  // res.json(response);
});

app.listen(process.env.PORT || 8050);
