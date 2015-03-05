$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,4,'x','v'];
		 var B=['x','a','v','i',1,4,'c','a','n'];
	 console.log("the Array A is A:",A);
	  console.log("the Array B is B:",B);
	  var x=_.intersection(A,B);
	  var y=_.intersection(B,A);
	 
	  console.log("the Array A after applying _.intersection AB is::",x);
	  console.log("the Array B After applying _.intersection BA is::",y);

	  console.log("\n Observe The Difference above");
	}
