var msg = require('./file1.js');
const db = client.db(dbName);
  const collection = db.collection('Documents');
    // Get the documents collection
    
    // Insert some documents
    collection.insertMany([
      {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
      console.log("Inserted 3 documents into the collection");
      client.close;
    });