var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require("request");
var path = require('path');
var pathJoin = require('path.join');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



app.get("/",function(req,res){
    res.render("chess")
});

var player1 = 0;
var player2 = 0;

app.post("/chesschecker", function(req,res){
    var player1 = req.body.player1;
    console.log(player1);
    var player2 = req.body.player2;
    console.log(player2);
    res.render("chesschecker", {player1:player1, player2:player2})
});


app.listen(2500, function() {
    console.log("server started!!!")
});