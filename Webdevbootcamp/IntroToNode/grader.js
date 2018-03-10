//grader.js	
//Function average(array) calculates average score in the array,
//rounded to nearest whole number

function average(inputArray)
{
	var sum = 0;
	var numItems = inputArray.length;
	for(var i = 0; i < numItems; i++)
	{
		sum +=inputArray[i];
	}
	return (Math.round(sum / numItems));
}

var scores1 = [90, 98, 89, 100, 100, 86, 94];
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

console.log("scores1 average: " + String(average(scores1)));
console.log("scores2 average: " + String(average(scores2)));