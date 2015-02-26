var x = 1;
function start()
{
	var x=5;
	document.writeln("Local x in start is " +x);
	functionA();
	functionB();
	functionA();
	functionB();

	document.writeln("<p>Local x in start is "+x+" </p>");

}


function functionA()
{
	var x= 25;
	document.writeln("<p>Local x in functionA is "+ x + " before exiting functionA");
	++x;
	document.writeln("<br/> Local x in functionA is " +x+ " after exiting functionA </p>");

}
function functionB()
{
	document.writeln("<p>Global variable x is " +x+ " on entering functionB");
	x*=10;
	document.writeln("<br/> Global variable x is "+x+ " on exiting functionB </p>");

}

