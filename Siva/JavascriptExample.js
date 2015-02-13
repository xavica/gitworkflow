
document.getElementById('Addition').onclick = function()
{
	var x = +document.getElementById('secondNumber').value;
var y = +document.getElementById('firstNumber').value;
 document.getElementById('result').value = x+y; 
}

document.getElementById('Subtraction').onclick = function()
{
	var x = +document.getElementById('firstNumber').value;
var y = +document.getElementById('secondNumber').value;
 document.getElementById('result').value = x-y; 
}
document.getElementById('Multiplication').onclick = function()
{
	var x = +document.getElementById('firstNumber').value;
var y = +document.getElementById('secondNumber').value;
 document.getElementById('result').value = x*y; 
}
document.getElementById('division').onclick = function()
{
	var x = +document.getElementById('firstNumber').value;
var y = +document.getElementById('secondNumber').value;
 document.getElementById('result').value = x/y; 
}
