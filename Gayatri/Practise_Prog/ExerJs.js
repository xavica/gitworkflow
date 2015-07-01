
var cnt=0;
var temp=0;
document.getElementById('send_button').onclick = function()
{

	var y = +document.getElementById('input_box1').value;
	var x= +document.getElementById('input_box2').value;

	if(x===1)
	{
		document.getElementById(y).style.backgroundColor ="#CC66CC";
		cnt=cnt+x;
		temp++;
	}

	if(x===2)
	{
		document.getElementById(y).style.backgroundColor ="#CCCC99";
		cnt=cnt+x;
		temp++;
	}

	if(x===3)
	{
		document.getElementById(y).style.backgroundColor ="#FFCC66";
		cnt=cnt+x;
		temp++;
	}

	if(x===4)
	{
		document.getElementById(y).style.backgroundColor ="#FFCC99";
		cnt=cnt+x;
		temp++;
	}

	if(x===5)
	{
		document.getElementById(y).style.backgroundColor ="#FFCCCC";
		cnt=cnt+x;
		temp++;
	}

	
  	document.getElementById('input_box1').value="";
  	document.getElementById('input_box2').value="";
  	
}


document.getElementById('stat_button').onclick = function()
{
	var avg = cnt/temp;
	
	if (avg>=1 && avg<2)
	{
		document.getElementById('input_box3').style.backgroundColor ="#CC66CC";
		document.getElementById('input_box3').value = "POOR"
	}
	if (avg>=2 && avg<3)
	{
		document.getElementById('input_box3').style.backgroundColor ="#CCCC99";
		document.getElementById('input_box3').value = "AVERAGE"
	}
	if (avg>=3 && avg< 4)
	{
		document.getElementById('input_box3').style.backgroundColor ="#FFCC66";
		document.getElementById('input_box3').value = "GOOD"
	}
	if (avg>=4 && avg<5)
	{
		document.getElementById('input_box3').style.backgroundColor ="#FFCC99";
		document.getElementById('input_box3').value = "EXCELLENT"
	}
	if (avg===5)
	{
		document.getElementById('input_box3').style.backgroundColor ="#FFCCCC";
		document.getElementById('input_box3').value = "EXPERT"
	}
}