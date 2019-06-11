const express = require('express');
const app = express();
app.get('/posts', function(req,res){
res.send("hi user your age is ", res);
}).listen(3000);