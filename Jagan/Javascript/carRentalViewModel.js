function CarRentalViewModel()
{
	var that = this;
	that.name = ko.observable('');
	that.airportLocation = ko.observable('');
	that.returnLocation=ko.observable('');
	that.pickUpDate = ko.observable('');
	that.dropOffDate = ko.observable('');
	that.carSize = ['All Sizes','Lorry s','Mini Trucks','Samll Sizes','Vans ','Special cars','volvo Buses'];
	that.selectedCarSize = ko.observable('');
	that.selectedData = ko.observable('');
	that.viewData=function(){
			
				that.selectedData("Hi Congratulations :" +that.name()+ 
								", You have selected :" +that.airportLocation()+
								" AirPort , Your Return Location Is : " + that.returnLocation()+
								" airport , For pick up on :" +that.pickUpDate()+", And drop off on: " +that.dropOffDate()+
								 "  in "+that.selectedCarSize()+".");
			
	};
}
ko.applyBindings(new CarRentalViewModel());