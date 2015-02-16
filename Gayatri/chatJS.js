
function chatFunction() 
{
	var msg = document.getElementById('input_box');
        var cnt=document.getElementById('icnt').value; 
 
         if(parseInt(cnt) % 2===0)
          {          
           document.getElementById('section').innerHTML =document.getElementById('section').innerHTML  +'<p>'+ msg.value +'</p>';
          }
          else
          {            
             document.getElementById('section').innerHTML =document.getElementById('section').innerHTML  +'<p>'+ msg.value +'</p>';
           }
         document.getElementById('input_box').value="";         
         cnt=cnt+1;     
        
} ;


 