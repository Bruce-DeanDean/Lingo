var path = require("path");
var express = require("express");

// var publicPath = path.resolve(__dirname, "/app/public");
module.exports = function(app) {
  // app     .us("*", function (req, res) { res.sendFile(path.join(__dirname,
  // "/../public/text.html"));     });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
    console.log(__dirname);
  });
  // app.use(express.static(publicPath))
};
