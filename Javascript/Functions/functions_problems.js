//Function returns true if number is even, false otherwise
function isEven(num)
{
	if(num % 2 == 0)
	{
		return true;
	}
	else
	{
		return false;
	}
}

//Function calculates factorial of number
function factorial(num)
{
	var sum = 1;

	for(var i= 1; i <= num; i++)
	{
		sum *=i;
	}
	return sum;
}

//Function converts kebab-case string to snake_case string
function kebabToSnake(inputString)
{
//Using a loop
// 	var output = ""
// 	for(var i = 0; i < inputString.length; i++)
// 	{
// 		if(inputString[i] == "-")
// 		{
// 		output +="_";
// 		}
// 		else
// 		{
// 		 output +=inputString[i];
// 		}
// 	}
// return output;

//Using replace() method
	var newStr = inputString.replace(/-/g, "_");
	return newStr;

}