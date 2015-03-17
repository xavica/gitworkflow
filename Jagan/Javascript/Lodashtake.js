$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,4,6,87,2,44,55,6];
		 var B=['x','a','v','i','c','a','n'];
	 console.log("the Array A is A:",A);
	  console.log("the Array B is B:",B);
	  var x=_.take(A,5);
	  var y=_.take(B,4);
	 
	  console.log("_.take(A,5) is ::",x);
	  console.log("_.take(B,4) is ::",y);
	}
