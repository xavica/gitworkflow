var total;
var gradeCounter;
var grade;
var gradeValue;
var average;
var num;
num=window.prompt("Enter number of items (only in digits):")

total=0;
gradeCounter=1;

while(gradeCounter<=num)
{
//loop 10 times
	//prompt for input and read grade from user
	grade = window.prompt("Enter integer grade:","0");
	//{//convert grade from a string to an integer
	gradeValue = parseInt(grade);
	// add gradeValue to total
	total= total+gradeValue;
	//add 1 to gradeCounter
	gradeCounter=gradeCounter+1;

}//end loop
//termination phase
average=total/num; 
document.writeln("<h1> Class average is " +average+"</h1>");
