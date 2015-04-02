$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,5,3,5,4];
		 console.log("Given Array Is A::",A);
	 var x=_.sortedIndex(A, 4);
	 console.log(x);
	 var B=_.sortedIndex([4,4,5,5],5);
	 console.log(B);
}