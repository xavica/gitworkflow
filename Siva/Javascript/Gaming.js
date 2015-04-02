var WON=0;
var LOST=1;
var CONTINUE_ROLLING=2;

var	firstRoll=true;
var sumofDice=0;
var myPoint=0;
var gameStatus=CONTINUE_ROLLING;

function play()
{
	var point=document.getElementById("pointfield");
	var statusDiv=document.getElementById("status");
	if(firstRoll)
	{
		sumofDice=rollDice();
		switch(sumofDice)
		{
			case 7: case 11:
			gameStatus= WON;
			point.value="";
			break;
			case 2: case 3: case 12: 
			gameStatus=LOST;
			point.value="";
			break;
			default:
			gameStatus=CONTINUE_ROLLING;
			myPoint=sumofDice;
			point.value=myPoint;
			firstRoll=false;

		}//end switch

	}//end if 
	else
	{
		sumofDice=rollDice();

		if (sumofDice==myPoint) 
			gameStatus=WON;
		else
			if(sumofDice==7)
				gameStatus=LOST;
	}//end else
	if(gameStatus==CONTINUE_ROLLING)
		statusDiv.innerHTML="ROll agian";
	else
	{
		if(gameStatus==WON)
			statusDiv.innerHTML="Player wins."+
				"Click Roll Dice to play again.";
		else
			statusDiv.innerHTML="Player loses "+
				"Click Roll Dice to play agian.";
		firstRoll=true;
	}
}
function rollDice()
{
	var	die1;
	var	die2;
	var workSum;
	die1=Math.floor(1+Math.random()*6);
	die2=Math.floor(1+Math.random()*6);
	workSum=die1+die2;
	document.getElementById("die1field").value=die1;
	document.getElementById("die2field").value=die2;
	document.getElementById("sumfield").value=workSum;
	return workSum;

}//end function rollDice

