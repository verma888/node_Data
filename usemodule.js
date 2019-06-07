var http = require('http');
var md = require('./mymodule.js');
http.createServer( function(req, res){
    res.write("The date and time are currently :"+ md.myDAtetime());
    res.write("\nI think it is working now");
    res.end();
}).listen(4003);