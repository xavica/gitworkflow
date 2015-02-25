document.writeln("<h1> Square of the numbers from 1 to 10 </h1>");
for(var x=1; x<=10; x++)
	document.writeln("<br><b>The Square of "+x+" is "+square(x)+"</b><br/>")
function square(y)
{
	return y*y;
}
