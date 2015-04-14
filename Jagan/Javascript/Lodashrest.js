$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,4];
		 var B=['x','a','v','i','c','a','n'];
	 console.log("the Array A is A:",A);
	  console.log("the Array B is B:",B);
	  var x=_.rest(A);
	  var y=_.rest(B);
	 
	  console.log("the Array A after applying _.rest is::",x);
	  console.log("the Array B After applying _.rest is::",y);
	}
