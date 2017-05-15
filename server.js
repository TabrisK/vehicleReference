var express = require("express");
var api = require("./api");
var path = require('path');
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
var app = express();
// app.get("/", function(req, res){
//     res.send("Hello World!");
// });

app.use(express.static(path.join(__dirname, 'dist')));
api(app);
app.listen(3000);

// Connection URL
var url = 'mongodb://localhost:27017';

// Use connect method to connect to the server
/*
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
});*/
