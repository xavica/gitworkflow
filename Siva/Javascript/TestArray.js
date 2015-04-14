
var a1= new Array(5);
var a2= new Array();
//Assign values to each element of an Array
for (var i=0; i<a1.length; ++i)
	a1[i]=i;
//create and initialize elements in array a2
for (i=0; i<10; ++i)
	a2[i]= i;

outputArray("Array a1:", a1 );
outputArray("Array a2:", a2 );

alert("This is a sample program to test the arrays");
function outputArray(heading, theArray)
{
	document.writeln("<h2>" +heading+"</h2>");
	document.writeln("<table border =\"1\">");
	document.writeln("<th>Subscript</th>" +
					 "<th> Value </th><tdody>");
	for(var i=0; i< theArray.length; i++)
		document.writeln("<tr><td>" + i + "</td><td>"+theArray[i]+"</td></tr>");
	document.writeln("</tbody></table>");
}