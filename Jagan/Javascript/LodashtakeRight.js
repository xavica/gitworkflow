$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,4,6,87,2,44,55,6];
		 var B=['x','a','v','i','c','a','n'];
	 console.log("the Array A is A:",A);
	  console.log("the Array B is B:",B);
	  var x=_.takeRight(A,5);
	  var y=_.takeRight(B,4);
	  var z=_.take(B,3);
	  console.log("_.takeRight(A,5) is ::",x);
	  console.log("_.takeRight(B,4) is ::",y);
      console.log("Company Name like in characters  is ::",(z+y));
	}
