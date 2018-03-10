//Select the button
var button = document.getElementsByTagName("button")[0];
var isPurple = false;

//Version 1
// button.addEventListener("click", toggleBackground);

// function toggleBackground()
// {
// 	if(isPurple)
// 	{
// 		document.body.style.background = "white";
// 		isPurple = false;
// 	}
// 	else
// 	{
// 		document.body.style.background = "purple";
// 		isPurple = true;
// 	}
// }

//Version 2
button.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});