var book = {
	name : 'Playing It My Way',
	author : 'Sachin Tendulkar',
	prescription : function()
	{
		this.cost='700RS';
		this.booktype='Auto Biography';
	},
	publish : function()
	{
		this.firstPublisher="Hodder & Stoughton";
		this.at='Great Britain';
	}
}
book.prescription();
book.publish();
document.writeln("<br/>Name of the book is  <b>" + book.name + "  </b>and author is  <b>" + book.author+" </b>");

document.writeln("<br/>This book is at cost only <b> " + book.cost + "  </b> and this is an <b> "+ book.booktype+ "</b> of <b>"+book.name+" </b>");

document.writeln("<br/> This is has first published by <b>" + book.firstPublisher + "  </b> at   <b>" + book.at+" </b>");
document.writeln("<hr></hr>");

/////////////////////////////////////////////////////////////////////////////////////
var car  =
{
	company : 'Volkswagen',
	model : 'Volkswagen Polo',
	drive : function()
	{
		this.start='press Start button';
		this.accelerate='Give accelerator';
		this.light= "Flash lights";
	},
	stop : function()
	{
		this.breakCar="press break";
	}
}
car.drive();
car.stop();
document.writeln("<br/>This is a  <b>" + car.company + "  </b>company car its model is <b>" + car.model+" .</b>");

document.writeln("<br/>To drive this car <b> " + car.start + "  </b> and <b> "+ car.accelerate+ "</b> if any vehicle coming opposite to you then <b>"+car.light+" </b>");

document.writeln("<br/>If you want to stop the car just  <b>" + car.breakCar + " </b>");
document.writeln("<hr></hr>");

/////////////////////////////////////////////////////////////////////////////////////

var mobile  = 
{
	company:'Apple',
	model :'iphone 6S' ,
	color:'Silver',
	specifications : function()
	{
		this.launch='2014';
		this.display='4.7 inches (~65.8% screen-to-body ratio)';
		this.battery= "Non-removable Li-Po 1810 mAh battery (6.9 Wh)";
	},
	features : function()
	{
		this.sensors="Accelerometer, gyro, proximity, compass, barometer";
		this.messaging="iMessage, SMS (threaded view), MMS, Email, Push Email";
		this.browser="HTML 5 (safari)";
	}
}
mobile.specifications();
mobile.features();
document.writeln("<br/>This is a <b> "+ mobile.company+ "</b> company mobile and this mobile model is latest <b> "+
				 mobile.model + "  </b>in <b>" + mobile.color+" </b> color");

document.writeln("<br/>specifications of this mobile is is  <ul> laucnhed on :<b>" + mobile.launch +
				 "</b></ul><ul> Display: <b>" + mobile.display + "</b></ul><ul> Battery:<b>" + mobile.battery + "</b></ul>");

document.writeln("<br/>Features of this mobile is <ul>sensors: <b>"+
				mobile.sensors+"</b></ul><ul> messaging :"+ mobile.messaging+ "</b></ul><ul> browser: <b>"+mobile.browser+"</b></ul>");
document.writeln("<hr></hr>");
/////////////////////////////////////////////////////////////////////////////////////

var fan  = 
{
	company:'Bajaj',
	color :'White' ,
	functionality : function()
	{
		this.rotations='1000RPM';
		this.typeofFan='ceiling';
	},
	input : function()
	{
		this.power="230V";
		this.status='working properly';
	}
}
fan.functionality();
fan.input();
document.writeln("<br/>This is a <b>" + fan.company + "  </b>company fan and It is in <b>" + fan.color+" </b> color");

document.writeln("<br/>This fan is taking <b>"+ fan.power+"  </b> power and  this fan is <b> "+ fan.status+". </b>");

document.writeln("<br/> This is having <b>" + fan.rotations + "  </b>and this is a  <b>" + fan.typeofFan+" </b> fan ");
document.writeln("<hr></hr>");
/////////////////////////////////////////////////////////////////////////////////////////////////
var bottle  = 
{
	color:'Green',
	specification : function()
	{
		this.capacityofBottle='1 Litre';
		this.company='TuuperWare';
	}
	
}
bottle.specification();
document.writeln("<br/>This is a <b>" + bottle.color + "  </b> color bottle and this is having capacity of <b>" 
				+ bottle.capacityofBottle+"</b> and this is a <b>"+bottle.company+ "</b>company");
document.writeln("<hr></hr>");

//////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////

var chair  = 
{
	type:'Ropc Office Chair',
	company :'Nilkamal' ,
	features : function()
	{
		this.operation='Push Back mechanism with 120 mm stroke gas lift ';
		this.weight='11 Kgs';
	},
	details : function()
	{
			this.productCode='HHDECOM_ROPC_MRNSWMAFR';

	}
}
chair.features();
chair.details();
document.writeln("<br/>This is a <b>" + chair.type + " </b> and it is bran new from  <b>" +chair.company+"</b> company.");
document.writeln("<br/>Features of this chair is <b><ul>"+chair.operation+"</ul><ul> weight: "+chair.weight+"</ul></b>");
document.writeln("<hr></hr>");
//////////////////////////////////////////////////

var mouse  = 
{
	company:'Logitech',
	color :'black' ,
	featuresofMouse : function()
	{
		this.capacity='upto 1 Meter';
		this.type='WireLess';
	}
}
mouse.featuresofMouse();
document.writeln("<br/> Thus mouse is <b>"+mouse.type+" </b>and this is in <b>"+mouse.color +
					 "</b>color <br/> Capacity of this mouse is <b>"+mouse.capacity+"</b> and This is From <b>"+mouse.company+"</b>");
document.writeln("<hr></hr>");
//////////////////////////////////////////////////////////////
var headset  = 
{
	company:'Sony',
	color :'black' ,
	featuresofHeadset : function()
	{
		this.headset='High performance Dolby Digital DTS';
		this.warranty='1 Year';
	}
}
headset.featuresofHeadset();
document.writeln("<br/> This is a Head set from  <b>"+headset.company+" </b>and this is in <b>"+headset.color +
					 "</b>color <br/> this gives  <b>"+headset.headset+"</b>  sound and This is From <b>"+headset.company+"</b> It has <b>"+headset.warranty+"</b>");
document.writeln("<hr></hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var bag  = 
{
	company:'American Tourister',
	type :'Leather' ,
	details : function()
	{
		this.cost='Rs. 999.00';
		this.color='Black';
		this.use='you can this bag for office and Laptop';

	}
}
bag.details();
document.writeln("<br/>we are going into talk about new bag and the bag is from <b>"
					+bag.company+"</b> and This is a <b>"+bag.type+"</b> bag.<br/> Details of this bag is at cost of <b> "
					+bag.cost+"</b>, this a <b>"+bag.color+"</b> color bag and "+bag.use+"</b>");
document.writeln("<hr></hr>");
