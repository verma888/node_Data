const connect = require('./file1');
   connect(function(client){
     const dbName = 'myproject3';
    const db = client.db(dbName);
    const collection = db.collection('Documents');
  
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      console.log("Inserted 3 documents into the collection");
      client.close;
    })
  });

 
  3