var s1=	window.prompt("Enter any Word");
var s2="SoftWareSolutionS";
var n=window.prompt("Enter the any index number in "+s1+" ");
if(n>=s1.length)
	document.writeln("you have entered invalid number")
else
document.writeln("<p> Character at index "+n+" "+ s1 +" is "+ s1.charAt(n)+" and Character code at index "+n+" is "+ s1.charCodeAt(n)+"</p>");


document.writeln("<p>"+String.fromCharCode(87,79,82,68)
	+"contains character codes 87,79,82 and 68 </p>");

document.writeln("<p>"+s2 +" in lowercase is  "+ s2.toLowerCase()+"</p>");

document.writeln("<p>"+s2 +" in uppercase is  "+ s2.toUpperCase()+"</p>");

