$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[3,8];
		 var B=[4,6];
		 var C=[true,false];
		 var B1=[[1,1,true],[2,1,false]];
	 var A1=_.zip(A,B,C);
	  var x=_.unzip(A1);
	  var y=_.unzip(B1);
	  console.log("the Array A is A=",A);	
	 console.log("the Array B is B=",B);
	 console.log("the Array C is C=",C);
	  console.log("zipped array of A,B,C is:: ::",A1);
     console.log("Unzipped array is::",x);
     console.log("The Array B1 is::",B1	);
      console.log("Unzipped array of B1 is::",y);
		}
