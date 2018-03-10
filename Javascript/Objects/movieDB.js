var movieList = [
	{
	title: "In Bruges",
	rating: "5 stars",
	hasWatched: false
},
{
	title: "Frozen",
	rating: "4.5 stars",
	hasWatched: true
},
{
	title: "Mad Max Fury Road",
	rating: "5 stars",
	hasWatched: true
},
{
	title: "Les Miserables",
	rating: "3.5 stars",
	hasWatched: false
}
];

function printMovies(movies)
{
	movieList.forEach(function(movie){
		var output;
		if(movie.hasWatched === true)
		{
			output = "You have watched ";
		}
		else
		{
			output = "You have not seen ";
		}
		output += "\"" +   movie.title + "\" - ";
		output += movie.rating;
		console.log(output);
	});
		
}


	