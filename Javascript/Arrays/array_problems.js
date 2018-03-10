var inputArray = [1,2,3,4];

var input = prompt("What would you like to do?");

while(input !== "quit")
{
	if(input ==="list")
	{
		listArray();
	}

	else if(input === "reverse")
	{
		printReverse(inputArray);
	}

	else if(input === "uniform")
	{
		console.log("Array is uniform?: " + isUniform(inputArray));
	}

	else if(input === "sum")
	{
		console.log("array sum: " + sumArray(inputArray));
	}
	else if(input === "max")
	{
		console.log("array max: " + max(inputArray));
	}

	input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listArray()
{
	console.log("*********");
		inputArray.forEach(function(todo, index){
			console.log(index + ": " + todo);
		});
	console.log("*********");
}

function printReverse(input)
{
	for(var i = input.length - 1; i >= 0; i--)
	{
		console.log(input[i]);
	}
}

function isUniform(input)
{	
	var searchItem = input[0];
	for(var i = 1; i < input.length; i++)
	{
		if(input[i] !== searchItem)
		{
			return false;
		}
	}

	return true;
}

function sumArray(input)
{
	var sum = 0;
	input.forEach(function(item)
	{
		sum += item;
	});
	return sum;
}


function max(input)
{
	var max = input[0];
	input.forEach(function(item)
	{
		if(item > max)
		{
			max = item;
		}
	});
	return max;
}


