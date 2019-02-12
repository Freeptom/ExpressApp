var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static("public"));
app.set('view engine', "ejs");

let friends = ['John','Paul','Ringo','George'];

app.get('/', function(req, res){
    res.render("home");
});

app.get('/friends', function(req, res){
    res.render("friends", {friends: friends});
});

app.post('/addfriend', function(req,res){
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    res.redirect('/friends');
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