var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hi there');
});
app.get('/bye', function(req, res){
    res.send('bye');
});



app.listen(3000, function(){
    console.log('port is listening')
})