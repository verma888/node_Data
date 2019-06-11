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
    res.send('Hello Node Js Param!! ' + req.params.idd + ' welcome you are ' + req.params.age)

});
app.get('/query', (req, res, next)=>{
    console.log(req.query);
    res.send("the passed query is : "+ JSON.stringify(req.query));
});
app.post('/adduser', function(req, res){
    console.log(req.body);
    res.send("The post body passed by user is "+ JSON.stringify(req.body));
});

app.delete('/delete', (req, res, next)=>{
    console.log('The delete one is :' , req.query);
    res.send("This " + JSON.stringify(req.query) +"  has been deleted" );
})
    
app.put('/api', (req, res, next)=>{
    console.log('The update one is :' , req.query);
    res.send(res + " has been updated ");
});