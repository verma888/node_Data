var express=require('express');
var app=express();
app.get('/',function(req,res)
{
res.send('Hello World!');
});
app.get('/user',function(req,res)
{
res.send('The request has been handled and checked');
}).listen(3000);
