var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.listen(3000);

const connect = require('./file1');
connect(function(client){
    const dbName = "myproject2";
    const db = client.db(dbName);
    const collection = db.collection('Documents');

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
        collection.find(req.query).toArray (function(err, docs){
            console.log("search done");
            console.log(docs);
            client.close();
            res.send(docs);
        })
    })
    app.post('/adduser', function(req, res){
        console.log(req.body);
        collection.insertMany([req.body], function(err, result) {
            console.log("data insertion has been done to collection");
            res.send(result);    
        });
    });


    app.delete('/delete/:del', (req, res, next)=>{
        console.log('The delete one is :' , req.params.del);
        collection.deleteOne({a: parseInt(req.params.del)}, function(err, docs){
            res.send(docs);
            console.log("data.... deletion is successful")
            client.close();
        })
    })


    app.put('/api', (req, res, next)=>{
        console.log('The update one is :' , req.query);
        collection.updateOne((req.query), { $set: { b : 10 } }, function(err, result2) {
            client.close();
            res.send(result2);
            console.log('data updated')
        })
    })
})