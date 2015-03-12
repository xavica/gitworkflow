function Mobile(){
	this.company = ko.observable('Motorola');
	this.model = ko.observable('Moto E 2nd generation');
	this.cost=ko.observable('Rs.6999');
	this.features=ko.observable("Android v5.0 OS"+"--"+"0.3 MP Secondary Cam..");

}
var k2 = new Mobile();
ko.applyBindings(k2);