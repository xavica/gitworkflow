$(document).ready(callMe); 
	alert("Alert srting is Activated first");
	
	function callMe(){
		var x=_.dropRightWhile([-5,-4,-6,0,1, 2,-7,-3,3,-123], function(n) {
			return n < 1;
		});
         console.log(x);
		alert("Now ready is activated and Displayed "+x);
		}

