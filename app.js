var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hi there');
});
app.get('/bye', function(req, res){
    res.send('bye');
});

app.get('*', function(req, res){
    res.send("404 m8");
})


app.listen(3000, function(){
    console.log('port is listening')
})