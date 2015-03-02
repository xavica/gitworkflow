
var a=[2,9,3,8,6,4,7,1,5,0];
document.writeln("<h2>Effects of passing entire "+
	" array by reference</h2>");
outputArray("Original Array : ", a);

modifyArray(a);
outputArray("Modified Array : ", a);

var n=window.prompt("Enter sl no of the item You want to modify");

document.writeln("<h2> Effects of passing Array "+
	" element by value</h2> " + 
	"a["+n+"] before modifyElement : " + a[n]);

modifyElement(a[n]);
document.writeln("<br/>"+"a["+n+"]after modifyElement:" +a[n]);

function outputArray(heading, theArray)
{
	document.writeln(heading+ theArray.join(" ") +
		"<br/>");
}

function modifyArray(theArray)
{
	for (var j in theArray)
		theArray[j]*=2;
}

function modifyElement(e)
{
	e*=2;
	document.writeln("<br/> value in modifyElement: " +e);

}

// Sorting arrays: 
var b=[2,9,3,8,6,4,7,1,5,0];
document.writeln("<br/><h2> Sorting of array items :</h2> ")
outputArray("Original Array : ", b);
b.sort(ascendingOrder);
outputArray("Array items in acending order :", b);
b.sort(descendingOrder);
outputArray("Array items in descending Order  :", b);

function ascendingOrder(value1, value2)
{
	return parseInt(value1) - parseInt(value2);
}
function descendingOrder(value1, value2)
{
	return parseInt(value2) - parseInt(value1);
}