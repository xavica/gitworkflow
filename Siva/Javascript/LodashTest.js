	$(document).ready(callMe); 
	alert("alert srting is called ");
	
	function callMe(){
		var x=_.chunk(['a', 'b', 'c', 'd'], 3);

		alert("Now ready is called "+x);
	}

