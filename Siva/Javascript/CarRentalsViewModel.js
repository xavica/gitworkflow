function CarRentalViewModel()
{
	var that = this;
	that.name = ko.observable('');
	that.airportLocation = ko.observable('');
	that.pickUpDate = ko.observable('');
	that.dropOffDate = ko.observable('');
	that.carSize = ['All Sizes','Samll Sizes','Vans ','Special cars'];
	that.selectedCarSize = ko.observable('');
	that.selectedData = ko.observable('');
	that.viewData=function(){
			
				that.selectedData("Hi Congratulations :" +that.name()+ 
								", Your have selected :" +that.airportLocation()+
								"airport , For pick up on :" +that.pickUpDate()+", And drop off on: " +that.dropOffDate()+
								 ' in '+that.selectedCarSize());
			
	};
}
ko.applyBindings(new CarRentalViewModel());