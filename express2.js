var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send("Lets try the Express now!");
})
app.get('/Ram', function(req, res){
    res.send("The request has been handled and checked ?");
}).listen(4002); 