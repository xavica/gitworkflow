window.alert("Welcome to \n XAVICA \n Developers team")
var name;
var now= new Date();//current date and time
var hour=now.getHours();
name=window.prompt("Please Enter your Name");
//determining the time
if(hour<12)
	document.write("<h1>Good Morning,</h1>")
if (hour>12)
{
	hour=hour-12;
	if(hour<6)
	{
		document.write("<h1>Good Afternoon</h1>")

	}
	if (hour>=6)
	{
		document.write("<h1>Good Evening</h1>")
	}
}
document.writeln(" <h1> Hello " + name + ", Welcome to Javascript Programming!</h1>");
// string Entered by user
var firstNumber;
var secondNumber;
//var x1; var x2; 
var sum; var sub; var div; var mul;
//reading number s as entered by the user
firstNumber=window.prompt("Enter 1st number");
secondNumber=window.prompt("Enter 2nd Number");
x1=parseInt(firstNumber);
x2=parseInt(secondNumber);
//taking operations
sum=x1+x2;
sub=x1-x2;
mul=x1*x2;
div=x1/x2;
//display results

document.writeln("<h1>small arthemetic operations</h1>");
document.writeln("<h2> Addition of two numbers is " + sum +"</h2>");
document.writeln("<h2> Subtration of two numbers is " + sub +"</h2>");
document.writeln("<h2> Multiplication of two numbers is " + mul +"</h2>");
document.writeln("<h2> Division of two numbers is " + div +"</h2>");

