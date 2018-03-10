function echo(strInput, numTimes)
{
	for(var i = 0; i < numTimes; i++)
	{
		console.log(strInput);
	}
}

echo("Echo!!!", 10);		//should print "Echo!!!" 10 times
echo("Tater Tots", 3);		//should print "Tater Tots" 3 times