var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt    = require('jsonwebtoken');
app.listen(3000);

const MongoClient = require('mongodb').MongoClient;
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'userpass';
 
// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  const collection = db.collection('userdetails');

  app.post('/adduser', function(req, res){
    console.log(req.body);
    collection.insertMany([req.body], function(err, result) {
      console.log("data insertion has been done to collection");
      res.send(result);
      return result;  
    });
  });
//JWT Sign
    app.get('/jwtSign', (req, res, next) => {
      var id1 = {username: "verma8077", password: "123456"};
    jwt.sign(id1, '%^FTGYHUBHJIY',{ expiresIn: 60*60 }, function(err, token) {
      collection.findOne({username : id1.username}, function(err,match){
        console.log(match, typeof(match));
        if(match!==null){
          if(match.password == id1.password){
            res.send(token);
          }
          else{
            res.status(401).send("credentials error, please try again....");
          }
        }
        else{
          res.status(404).send("user does not exist");
        }
      });
    });
  });
});  