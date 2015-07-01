var v1;
document.writeln("<table>");
document.writeln("<caption><b> Random Numbers</b></caption><tr>");
for(var i=1; i<=100; i++)
{
	v1=Math.floor(1+Math.random()*10);
	document.writeln("<td><b>"+v1+"</b></td>");
 	if(i%10==0&&i!=100)
 		
		document.writeln("</tr><tr>");

setTimeout(function(){
   window.location.reload(1);
}, 1000);
}
