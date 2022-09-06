const express = require("express");
const path = require("path");
const bodyParse = require("body-parser");
const expressHandlebars = require("express-handlebars");

var app = express();
app.listen(5000, () => {
  console.log("Sever is listening on port 5000");
});
