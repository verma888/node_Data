const connect = function(callback){
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbname = "myproject2";
    MongoClient.connect(url, { useNewUrlParser: true },function(err, client){
        console.log("Connected to server");
        callback(client);
    
    })
} 
module.exports = connect;
