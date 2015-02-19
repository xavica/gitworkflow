
var cnt=0;
document.getElementById('send_button').onclick = function()
{

	var y = +document.getElementById('input_box').value;
	cnt=cnt+1;
  	document.getElementById(y).style.backgroundColor ="#FFCCCC";
  	document.getElementById('input_box').value="";
  	
}