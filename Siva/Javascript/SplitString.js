function splitButtonPressed()
{
	var inputString= document.getElementById("inputVal").value;
	var tokens = inputString.split(" ");
	document.getElementById("output").value=
		tokens.join("\n\n");
	document.getElementById("outputSubstring").value=
		inputString.substring(0,10);
}