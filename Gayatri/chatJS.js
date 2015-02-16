
function chatFunction() 

{
	var msg = document.getElementById("input_box");
	var cmsg = document.getElementById("chat_box");

	document.getElementById("chat_box").value = cmsg.value + msg.value;
	document.getElementById("input_box").value = "";



} ;
 