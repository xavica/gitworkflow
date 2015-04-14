$(document).ready(callMe); 
	alert("Alert srting is Activated ");
	
	function callMe(){
		 var A=[1,2,3,1,5,3,5,2,1,4];
		 console.log("Given Array Is A::",A);
	 var x=_.pull(A,1,2);
	  console.log("the Array After Using Pull Is like _.pull(A,1,2) = ",x);
	   console.log(" Here By pull function The Same Result Appear In both x and Array A");
	   console.log("Because when We r using this Pull The values we r Given Are Also removed From the Given Array .");
	  var B=['x','a','s','v','o','i','k','s','c','a','s','o'];
		 console.log("Given Original Array Is",B)
	 var y=_.pull(B,'s','o','k');
	 console.log("Given Array Of Strings it Appear as:",y); 

	 var Company=[12,"x",41,7,"a",5,"v",6,"i",7,"c","a",3,7];

	   console.log("The Actual Array is:",Company);
	      var i;
	   var s=_.pull(Company,function(a) {
	   	  for(i=0;i<a.length;i++){

	   	  if(typeof a[i]===Number)
	   	  	return a[i];
	   }
	   	
	   }); 
	 console.log("From the Array The Strings Are Seperated They Are",s);
	 console.log("The NUmbers In the Array are ::",Company); 
	}
