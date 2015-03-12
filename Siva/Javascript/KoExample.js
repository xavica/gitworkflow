function Mobile(){
	
	this.company = 'Motorola';
	this.model = 'Moto E 2nd generation';
	this.cost='Rs.6999';
	this.features="Android v5.0 OS"+"--"+"0.3 MP Secondary Cam..";
}

var mo = new Mobile();
ko.applyBindings(mo);
