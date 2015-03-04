
var letters= window.prompt("Enter a string");
document.getElementById("str").innerHTML=letters;
function buttonPressed()
{
	var searchForm= document.getElementById("searchForm");
	var inputVal= document.getElementById("inputVal");

	searchForm.elements[2].value=
		letters.indexOf(inputVal.value);
	searchForm.elements[3].value=
		letters.lastIndexOf(inputVal.value);
	searchForm.elements[4].value=
		letters.indexOf(inputVal.value, 5);
	searchForm.elements[5].value=
		letters.lastIndexOf(inputVal.value, 5);

}