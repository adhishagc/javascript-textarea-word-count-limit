//variable initialized to 0 to keep track of the current word count
var idea_word_count = 0;

//Word count limit
var limit  = 5;

//function to count the word count
function wordLimit(){
	//get the text from the text area
	var text = document.getElementById("word_count").value;
	
	//split the words with a blank space in between
	text = text.split(" ");
				
	//get the length of the text. At this point the variable text is an array
	idea_word_count = text.length;

	//logical if to execute an action based on the limit
	if(text.length > limit){
		//Your action when the word count is higher than the limit			
		document.getElementById("alert").innerHTML = "Your text has exceeded over " + limit + " Words.";
					
	}else{

	}
}