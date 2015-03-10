$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		var A=[1,2,4,6,8,9];
		var B=[];
		document.writeln("given Array is:" +A+"</br>");
		console.log("Given array is:",A);
		document.writeln("Given second Array is:Empty Array" +B+"<br/>");
		console.log("Given second array is:Empty Array :",B);
		var x=_.first(A);
		var z=_.first(B);
		console.log("first element in the array is:",x);
        console.log("first element in the second array is:",z);
		alert("Now ready is activated and Displayed");
		alert("first element in the array is : " +x);
		alert("first element in the second array is : " +z);
		document.writeln("first element in the array is : "+x+"</br>");
		document.writeln("first element in the second array is : "+z);
        document.writeln("<h3>See output in console also(press F12)</h3>");

	}
