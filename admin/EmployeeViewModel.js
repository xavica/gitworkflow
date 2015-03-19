function Employee(firstName,lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

function EmployeeViewModel(){
	var that = this,localEmployees, 
	tempList = $.jStorage.get('employees');
	

	that.isEditMode = ko.observable(false),
	that.selectedEmployee = ko.observable(new Employee('',''));
	that.isNew = ko.observable(false);

	if(tempList){
		localEmployees = JSON.parse(tempList)
	}
	localEmployees = localEmployees || [ new Employee('John', 'Gadd'), new Employee('Jagan', 'Jonnala'),
	  new Employee('Gayatri', 'Sarva'),new Employee('Anu','Gurram')];
	
	that.employees = ko.observableArray(localEmployees);

	var lst = ko.toJSON(this.employees());
	$.jStorage.set('employees',lst );

	this.clickSave = function(){
		that.employees.push(that.selectedEmployee());
		setEditMode(false);
		that.selectedEmployee(getEmptyObject());
	}

	this.clickUpdate = function(){
		//update logic need to implement
		//Find an employee
		//Add id
		console.log(that.selectedEmployee());
		setEditMode(false);
		that.selectedEmployee(getEmptyObject());
	}

	this.clickAdd = function(){
		that.selectedEmployee(getEmptyObject());
		this.isNew(true);
		this.isEditMode(false);
	}

	this.clickDelete = function(){
		console.log('delete');
	}

	this.setEditEmployee = function(item){
		that.selectedEmployee(item);
		
		that.isNew(false);
		that.isEditMode(true);
	}

	function setEditMode(status){
		that.isEditMode(status);
	}

	function getEmptyObject(){
		return new Employee('','');
		
	}
}
var vm = new EmployeeViewModel();
ko.applyBindings(vm);


//JSON.stringify() and JSON.parse()