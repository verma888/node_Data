var express = require(express);
var app = express();
app.listen(3000);
    app.get('/user/:idd/:age', (req, res, next)=>{
        res.send('Hello Node Js Param!!' + req.params.idd + ' welcome you are' + req.params.age)

    });