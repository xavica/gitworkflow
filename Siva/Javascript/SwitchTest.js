var choice;
var startTag;
var endTag;
var validInput=true;
var listType;
choice = window.prompt("Select a list style:\n"+"1 (numbered), 2(lettered), 3 (roman)","1");

switch(choice)
{
	case "1":
	startTag="<ol>";
	endTag="</ol>";
	listType="<h1> Numbered List</h1>";
	break;
	case "2":
	startTag="<ol style= \"list-style-type: upper-alpha\">";
	endTag="</ol>";
	listType="<h1> Lettered List</h1>";
	break;
	case "3":
	startTag="<ol style=\"list-style-type: upper-roman\">";
	endTag="</ol>";
	listType="<h1> Roman Numbered List</h1>";
	break;
	default:
	validInput=false;

}
if(validInput==true)
{
	document.writeln(listType+startTag);
	for(var i=1; i<=3; ++i)
		document.writeln("<li> List item" + i+ "</li>");
	document.writeln(endTag);

}
else
document.writeln("Invalid choice :" +choice);