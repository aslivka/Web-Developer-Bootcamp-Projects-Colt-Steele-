//Including express framework
var express = require("express");
var app = express();

//Routes
app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!",
		cat: "I hate you human",
		goldfish: "..."
		}
	var animal = req.params.animal;
	var sound = sounds[animal];
	res.send("The " + animal + " says " + sound);
});


app.get("/repeat/:phrase/:times", function(req, res){
	var times = Number(req.params.times);
	var phrase = req.params.phrase;

	var output = "";
	for(var i = 0; i < times; i++)
	{
		output += phrase + " ";
	}
	res.send(output);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});


//Tell Express to listen for requests (start server basically)
// Can include IP as argument: app.listen(3000, "127.0.0.1", callback);
app.listen(3000, function(){
	console.log("Server has started!!!");
});
