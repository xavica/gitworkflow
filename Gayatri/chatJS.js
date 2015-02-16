
function chatFunction() 
{
	var msg = document.getElementById('input_box');
        var cnt=document.getElementById('icnt').value; 
         var even=parseInt(cnt) % 2;
         if(parseInt(cnt) % 2<1)
          {          
           document.getElementById('section').innerHTML =document.getElementById('section').innerHTML  +'<p><background:green>'+ msg.value +'</background> </p>';
          }
          else
          {            
             document.getElementById('section').innerHTML =document.getElementById('section').innerHTML  +'<p><background:red>'+ msg.value +'</background></p>';
           }
         document.getElementById('input_box').value="";         
         cnt=parseInt(cnt)+parseInt("1");      
         document.getElementById('icnt').value=cnt;
} ;


 