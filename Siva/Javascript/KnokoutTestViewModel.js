function Mobile(){
	this.company = 'Motorola';
	this.model = ko.observable('Moto E 2nd generation');
	this.cost=ko.observable('Rs.6999');
	this.features=ko.observable("Android v5.0 OS"+"--"+"0.3 MP Secondary Cam..");
	this.itemToAdd=ko.observable('');
	this.editData = function()
     {
        if (this.itemToAdd() != "") 
        {
            this.company.push(this.itemToAdd());
            this.itemToAdd("");
        }
    }.bind(this);  


}
var k2 = new Mobile();
ko.applyBindings(k2);