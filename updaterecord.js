const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'my1project';
 
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  const collection = db.collection('documents');
  collection.updateOne({a : 56}, { $set: { b : 1, a : 55}}, function(err, result) {
    console.log("Updated the document");
  })
});