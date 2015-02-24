document.writeln("<table border = \"1\">");
document.writeln("<caption> <b>Demonstrating Logical " + 
	"Operators</b></caption>");
document.writeln("<th><b>Name</b></th>");
document.writeln("<th><b>Result</b></th>");

document.writeln(
	"<tr><td class = \"center\">Logical AND (&&)</td>"+
	"<td>0 && 0 : "+ (0 && 0)+
	"<br/>0 && 1 :"+ (0 && 1)+
	"<br/> 1 && 0 :" +(1 && 0)+
	"<br/> 1 && 1 :"+(1&&1)+
	"</td></tr>");
document.writeln(
	"<tr><td class = \" center\" >Logical OR (||)</td>"+
	"<td>0 || 0 : "+ (0 || 0)+
	"<br/>0 || 1 :"+ (0 || 1)+
	"<br/> 1 || 0 :" +(1 || 0)+
	"<br/> 1 || 1 :"+(1 || 1)+
	"</td></tr>");
document.writeln(
	"<tr><td class = \" center\" >Logical NOT (!)</td>"+
	"<td>!false : " + (!0)+
	"<br/>!true : " + (!1)+ 
	"</td></tr>");