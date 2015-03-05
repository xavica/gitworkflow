var	Names=new Array("Siva","Gayatri","Jagan","Anoo","Sai","Dhana","Kiran");
var	int1= [2,4,6,8];
var int2= [1,2,,5,6,,8];

outputArray("Array colors contains", Names);
outputArray("Array integers1 contains", int1);
outputArray("Array integers2 contains",  int2);


function outputArray(heading, theArray)
{
	document.writeln("<h4>" +heading+"</h4>");
	document.writeln("<table border =\"1\">");
	document.writeln("<th>SL.No</th>" +
					 "<th> Value </th><tdody>");
	for(var i=0; i< theArray.length; i++)
		document.writeln("<tr><td>" + i + 
			"</td><td>"+theArray[i]+"</td></tr>");
	document.writeln("</tbody></table>");
}