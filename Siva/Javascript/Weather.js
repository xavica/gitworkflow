var weatherType= prompt("What it is like outside ?\n 1.sunny \n 2.rainy \n 3.cloudy \n 4.windy \n 5.cold", "");

switch(weatherType)
{
	case "sunny":
		alert("It's sunny outside !!!! Go out and play!!!");
		document.body.style.backgroundImage ="url('Images/Weather/Weather1.jpg')";
		break;
	case "rainy":
		alert("It's rainy outside !!!!Stay inside !!!");
		document.body.style.backgroundImage ="url('Images/Weather/Weather2.jpg')";
		break;
	case "cloudy":
		alert("It's cloudy outside !!!! Stay inside or take an umbrella and go out!!!");
		document.body.style.backgroundImage ="url('Images/Weather/Weather3.jpg')";
		break;
	case "windy":
		alert("It's windy outside !!!! Carry a Jacket!!!");
		document.body.style.backgroundImage ="url('Images/Weather/Weather4.jpg')";
		break;
	case "cold":
		alert("It's cold outside !!!! Don't forget ur coat!!!");
		document.body.style.backgroundImage ="url('Images/Weather/Weather5.jpg')";
		break;
	default:
		alert("I don't Know that type of weather");
		break;

}