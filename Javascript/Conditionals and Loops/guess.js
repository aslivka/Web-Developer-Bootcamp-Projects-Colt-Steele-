//Input
var answer = 7;
var guess = Number(prompt("Guess a number"));

//Checking answer
if(guess === answer)
{
	alert("You guessed the correct number!");
}
else if(guess > answer)
{
	alert("Too high. Try again.");
}
else
{
	alert("Too low. Try again.");
}