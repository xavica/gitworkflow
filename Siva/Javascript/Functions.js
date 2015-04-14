// function showMsg(msg){
// 	console.log("showMsg: " + msg);
// }
function showMsg(msg, more) {
	if (more) {
		console.log("showMsg+ " + msg + more);
	} else
	{
		console.log("showMsg + " +msg);
	}
	
}
showMsg("some information");
showMsg("more information ", "and even more");

