$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,4];
		 var B=['x','a','v'];
		 var C=['i','c','a'];
	 var AB=_.flatten([A,B],[C]);
	 var ABC=_.flatten([A,[B],[C]],true); 
	  var x=_.flatten([1, [2, 3, [4],[8,8,9,0]]]);
	  var y=_.flatten([1, [2, 3, [4],[8,8,9,0]]], true);
	  var z=_.flatten([1, [2, 3, [4],[8,8,9,0]]], false);
	  console.log("the Array After nested is:",x);
	  console.log("the Array After nested is using isdeep true",y);
	  console.log("the Array After nested is using isdeep as false",z);
       console.log(" The Array A is:",A);
       console.log(" The Array B is:",B);
       console.log(" The Array C is:",C);
	  console.log("the Array After nested is doesn't using isdeep",AB);
	  console.log("the Array After nested is using isdeep as true",ABC);
	}
