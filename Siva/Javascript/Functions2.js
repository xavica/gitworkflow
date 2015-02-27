var showIt= function(msg)
{
	console.log(msg);
}
showIt("some message");

function showItThen(msg, callback)
{
	showIt(msg);
	callback();
}
showItThen("showItThen called", function() {
	console.log("called callback");
});