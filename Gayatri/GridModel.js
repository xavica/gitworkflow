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
						( new Employee('1',"John","Developer", "CMC Limited","Africa")),
						( new Employee('2',"scott","Developer", "HCL","Greece")),
						( new Employee('3',"John","Business Analyst", "CTS","India")),
						( new Employee('4',"scott","Designer", "Hexaware","Australia")),
						( new Employee('5',"scott","Designer", "CMC Limite","Japan")),
						( new Employee('6',"Steve","Business Analyst", "Wipro","France")),
						( new Employee('7',"Robert","Business Analyst", "Infosis","West India")),
						( new Employee('8',"Thomas","Business Analyst", "CMC Limite","USA")),
						( new Employee('9',"Gayatri Sarva","Developer", "Xavica","India")),
						( new Employee('9',"Thomas","Business Analyst", "CMC Limite","UAE")),
						( new Employee('10',"scott","Designer", "CMC Limite","Jordan")),
						( new Employee('11',"Thomas","Business Analyst", "CMC Limite","Dubai")),
						( new Employee('12',"Steve","Business Analyst", "TCS","Zimbabe")),
						( new Employee('13',"Thomas","Business Analyst", "iGATE","Angola")),
						( new Employee('14',"Steve","Business Analyst", "Yash ","Africa")),
						( new Employee('15',"John","Designer", "IBM","India")),
						( new Employee('16',"Robert","Business Analyst", "Patni","Japan")),
						( new Employee('17',"Thomas","Business Analyst", "Microsoft","France")),
						( new Employee('18',"John","Developer", "Virtusa","USA")),
						( new Employee('19',"Steve","Developer", "CMC Limite","UAE")),
						( new Employee('20',"Thomas","Business Analyst", "CMC Limite","Australia")),
						( new Employee('21',"John","Designer", "CMC Limite","West India")),
						( new Employee('22',"Robert","Developer", "3i Infotech","Dubai")),
						( new Employee('23',"John","Business Analyst", "Satyam","India"))


					];
	that.pageSelection = {
					       pages: [3,5,10,15,20],
					        pageSize: ko.observable(0)
    				};
    that.employees = ko.observableArray(_.slice(that.sourceEmployees,0,that.pageSelection.pageSize()));
   	that.pageNumbers = ko.observableArray([]);
   	var start,end;
  	that.temp = ko.observable();
  	that.displayRecord = ko.observable(new Employee('','','','',''));
    that.foundRecord = ko.observableArray([]);
    that.isEdit = ko.observable(false);
    that.isNew = ko.observable(false);
    that.isFind = ko.observable(false);
    that.inputValue = ko.observable('');
    that.radioSelectedOptionValue = ko.observable("")
    that.pageSelection.pageSize.subscribe(function()
    {      	
    	that.buttonClicked(1)
  	
     });
    that.pageStatus = ko.observableArray([]);
   	that.buttonClicked = function(pageNumber)
    {
    		that.foundRecord.removeAll();
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
	that.compare = function(a,b) 
	{
	  if (+a.empId <  +b.empId)
	     return -1;
	  if ( +a.empId >  +b.empId)
	    return 1;
	  return 0;
	}

	that.clickSave = function()
	{
		if( that.displayRecord().empId != '' && that.displayRecord().contactName != '' && 
			that.displayRecord().contactTitle != '' &&  that.displayRecord().companyName != '' &&
			that.displayRecord().country != '')
		{
				
				that.sourceEmployees.push(that.displayRecord());
				that.displayRecord(getEmptyObject());
				that.employees.removeAll();
				that.sourceEmployees.sort(that.compare);
				that.buttonClicked(that.temp());
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
					that.sourceEmployees.sort(that.compare);
					that.employees.removeAll();
					that.buttonClicked(that.temp());
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
		that.sourceEmployees.sort(that.compare);
		that.buttonClicked(that.temp());
		that.displayRecord(getEmptyObject());
		that.isEdit(false);
		that.isNew(false);
	}
	that.clickFind = function()
	{
		that.foundRecord.removeAll();
		if(that.radioSelectedOptionValue() === 'EmpId')
		{
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
		else if(that.radioSelectedOptionValue() === "ContactName")
		{
					var temp = false;
					for(var i=0; i< that.sourceEmployees.length;i++)
					{
							if( that.inputValue() === that.sourceEmployees[i].contactName)
							{
								temp = true;
								that.foundRecord.push(that.sourceEmployees[i]);
							}
					}
					if(temp === false)
						 alert('Please check your submission.No such contactName Found');
				that.inputValue('');	
						
		}
		else if(that.radioSelectedOptionValue() === 'ContactTitle')
		{
					var temp = false;
					for(var i=0; i< that.sourceEmployees.length;i++)
					{
							if(that.inputValue() === that.sourceEmployees[i].contactTitle)
							{
								temp = true;
								that.foundRecord.push(that.sourceEmployees[i]);
							}
					}
					if(temp === false)
						 alert('Please check your submission.No such ContactTitle Found');
					
						that.inputValue('');
		}
		else if(that.radioSelectedOptionValue() === 'CompanyName')
		{
					var temp = false;
					for(var i=0; i< that.sourceEmployees.length;i++)
					{
							if(that.inputValue() === that.sourceEmployees[i].companyName)
							{
								temp = true;
								that.foundRecord.push(that.sourceEmployees[i]);
							}
					}
					if(temp === false)
						 alert('Please check your submission.No such Company Name Found');
					
						that.inputValue('');
		}
		else if(that.radioSelectedOptionValue() === 'Country')
		{
					var temp = false;
					for(var i=0; i< that.sourceEmployees.length;i++)
					{
							if(that.inputValue() === that.sourceEmployees[i].country)
							{
								temp = true;
								that.foundRecord.push(that.sourceEmployees[i]);
							}
					}
					if(temp === false)
						 alert('Please check your submission.No such Country Found');
					
						that.inputValue('');
		}
	}
	function getEmptyObject()
	{
		return new Employee('','','','','');
	}



}
var emp = new EmployeeGridViewModel();
ko.applyBindings(emp);

