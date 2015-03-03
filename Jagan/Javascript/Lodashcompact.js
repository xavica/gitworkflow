$(document).ready(callMe); 
	alert("Alert string is Activated ");
	
	function callMe(){
		var x=_.compact([0,'R','a',false,'y','a','','n',undefined,'N']);
        x=x[0]+x[1]+x[2]+x[3]+x[4]+x[5];
		alert("Now ready is activated and Displayed as the array elements "+x);
		alert(" your name is:: "+x+" \n do u want to print in the Webpage press Ok");
       document.writeln(" Your name is :" + x);
	}
     
