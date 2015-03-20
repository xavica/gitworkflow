function Employee(contactName,contactTitle,companyName,country)
{
	this.contactName = contactName;
	this.contactTitle = contactTitle;
	this.companyName = companyName;
	this.country = country;
}

function EmployeeGridViewModel()
{
	var that = this;
	this.sourceEmployees =[
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee("Maria Anders","sales Representative", "Alfreds Futterkiste","Germany"))


					];
	that.pageSelection = {
					       pages: ['1','2','5','7'],
					        pageSize: ko.observable('5')
    				};
    that.employees = ko.observableArray(_.slice(that.sourceEmployees,0,that.pageSelection.pageSize()));

    that.pageSelection.pageSize.subscribe(function()
    {
    	console.log(that.pageSelection.pageSize());
    	that.employees(_.slice(that.sourceEmployees,0,that.pageSelection.pageSize()));

    });




}
var emp = new EmployeeGridViewModel();
ko.applyBindings(emp);