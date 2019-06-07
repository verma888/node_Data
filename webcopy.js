var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req,res) {
    res.send("Hello world!!!!!");
})
app.get('/user/:idd/:age', (req, res, next)=>{
    res.send('Hello Node Js Param!!' + req.params.idd + ' welcome you are' + req.params.age)

});
app.get('/query', (req, res, next)=>{
    console.log(req.query);
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbName = "myproject2";
    MongoClient.connect(url, { useNewUrlParser: true },   function(err, client){
        console.log("successfully connected to server");
        const db = client.db(dbName);
        const collection = db.collection('Documents');
        console.log(typeof(req.query.a));
        collection.find(req.query).toArray (function(err, docs){
            console.log("search done");
            console.log(docs);
            client.close();
            res.send(docs);
        })
    })
})

app.post('/adduser', function(req, res){
    console.log(req.body);
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbName = "myproject2";
    MongoClient.connect(url,{ useNewUrlParser: true },function(err, client){
        console.log("successfully connected to server");
        const db = client.db(dbName);
        const collection = db.collection('Documents');
        collection.insertMany([req.body], function(err, result) {
            console.log("data insertion has been done to collection");
            res.send(result);    
        });
    });
});

app.delete('/delete', (req, res, next)=>{
    console.log('The delete one is :' , req.query);
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbName = "myproject2";
    MongoClient.connect(url, { useNewUrlParser: true },   function(err, client){
        console.log("successfully connected to server");
        const db = client.db(dbName);
        const collection = db.collection('Documents');
        collection.deleteOne((req.query), function(err, docs){
            res.send(docs);
            client.close();
        })
    })
})

app.put('/api', (req, res, next)=>{
    console.log('The update one is :' , req.query);
    const MongoClient = require('mongodb').MongoClient;
    const url = 'mongodb://localhost:27017';
    const dbName = "myproject2";
    MongoClient.connect(url, { useNewUrlParser: true },   function(err, client){
        console.log("successfully connected to server");
        const db = client.db(dbName);
        const collection = db.collection('Documents');
        collection.updateOne((req.query), { $set: { b : 2 } }, function(err, result2) {
            client.close();
            res.send(result2);
        })
    })
})