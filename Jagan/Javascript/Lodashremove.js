$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,1,5,3,5,2,1,4];
		 console.log("Given Array Is A::",A);
	 var x=_.remove(A, function(i){
	 	if (i % 2==0)
	 	return i;	
	 });
	 console.log("The Actual Array After Using Remove Is as:",A);
	  console.log("the Array of elements Using _.remove Are = ",x);

	 var Company=[12,'x',41,7,'a',5,'v',6,'i',7,'c','a',3,7];

	   console.log("The Actual Array is:",Company);
	   var s=_.remove(Company,function(i){
	   	  if(typeof(i)=== "string")
	   	  	return i;				
	   }); 
	 console.log("From the Array The Strings Are Seperated They Are",Company);
	 console.log("The NUmbers In the Array are (Removed elements are)::",s); 
	}
