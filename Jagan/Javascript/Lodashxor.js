$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,4];
		 var B=[3,2,4];
		 var C=[3,6];
	 console.log("the Array A is A=",A);
	 console.log("the Array B is B=",B);
	 console.log("the Array C is B=",C);
	 var r=_.xor(A,B);
	 var x=_.xor(A,B,C);
	  console.log("Using xor operation _.xor(A,B,C) ::",x);
	  console.log("Using xor operation _.xor(A,B) ::",r);
	   console.log("_.xor([1,2],[2,4]) value is:",_.xor([1,2],[2,4]));
}