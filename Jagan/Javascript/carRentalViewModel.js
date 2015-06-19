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
	 that.namesArray=[{firstName:"Jagan",lastName:"Jonnala"},
	 {firstName:"Siva",lastName:"Jonnala"},
	 {firstName:"Gayatri",lastName:"Sarva"}];

	 // function fullName(name){
	 // 	return name=that.firstName+that.lastName;
	 // };
	 var data =_.map(namesArray,function(name){
	 	return
	     name=that.firstName+that.lastName;
	 });
	 debugger;
	 console.log(data);
	 console.log(that.firstName,that.lastName);
}
ko.applyBindings(new CarRentalViewModel());