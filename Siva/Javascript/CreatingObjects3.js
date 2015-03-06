function Book()
{
	this.name ='Playing It My Way' ;
	this.author='Sachin Tendulkar';
	this.prescription=function()
	{
		this.cost='700RS';
		this.booktype='Auto Biography';
	};
	this.publish=function()
	{
		this.firstPublisher="Hodder & Stoughton";
		this.at='Great Britain';
	}
}

var b= new Book();
b.prescription();
b.publish();
document.writeln("<br/>Name of the book is  <b>" + b.name + "  </b>and author is  <b>" + b.author+" </b>");

document.writeln("<br/>This book is at cost only <b> " + b.cost + "  </b> and this is an <b> "+ b.booktype+ "</b> of <b>"+b.name+" </b>");

document.writeln("<br/> This is has first published by <b>" + b.firstPublisher + "  </b> at   <b>" + b.at+" </b>");
document.writeln("<hr></hr>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Car()
{
	this.company ='Volkswagen' ;
	this.model='Volkswagen Polo';
	this.drive=function()
	{
		this.start='press Start button';
		this.accelerate='Give accelerator';
		this.light= "Flash lights";
	},
	this.stop=function()
	{
		this.breakCar="press break";
	}
}
var c= new	Car();
c.drive();
c.stop();
document.writeln("<br/>This is a  <b>" + c.company + "  </b>company car its model is <b>" + c.model+" .</b>");

document.writeln("<br/>To drive this car <b> " + c.start + "  </b> and <b> "+ c.accelerate+ "</b> if any vehicle coming opposite to you then <b>"+c.light+" </b>");

document.writeln("<br/>If you want to stop the car just  <b>" + c.breakCar + " </b>");
document.writeln("<hr></hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Mobile()
{
	this.company ='Apple' ;
	this.model='model';
	this.color='Silver';
	this.specifications=function()
	{
		this.launch='2014';
		this.display='4.7 inches (~65.8% screen-to-body ratio)';
		this.battery= "Non-removable Li-Po 1810 mAh battery (6.9 Wh)";
	},
	this.features=function()
	{
		this.sensors="Accelerometer, gyro, proximity, compass, barometer";
		this.messaging="iMessage, SMS (threaded view), MMS, Email, Push Email";
		this.browser="HTML 5 (safari)";
	}
}
var mobile= new Mobile();
mobile.specifications();
mobile.features();
document.writeln("<br/>This is a <b> "+ mobile.company+ "</b> company mobile and this mobile model is latest <b> "+
				 mobile.model + "  </b>in <b>" + mobile.color+" </b> color");

document.writeln("<br/>specifications of this mobile is is  <ul> laucnhed on :<b>" + mobile.launch +
				 "</b></ul><ul> Display: <b>" + mobile.display + "</b></ul><ul> Battery:<b>" + mobile.battery + "</b></ul>");

document.writeln("<br/>Features of this mobile is <ul>sensors: <b>"+
				mobile.sensors+"</b></ul><ul> messaging :"+ mobile.messaging+ "</b></ul><ul> browser: <b>"+mobile.browser+"</b></ul>");
document.writeln("<hr></hr>");

////////////////////////////////////////////////////////////////////////////////////////////
function Fan()
{
	this.company ='Bajaj' ;
	this.color='White';
	this.functionality=function()
	{
		this.rotations='1000RPM';
		this.typeofFan='ceiling';
	},
	this.input=function()
	{
		this.power="230V";
		this.status='working properly';
	}
}
var fan = new Fan();
fan.functionality();
fan.input();
document.writeln("<br/>This is a <b>" + fan.company + "  </b>company fan and It is in <b>" + fan.color+" </b> color");

document.writeln("<br/>This fan is taking <b>"+ fan.power+"  </b> power and  this fan is <b> "+ fan.status+". </b>");

document.writeln("<br/> This is having <b>" + fan.rotations + "  </b>and this is a  <b>" + fan.typeofFan+" </b> fan ");
document.writeln("<hr></hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Bottle()
{
	this.color='Green';
	this.specification=function()
	{
		this.capacityofBottle='1 Litre';
		this.company='TuuperWare';
	}
}
var bottle= new Bottle();
bottle.specification();
document.writeln("<br/>This is a <b>" + bottle.color + "  </b> color bottle and this is having capacity of <b>" 
				+ bottle.capacityofBottle+"</b> and this is a <b>"+bottle.company+ "</b>company");
document.writeln("<hr></hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Chair()
{
	this.type='Ropc Office Chair';
	this.company='Nilkamal';
	this.features=function()
	{
		this.operation='Push Back mechanism with 120 mm stroke gas lift ';
		this.weight='11 Kgs';
	},
	this.details=function()
	{
		this.productCode='HHDECOM_ROPC_MRNSWMAFR';
	}
}
var chair= new Chair();
chair.features();
chair.details();
document.writeln("<br/>This is a <b>" + chair.type + " </b> and it is bran new from  <b>" +chair.company+"</b> company.");
document.writeln("<br/>Features of this chair is <b><ul>"+chair.operation+"</ul><ul> weight: "+chair.weight+"</ul></b>");
document.writeln("<hr></hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////
function Mouse()
{
	this.color='Logitech';
	this.company='Logitech';
	this.featuresofMouse=function()
	{
		this.capacity='upto 1 Meter';
		this.type='WireLess';
	}
}
var mouse= new Mouse();
mouse.featuresofMouse();
document.writeln("<br/> Thus mouse is <b>"+mouse.type+" </b>and this is in <b>"+mouse.color +
					 "</b>color <br/> Capacity of this mouse is <b>"+mouse.capacity+"</b> and This is From <b>"+mouse.company+"</b>");
document.writeln("<hr></hr>");
////////////////////////////////////////////////////////////////////////////////////////////////////
function Headset()
{
	this.color='White';
	this.company='Sony';
	this.featuresofHeadset=function()
	{
		this.headset='High performance Dolby Digital DTS';
		this.warranty='1 Year';
	}
}
var headset= new Headset();
headset.featuresofHeadset();
document.writeln("<br/> This is a Head set from  <b>"+headset.company+" </b>and this is in <b>"+headset.color +
					 "</b>color <br/> this gives  <b>"+headset.headset+"</b>  sound and This is From <b>"+headset.company+"</b> It has <b>"+headset.warranty+"</b>");
document.writeln("<hr></hr>");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Bag()
{
	this.company='American Tourister';
	this.type='Leather';
	this.details=function()
	{
		this.cost='Rs. 999.00';
		this.color='Black';
		this.use='you can this bag for office and Laptop';
	}
}
var bag = new Bag();
bag.details();
document.writeln("<br/>we are going into talk about new bag and the bag is from <b>"
					+bag.company+"</b> and This is a <b>"+bag.type+"</b> bag.<br/> Details of this bag is at cost of <b> "
					+bag.cost+"</b>, this a <b>"+bag.color+"</b> color bag and "+bag.use+"</b>");
document.writeln("<hr></hr>");