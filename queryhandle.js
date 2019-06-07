const express = require("express");
const app = express();
app.get('/:user/:idd', function(req, res, next){
    console.log('req.url : ', req.url);
    console.log('req.param : ', req.params);
    console.log('req.query : ', req.query);
    console.log('the type is = ', typeof(req.params.idd));

    res.send('Hello Node Js Param!!' + req.params.user + ' welcome you are' + req.params.idd)
}).listen(3000);
