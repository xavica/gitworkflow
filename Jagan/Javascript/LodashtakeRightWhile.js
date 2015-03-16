$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,4,6,9,3,11,8,24,55,6];
	 console.log("the Array A is A:",A);
	 
	   var x=_.takeRightWhile(A,function (n){
        return n>4;  
	  });
	    var y=_.takeRightWhile(A,function (n){
        return n<24;  
	  });
	  console.log("_.takeRightWhile(A,fun) is ::",x);
	  console.log("_.takeRightWhile(A,fun) is ::",y);

	}
