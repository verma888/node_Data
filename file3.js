const connect = require('./file1');
connect(function(client){
const dbName = "myproject3";
const db = client.db(dbName);
const collection = db.collection('Documents');
collection.find({a : 55}).toArray (function(err, res){
    if(res.length==0){
        console.log("Match not found");
        return;
    }
    console.log ("Match found");
    console.log(res);
    client.close();
})
})