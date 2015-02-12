document.getElementById('add').onclick = function()
{
	var x = +document.getElementById('secondNumber').value;
var y = +document.getElementById('firstNumber').value;
 document.getElementById('result').value = x+y; 
}

document.getElementById('sub').onclick = function()
{
	var x = +document.getElementById('firstNumber').value;
var y = +document.getElementById('secondNumber').value;
 document.getElementById('result').value = x-y; 
}
document.getElementById('mul').onclick = function()
{
	var x = +document.getElementById('firstNumber').value;
var y = +document.getElementById('secondNumber').value;
 document.getElementById('result').value = x*y; 
}
document.getElementById('div').onclick = function()
{
	var x = +document.getElementById('firstNumber').value;
var y = +document.getElementById('secondNumber').value;
 document.getElementById('result').value = x/y; 
}
document.getElementById('Squares').onclick = function()
{
	var x = +document.getElementById('firstNumber').value;
        
 document.getElementById('result').value = (x*x); 
}
document.getElementById('Square').onclick = function()
{
	 var y = +document.getElementById('secondNumber').value; 
 document.getElementById('result').value = (y*y); 
}
document.getElementById('sqrtx').onclick = function()
{
	 var x = +document.getElementById('firstNumber').value; 
 document.getElementById('result').value = Math.sqrt(x); 
}
document.getElementById('sqrty').onclick = function()
{
	 var y = +document.getElementById('secondNumber').value; 
 document.getElementById('result').value = Math.sqrt(y); 
}