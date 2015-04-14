function Student(rollNumber,studentName,age,branch)
{
	this.rollNumber = rollNumber;
	this.studentName = studentName;
	this.age=age;
	this.branch=branch;
};
function Header(headerName)
{
	this.headerName=headerName;
};

function StudentViewModel()
{
	this.headers=[	new Header('Roll No.'),
					new Header('Name'),
					new Header('age'),
					new Header('Branch') ];
	var that= this, localStudents;

	localStudents=[	new Student('101','Siva','22','ECE'),
					new Student('102','Jagan','20','CSE'),
					new Student('103','Gayatri','22','MCA'),
					new Student('104','Sai','20','ECE')
					 
					];
	that.studentDetails = ko.observableArray(localStudents);
	that.enterDetails = ko.observable(new Student('','','',''));
	that.isEdit = ko.observable(false);
	that.isNew = ko.observable(false);
	that.clickRow = function(justclick)
	{	
		console.log('Row clicked');
		that.enterDetails(justclick);
		that.isEdit(true);
		that.isNew(false);
		
	};
	function getEmptyObject()
	{
		return new Student('','');
	};
	this.clickNew = function()
	{	
		that.enterDetails(getEmptyObject());
		that.isNew(true);
		that.isEdit(false);
	};
	that.clickSave = function()
	{
		that.studentDetails.push(that.enterDetails());
		that.enterDetails(getEmptyObject());
		that.isEdit(false);
		that.isNew(false);
	};
	that.clickUpdate = function(justclick)
	{
		var tempRow = that.studentDetails.indexOf(justclick);
		that.studentDetails.remove(justclick);
		that.studentDetails.splice(tempRow,0,that.enterDetails());
		that.enterDetails(getEmptyObject());
		that.isNew(false);
		that.isEdit(false);
	};

	that.clickDelete = function(justclick)
	{
		that.enterDetails(justclick);
		that.studentDetails.remove(justclick);
		that.isEdit(false);
		that.isNew(false);
		that.enterDetails(getEmptyObject());
	};
	
};
var sd =  new StudentViewModel();

ko.applyBindings(sd);