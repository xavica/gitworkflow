var sumeven=0;
document.writeln("<h3>Even integers from 2 to 100 are :</h3>" )
for(var numbereven=2; numbereven<=100; numbereven+=2)
	  document.writeln("<a><b>" +numbereven +"</b></a>")
	for(numbereven=2; numbereven<=100; numbereven+=2)
		sumeven+=numbereven;
document.writeln("<h3>The Sum of the even integers" + " from 2 to 100 is : " +sumeven+"</h3>");

var sumodd=0;
document.writeln("<h3>Even integers from 2 to 100 are : </h3>" )
for(var numberodd=1; numberodd<=100; numberodd+=2)
	  document.writeln( "<a> <b>"+numberodd + "</b></a>")
	for(numberodd=1; numberodd<=100; numberodd+=2)
		sumodd+=numberodd;
	document.writeln("<h3>The Sum of the even integers" + " from 2 to 100 is :  " +sumodd +"</h3>");



