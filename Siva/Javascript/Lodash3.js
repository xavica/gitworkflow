
	
// var a = [ 'a','r','r','a','y'];
var a=['Welcome','to ' ,'Xavica', 'Sofware', 'Solutions','JavaScript', 'programmig'];
 document.writeln("<br/> <br/><h1>"+a.toString()+"</h1>");
 var b=[];

 var n = a.length;

 while (n != 0)
 {
 	for (var i = 1; i <= 6; i++)
 	{
  a = _.dropRight(a,1);
  

  // document.writeln("<h1>"+a.toString()+"</h1>");
    document.writeln("<h"+i+">"+a.toString()+"</h"+i+">");

   n = a.length;
}
 }