var express = require('express');
var app = express();

app.use(express.static("public"));
app.set('view engine', "ejs");



app.get('/', function(req, res){
    res.render("home");
});


app.get('/fallinlovewith/:thing', function(req, res) {
    let thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get("/posts", function(req,res) {
    let posts = [
        {title: "post 1", author: "Suzie"},
        {title: "My pet bunny", author: "John"},
        {title: "Can you believe this?!", author: "Betty"}
    ];

    res.render("posts", {posts: posts})
});


app.get('*', function(req, res){
    res.send("404 m8");
});


app.listen(3000, function(){
    console.log('port is listening')
}) 