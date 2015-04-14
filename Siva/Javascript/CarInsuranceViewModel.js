function CarInsuranceViewModel()
{
	var that = this;
	that.zipcode = ko.observable();
	that.age = ko.observable();
	that.gender = ko.observable('');
	that.currentlyInsured = ['21 Century','AAA Isurance ','Formers','Geico','Nationwide','Progress'];
	that.selectedcurrentlyInsured= ko.observable('')
	that.homeowner = ko.observable('');
	that.yourData = ko.observable('');
	that.submit = function(){

		that.yourData('Hi, your Zipcode : '+that.zipcode()+
						'Your Details are 1.Age: '+that.age()+
						' 2.gender: ' +that.gender()+
						' 3.Currently your insurance is: ' +that.selectedcurrentlyInsured()
						);

	}
}
ko.applyBindings(new CarInsuranceViewModel());
