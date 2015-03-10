$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,1,5,3,5,2,1,4];
		 console.log("Given Array Is A::",A);
	 var x=_.pullAt(A,1,2);

	  console.log("the Array Using PullAt Is like _.pullAt(A,1,2)(it seperates the values of indexes 1,2) = ",x);
	  console.log("The Given Array After Using pullAt is",A);

	   var Company=[12,'x',41,7,'a',5,'v',6,'i',7,'c','a',3,7];
	  /* console.log("The Actual Array is:",Company);
	   var s=_.pullAt(Company,function(i) {
	   	  if(typeof(Company[i])==String)
	   	  	return i;
	   });	 
	  console.log("The Company NAme is:",s); */
	}
