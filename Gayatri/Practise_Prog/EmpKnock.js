function Employee(firstName,lastName)
{
	this.firstName = firstName;
    this.lastName = lastName;
}

function EmployeeViewModel()
{
	var that = this,localEmployees;
	// tempList = $.jStorage.get('employees');
	// if(tempList)
	// {
	// 	localEmployees = JSON.parse(tempList)
	// }
	localEmployees = localEmployees || [   new Employee("Gayatri","sarva"),
						 new Employee("Siva","Jonnala"),
						 new Employee("Jagan","Jonnala")
					];

	that.employees = ko.observableArray(localEmployees);


	that.clickRow = function(data)
	{
		that.employee(data);
		that.isEdit(true);
	 }
	that.employee = ko.observable(new Employee('',''));
	
	this.clickAdd = function()
	{
		console.log("Add button clicked");
		that.isNew(true);
	}
	this.clickSave = function()
	{
		console.log("save button clicked");
		that.isNew(false);
		
	}
	that.isEdit = ko.observable(false);
	that.isNew = ko.observable(false);

	this.clickUpdate = function()
	{
		console.log("update");
		that.isEdit(false);
	}
	this.clickDelete = function()
	{
		console.log("delete");
		that.isEdit(false);
	}
}
var k = new EmployeeViewModel();
ko.applyBindings(k);