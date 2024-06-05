"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_1 = require("mongodb");
var url = "mongodb+srv://norbertfedev:5KEGOAEGYXt7j5wC@cluster0.hrsfgbz.mongodb.net/";
var client = new mongodb_1.MongoClient(url);
client.connect()
    .then(function () {
    console.log("Connected successfully to server");
    // Perform a simple operation on the database
    return client.db('cluster0').collection('cluster0').find().toArray();
})
    .then(function (docs) {
    console.log('Successfully fetched documents:', docs);
})
    .catch(function (error) {
    console.log("Error: ", error);
});
exports.default = client;
