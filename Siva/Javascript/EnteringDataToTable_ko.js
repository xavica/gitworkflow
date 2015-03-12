function Mobile(company, model, cost){
	this.company = company;
	this.model = model;
	this.cost = cost;
	};

function MobileFeatures(){
	var that = this;
	
	this.mobiles = [ 	new Mobile('Motorola', 'Moto E', 'Rs.6999'),
						new Mobile('Sony', 'X peria', 'Rs.10000'),
						new Mobile('Samsung','Galaxy Note III', 'Rs.15000')
					];
}
var m= new MobileFeatures();
ko.applyBindings(m);