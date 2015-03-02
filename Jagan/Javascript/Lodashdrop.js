$(document).ready(callMe); 
	alert("Alert srting is Activated first");
	
	function callMe(){
		var x=_.drop([1, 2, 3,'x','E','y','q','w'],2);

		alert("Now ready is activated and Displayed "+x);
		 document.writeln(" Here we use 2 as input in drop so Hide First Two Elements in the array: and Displayed as:"+x);
	}
