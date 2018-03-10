//Check off specific todos by clicking
$("#list ul").on("click","li", function(){

	$(this).toggleClass("completed");
	
});

//click on x to delete todo
$("#list ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){

	//enter key = 13 and not empty string
	if( (event.which === 13) && ($(this).val() !== "") )	
	{
		//grabbing new todo text from input, after stripping
		//possible malicious html from it
		var todoText = stripHTML($(this).val());

		//create a new li, add to ul
		$("#list ul"). append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");	
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});

$("#remove-all").on("click", function(){
	
	$(".completed").fadeOut(500, function()
		{
			$(this).remove();
		});
});

function stripHTML(str)
{
	var div = document.createElement("div");
	div.innerHTML = str;
	var strippedText = div.textContent || div.innerText || "";
	return strippedText;
}