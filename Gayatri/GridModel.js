function Employee(empId,contactName,contactTitle,companyName,country)
{
	this.empId = empId;
	this.contactName = contactName;
	this.contactTitle = contactTitle;
	this.companyName = companyName;
	this.country = country;
}

function EmployeeGridViewModel()
{
	var that = this;
	this.sourceEmployees =[
						( new Employee(1,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(2,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(3,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(4,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(5,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(6,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(7,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(8,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(9,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(10,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(11,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(12,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(13,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(14,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(15,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(16,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(17,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(18,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(19,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(20,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(21,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(22,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee(23,"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany"))


					];
	that.pageSelection = {
					       pages: [3,5,10,15,20],
					        pageSize: ko.observable(0)
    				};
    that.employees = ko.observableArray(_.slice(that.sourceEmployees,0,that.pageSelection.pageSize()));
   	that.pageNumbers = ko.observableArray([]);
   	var start,end;
    that.pageSelection.pageSize.subscribe(function()
    {      	
    	that.buttonClicked(1)
  	
     });
    	
    	that.buttonClicked = function(pageNumber)
    	{
    		start = +((pageNumber - 1 ) * +that.pageSelection.pageSize()) + 1;
	    	end = +start + +that.pageSelection.pageSize() - 1;
	    	if(end > that.sourceEmployees.length)
	    		end = that.sourceEmployees.length;

	    	that.statusString(start + " - " + end + ' of ' +  that.sourceEmployees.length);
	    	that.employees(_.slice(that.sourceEmployees,start-1,end));
	    	var pageNumbersCount = Math.ceil( that.sourceEmployees.length / +that.pageSelection.pageSize() );
	     	that.pageNumbers(_.times(pageNumbersCount,function(n)
	    		{
	    			return n+1;
	    		}));
	   }
    that.statusString = ko.observable('');
    that.pageSelection.pageSize(3);
}
var emp = new EmployeeGridViewModel();
ko.applyBindings(emp);