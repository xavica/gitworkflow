var ip1=window.prompt("Enter First Number", "0");
var ip2=window.prompt("Enter Second Number", "0");
var ip3=window.prompt("Enter Third Number", "0");

var v1=parseFloat(ip1);
var v2= parseFloat(ip2);
var v3= parseFloat(ip3);
var vMax=maximum(v1, v2, v3);
document.writeln("<h1>First Number: "+v1+
	"</h1><h1>Second Number:"+v2+
	"</h1><h1>Third Number: "+v3+
	"</h1><h1>Maximum Number: "+vMax+"</h1>");
function maximum(a, b, c)
{
	// body...
	return Math.max(a,Math.max(b,c));
}