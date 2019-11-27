function removeExtraChar(){

	var input = document.getElementById("textInput").value;
	var output ="";

	for (var i = 0; i < input.length; i++)
		{
	    	var letter = input.charAt(i);
	    	if (!isExtraChar(letter))
		      	output += letter;                                
		}

	output.replace('\r', '\n');    // remove \r.
	
	/*
	var rule=/\s{1,}/g;
	output = output.split(rule).join(" ");  // you can't create new lines
	*/

	
	output = output.replace(/[ ]{2,}/gi," "); // remove extra spaces
	

	document.getElementById("textInput").value = output;      
}

function isExtraChar(letter)
	{
	    if (typeof(letter) == "undefined" || letter == null)
	        return false;

	    var code = letter.charCodeAt(0);

	    return (code == 1600 || (code >= 1611 && code <= 1619) || (code >= 1644 && code <= 1790) ); 
	}