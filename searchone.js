const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = "myproject2";
MongoClient.connect(url, { useNewUrlParser: true },   function(err, client){
    console.log("successfully connected to server");
  const db = client.db(dbName);
  const collection = db.collection('Documents');

  collection.find({a : 3}).toArray (function(err, docs){
      console.log("search done");
      console.log(docs);
      client.close();
     
  })
})