$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[3,8,3,11,8,24,24,45,1,2,3,4,6,6];
		 var B=[4,4,3,3,1,1,2,2];
	 console.log("the Array A is A=",A);
	 var x=_.without(A,3,11,24,6);
	 var y=_.without(B,4,3,1);
	  console.log("Using Without The Array turn as ::",x);
	   console.log("the Array B is B=",B);
	  console.log("_.without(B,4,3,1) value is:",y);
	   console.log("_.without([1,2,,7,,4],4,2,1) value is:",_.without([1,2,,7,,4],4,2,1));
}