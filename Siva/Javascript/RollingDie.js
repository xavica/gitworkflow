var f1=0;
var f2=0;
var f3=0;
var f4=0;
var f5=0;
var f6=0;
var face;
//Rolling die for some times and accumulate results
for (var roll=1; roll<=6; roll++)
{
	face=Math.floor(1+Math.random()*6);

	switch(face)
	{
		case 1:
			++f1;
			break;
		case 2:
			++f2;
			break;
		case 3:
			++f3; 
			break;
		case 4:
			++f4;
			break;
		case 5:
			++f5;
			break;
		case 6:
			++f6;
			break;


	}//here we will end switch
setTimeout(function(){
   window.location.reload(1);
}, 1000);
}// here we will end for loop

document.writeln("<table border=\"1\">");
document.writeln("<th>Face</th>"+
	"<th>Frequency(The prbability of getting the number)</th>");
document.writeln("<tr><td>1</td><td>"+f1+"</td></tr>")
document.writeln("<tr><td>2</td><td>"+f2+"</td></tr>")
document.writeln("<tr><td>3</td><td>"+f3+"</td></tr>")
document.writeln("<tr><td>4</td><td>"+f4+"</td></tr>")
document.writeln("<tr><td>5</td><td>"+f5+"</td></tr>")
document.writeln("<tr><td>6</td><td>"+f6+"</td></tr></table>");

