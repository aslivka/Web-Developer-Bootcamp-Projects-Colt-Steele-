//Importing module express
var express = require("express");
var app = express();

// "/" 		=> "Hi there!"
app.get("/", function(req, res){
	console.log("Someone made a request to /");
	res.send("Hi There!");
});

// "/bye"	=> "Goodbye!"
app.get("/bye", function(req, res){
	console.log("Someone made a request to /bye");
	res.send("Goodbye!");
});

// "/dog"	=> "MEOW!"
app.get("/dog", function(req, res){
	console.log("Someone made a request to /dog");
	res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
	 var subreddit = req.params.subredditName.toUpperCase();
     res.send("WELCOME TO THE " + subreddit + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	console.log(req.params);
     res.send("WELCOME TO THE COMMENTS PAGE!");
});

app.get("*", function(req, res){
	res.send("YOU ARE A STAR!!!");
});

//Tell Express to listen for requests (start server basically)
// Can include IP as argument: app.listen(3000, "127.0.0.1", callback);
app.listen(3000, function(){
	console.log("Server has started!!!");
});
