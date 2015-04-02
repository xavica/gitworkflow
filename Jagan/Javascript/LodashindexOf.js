$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		var A=[1,2,4,6,3,5,8,7,9,34,45,55];
		var len=A.length;
		console.log("length of the array is:",len);
		for(var j=0;j<=(len-1);j++)
		{
		  var x=_.indexOf(A,A[j]);
		  console.log("Index Value of Element "+ A[j] +" are: ",x);
        }
       var y=_.indexOf([1,2,3,2,4,5,3],3,3); 
		alert("Now ready is activated and Displayed ");
		console.log("Index value of Required element is:",y);
		
	}
