
function chatFunction() 

{
	var msg = document.getElementById('input_box');       
      
    document.getElementById('section').innerHTML = document.getElementById('section').innerHTML  +'</br> </br>'+  msg.value;
    document.getElementById('input_box').value="";



} ;
 