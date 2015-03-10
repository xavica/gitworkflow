$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,4];
		 var B=['x','a','v'];
		 var C=['i','c','a'];
	 var AB=_.flatten(A,[B],[C]);
	  var ABCD=_.flattenDeep([[A,B],[C]]);
	 var ABC=_.flatten([A,[B],[C]],true); 
	  var x=_.flatten([1, [2, 3, [4],[8,8,9,0]]]);
	  var y=_.flattenDeep([1, [2, 3, [4],[8,8,9,0]]]);
	  console.log("the Array After nested is:",x);
	  console.log("the Array After nested is using _.flattenDeep",y);
       console.log(" The Array A is:",A);
       console.log(" The Array B is:",B);
       console.log(" The Array C is:",C);
       console.log(" x1=The Array After Using _.flattenDeep is:",ABCD);
	  console.log("x2=the Array After nested is using isdeep as true",ABC);
      console.log("\n Observe x1 and x2 they both returns same output..... so _.flattenDeep Passs Argument Directly isdeep as true")
	}
