function InterestViewModel()
{
		this.principle = ko.observable('s');
		this.interest = ko.observable('s');
		this.fromDate = ko.observable('');
		this.toDate = ko.observable('');
		
		this.amount = ko.observable('s');
}


 

    var intView = new InterestViewModel();
	ko.applyBindings(intView);

  
  