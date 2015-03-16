$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[3,8,3,11,8,24,34,45,1,2,3,4,6,55,6];
	 console.log("the Array A is A:",A);
	  var x=_.takeWhile(A,function (n){
        return n<11;  
	  });
	   var y=_.takeWhile(A,function (n){
        return n>2;  
	  });
	  console.log("_.takeWhile(A,fun) is ::",x);
	  console.log("_.takeWhile(A,fun) is ::",y);

	}
