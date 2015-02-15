function sendmsgFunction() 
{
	var msg = document.getElementById("msg");
           
    document.getElementById('chatZone').innerHTML = document.getElementById('chatZone').innerHTML  +'</br> </br>'+  msg.value;
    document.getElementById('msg').value="";
 
    
} ;
 