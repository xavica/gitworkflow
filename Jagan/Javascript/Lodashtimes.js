$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		var x=_.times(3);
		var y=_.times(20,function(i)
		{
			return i*2;
		});

		alert("Now ready is activated and Displayed ");
		alert("the array contains values are :"+x);
		alert("The second array contains that :" + y);

	document.writeln(" The array x contains that the values:"+x+"<br />");
	document.writeln(" The array y contains that the values:"+y);
	}
