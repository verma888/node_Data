const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myproject';
 
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  const collection = db.collection('documents');

  collection.find({a:1}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.log(docs);
    client.close();
  })
});