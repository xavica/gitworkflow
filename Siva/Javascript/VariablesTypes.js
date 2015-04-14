"use strict";

var msg ="Hello xavica";

console.log(msg);
var none;
console.log("none is " + typeof(none));

var aNumber=10;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));

noneexistant= "This shoulddn't work";
msgs= "This shoulddn't work1";

if (none===undefined)
{
console.log("none is undefined");
}
if (aNumber===10)
 {
 	console.log("This is eaxctly  a number 10");
 }

if (aNumber=="10")
 {
 	console.log("This is a number 10");
 }
