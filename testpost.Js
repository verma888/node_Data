var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    console.log('Server is running on PORT3000');
  });

app.post('/adduser', function(req, res){
    console.log(req.body);
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbName = "postrequest";
    MongoClient.connect(url,{ useNewUrlParser: true },function(err, client){
        console.log("successfully connected to server");
        const db = client.db(dbName);
        const collection = db.collection('Documents');
        collection.insertMany([req.body], function(err, res) {
            console.log("data insertion has been done to collection");
            res.send(res);    
        });
    });
});
