function RateOfInterestViewModel(){
	var that= this;
	that.principleAmount = ko.observable(0);
	that.rateOfInterest = ko.observable(0);
	that.fromDate = ko.observable('');
	that.toDate = ko.observable('');
	that.totalAmount = ko.observable(0);
	that.calculate = function(){
		if(that.principleAmount()||that.rateOfInterest()||that.fromDate()||that.toDate() !=0||false||undefined||NaN)
		{
			var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
			var numberofdays= (new Date(that.toDate())- new Date(that.fromDate()))/oneDay;
			console.log(numberofdays);
			that.totalAmount('Total Amount is ' + (that.principleAmount()* that.rateOfInterest()*numberofdays)/100+ ' for '+ numberofdays + ' Days');
			console.log(that.totalAmount());
		}
		else
		{
			that.totalAmount('Please fill all the requirements')
		}
	};

}
ko.applyBindings(new RateOfInterestViewModel());
