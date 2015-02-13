var colors = ["red", "blue", "yellow", "green", "orange", "black", "cyan", "magenta","purple"]
function changeColor() {
	var x = +document.getElementById("number").value;
    
    if (x == 1) 
    {
    	var col = document.getElementById("first");
    	col.style.backgroundColor =colors[Math.floor((Math.random()*8)+1)];
	
	}
	if (x == 2) 
    {
    	var col = document.getElementById("second");
    	col.style.backgroundColor =colors[Math.floor((Math.random()*8)+1)];
	
	}
	if (x == 3) 
    {
    	var col = document.getElementById("third");
    	col.style.backgroundColor =colors[Math.floor((Math.random()*8)+1)];
	
	}
	if (x == 4) 
    {
    	var col = document.getElementById("fourth");
    	col.style.backgroundColor =colors[Math.floor((Math.random()*8)+1)];
	
	}

    };
    