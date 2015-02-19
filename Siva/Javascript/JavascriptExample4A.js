var total;
var gradeCounter;
var grade;
var gradeValue;
var average;
total=0;
gradeCounter=0;
//prompt for input and read grade from user
	grade = window.prompt("Enter grade, -1 to quit:","0");
	//{//convert grade from a string to an integer
	gradeValue = parseInt(grade);

while(gradeValue != -1)
{
//loop 10 times
	
	
	// add gradeValue to total
	total= total+gradeValue;
	//add 1 to gradeCounter
	gradeCounter=gradeCounter+1;
	grade= window.prompt("Enter grade, -1 to quit:","0");
	gradeValue= parseInt(grade);

}
 //end loop
 if(gradeCounter!=0)
 {
 	average=total/gradeCounter;
 	document.writeln("<h1> Class average is " + average + "</h1>");
 }
 else
 	document.writeln("<p> No grades were entered</p>");
//termination phase
average=total/num; 
document.writeln("<h1> Class average is " +average+"</h1>");
