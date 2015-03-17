$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[3,8,3,11,8,24,1,2,3,4,6,24,6];
		 var B=[4,6,7,1,7,11,3,3,8,43,43,24,24];
	 
	  var x=_.uniq(A);
	  var y=_.uniq(B);
	  console.log("the Array A is A=",A);
	  console.log("It Prints The Array of Elements in one time excepts All the repeated means Uniq elements Of Above Array'  ::",x);
	  console.log("\n the Array B is B=",B);
	  console.log("It Prints The Array of Elements in one time excepts All the repeated means Uniq elements Of Above Array'  ::",y);
	  console.log("\n_.uniq([1,1,3,2,1,4,4,5,5,6,6]) is == ",_.uniq([1,1,3,2,1,4,4,5,5,6,6]));
	}
