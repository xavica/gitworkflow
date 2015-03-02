$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		var x=_.chunk(['a', 'b', 'c', 'd'],2);

		alert("Now ready is activated and Displayed "+x);
	}
