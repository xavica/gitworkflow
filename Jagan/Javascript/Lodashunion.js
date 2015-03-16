$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[3,8,3,11,8,24,34,45,1,2,3,4,6,55,6];
		 var B=[4,6,7,1,11,3,4,8,43,24];
	 console.log("the Array A is A=",A);
	 console.log("the Array B is B=",B);

	  var x=_.union(A,B);
	   
	  console.log("Union Of Above Two Array's Is ::",x);
	  console.log("\n _.union([1,1,2,3,1,4,5],[2,4,7,11,10],[56,78,90])==",_.union([1,1,2,3,1,4,5],[2,4,7,11,10],[56,78,90]));
       console.log("\n _.union([1,1,2],[2,2,3,4],[3,4,5,4,6])==",_.union([1,1,2],[2,2,3,4],[3,4,5,4,6]));
	}
