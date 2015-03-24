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
						( new Employee('1',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('2',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('3',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('4',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('5',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('6',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('7',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('8',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('9',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('10',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('11',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('12',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('13',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('14',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('15',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('16',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('17',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('18',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('19',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('20',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('21',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('22',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany")),
						( new Employee('23',"Maria Anders","sales Representative", "Alfreds Futterkiste","Germany"))


					];
	that.pageSelection = {
					       pages: [3,5,10,15,20],
					        pageSize: ko.observable(0)
    				};
    that.employees = ko.observableArray(_.slice(that.sourceEmployees,0,that.pageSelection.pageSize()));
   	that.pageNumbers = ko.observableArray([]);
   	var start,end;
  	that.temp = ko.observable();
    that.pageSelection.pageSize.subscribe(function()
    {      	
    	that.buttonClicked(1)
  	
     });
    that.pageStatus = ko.observableArray([]);
   	that.buttonClicked = function(pageNumber)
    {
    		start = +((pageNumber - 1 ) * +that.pageSelection.pageSize()) + 1;
	    	end = +start + +that.pageSelection.pageSize() - 1;
	    	if(end > that.sourceEmployees.length)
	    		end = that.sourceEmployees.length;
	    	var pageNumbersCount = Math.ceil( +that.sourceEmployees.length / +that.pageSelection.pageSize() );
	    	
	    	that.pageNumbers(_.times(pageNumbersCount,function(n)
	    		{
	    			return n+1;
	    		}));
	    	that.statusString(start + " - " + end + ' of ' +  that.sourceEmployees.length);
	    	that.employees(_.slice(that.sourceEmployees,start-1,end));
	    	that.temp(pageNumber);

	 }
    that.statusString = ko.observable('');
    that.pageSelection.pageSize(3);
    that.displayRecord = ko.observable(new Employee('','','','',''));
    that.foundRecord = ko.observableArray([]);
    that.isEdit = ko.observable(false);
    that.isNew = ko.observable(false);
    that.isFind = ko.observable(false);
    that.inputValue = ko.observable('');

    that.clickDisplay = function(clickedRow)
	{
		that.displayRecord(clickedRow);
		that.isEdit(true);
		that.isNew(true);
		
	}
	this.clickNew = function()
	{
		that.displayRecord(getEmptyObject());
		that.isNew(true);
		that.isEdit(false);
	}

	that.clickSave = function()
	{
		if( that.displayRecord().empId != '' && that.displayRecord().contactName != '' && 
			that.displayRecord().contactTitle != '' &&  that.displayRecord().companyName != '' &&
			that.displayRecord().country != '')
		{
				that.sourceEmployees.push(that.displayRecord());
				that.displayRecord(getEmptyObject());
				that.isEdit(false);
				that.isNew(false);
		}
		else
		{
			alert("Fill all the Details to save the record");
		}
		
	}
	that.clickUpdate = function(clickedRow)
	{
		if( that.displayRecord().empId != '' && that.displayRecord().contactName != '' && 
			that.displayRecord().contactTitle != '' &&  that.displayRecord().companyName != '' &&
			that.displayRecord().country != '')
		{
					var k = that.sourceEmployees.indexOf(clickedRow);
					that.sourceEmployees.splice(k,1,that.displayRecord());
					that.buttonClicked(1);
					that.displayRecord(getEmptyObject());
					alert("Record Updated");
					that.isNew(false);
					that.isEdit(false);
		}
		else
		{
			alert("Fill all the Details to Update the record");
		}

	}

	that.clickDelete = function(clickedRow)
	{
		that.displayRecord(clickedRow);
		var k = that.sourceEmployees.indexOf(clickedRow);
		that.sourceEmployees.splice(k,1);
		that.buttonClicked(1);
		that.displayRecord(getEmptyObject());
		that.isEdit(false);
		that.isNew(false);
	}
	that.clickFind = function()
	{
		that.foundRecord.removeAll();
		var temp = false;
		for(var i=0; i< that.sourceEmployees.length;i++)
		{
				if(+that.inputValue() === +that.sourceEmployees[i].empId)
				{
					temp = true;
					that.foundRecord.push(that.sourceEmployees[i]);
				}
		}
		if(temp === false)
			 alert('Please check your submission.No such EmpId Found');
		
			that.inputValue('');
		
	}
	function getEmptyObject()
	{
		return new Employee('','','','','');
	}



}
var emp = new EmployeeGridViewModel();
ko.applyBindings(emp);

