function Employee(contactName,contactTitle,companyName,country)
{
	this.contactName = contactName;
	this.contactTitle = contactTitle;
	this.companyName = companyName;
	this.country = country;
}

function EmployeeGridViewModel()
{

	this.employees =[
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
}
var emp = new EmployeeGridViewModel();
ko.applyBindings(emp);