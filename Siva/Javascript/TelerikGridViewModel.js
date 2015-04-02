function Header(headerName)
{
	this.headerName=headerName;
};

function Mobile(slNo,mobileCompany,mobileModel,mobileCost,mobileOS)
{	this.slNo = slNo;
	this.mobileCompany = mobileCompany;
	this.mobileModel = mobileModel;
	this.mobileCost = mobileCost;
	this.mobileOS = mobileOS;
	
};
function MenuBar(topMenuBar,sideMenuBar)
{
	this.topMenuBar = topMenuBar;
	this.sideMenuBar = sideMenuBar;
}
function TopMenu(topMenu)
{ 
	this.topMenu = topMenu 
};
function SideMenu(sideMenu)
{ 
	this.sideMenu = sideMenu 
};
function DropDownList(listItems)
{
	this.listItems = listItems;
}
function MobileGridViewModel()
{
	this.topMenuBars = [	new TopMenu('| Home |'),new TopMenu(' Best Deals |'),new TopMenu('MostViewProducts |'),
							new TopMenu('Accesories |'),new TopMenu('Mobiles |')
						];
	this.sideMenuBars = [	new SideMenu('Mobile Products'),new SideMenu('Mens Accesories'),
							new SideMenu('Women Accesories'),new SideMenu('Other')
						];
	var	that=this, localMobileData, headers;
	that.headers =	[	new Header('Sl.No.'),
						new Header('Company'),
						new Header('Model'),
						new	Header('Cost'),
						new Header('Operating System')
					];
	
	localMobileData =	[		new Mobile((length++)+1,'Apple','IPhone 6S','45000/-','IOS'),	new Mobile((length++)+1,'Samsung','Galxy Note III','25000/-','Android'),
								new Mobile((length++)+1,'Nokia','Lumia 730','20000/-','Windows 8'),	new Mobile((length++)+1,'Sony','Xperia M','13000/-','Android'),
								new Mobile((length++)+1,'Motorola','Moto X','18000/-','Android'),	new Mobile((length++)+1,'MicroMax','Yurekha','10000/-','Android'),
								new Mobile((length++)+1,'Celcon','Celcon Smart','7000/-','Android'),	new Mobile((length++)+1,'HTC','HTC Smart Phone','10000/-','Andoid'),
								new Mobile((length++)+1,'Apple','IPhone 6S','45000/-','IOS'),	new Mobile((length++)+1,'Samsung','Galxy Note III','25000/-','Android'),
								new Mobile((length++)+1,'Nokia','Lumia 730','20000/-','Windows 8'),	new Mobile((length++)+1,'Sony','Xperia M','13000/-','Android'),
								new Mobile((length++)+1,'Motorola','Moto X','18000/-','Android'),	new Mobile((length++)+1,'MicroMax','Yurekha','10000/-','Android'),
								new Mobile((length++)+1,'Celcon','Celcon Smart','7000/-','Android'),	new Mobile((length++)+1,'HTC','HTC Smart Phone','10000/-','Andoid'),
								new Mobile((length++)+1,'Apple','IPhone 6S','45000/-','IOS'),	new Mobile((length++)+1,'Samsung','Galxy Note III','25000/-','Android'),
								new Mobile((length++)+1,'Nokia','Lumia 730','20000/-','Windows 8'),	new Mobile((length++)+1,'Sony','Xperia M','13000/-','Android'),
								new Mobile((length++)+1,'Motorola','Moto X','18000/-','Android'),	new Mobile((length++)+1,'MicroMax','Yurekha','10000/-','Android'),
								new Mobile((length++)+1,'Celcon','Celcon Smart','7000/-','Android'),	new Mobile((length++)+1,'HTC','HTC Smart Phone','10000/-','Andoid'),
								new Mobile((length++)+1,'Apple','IPhone 6S','45000/-','IOS'),	new Mobile((length++)+1,'Samsung','Galxy Note III','25000/-','Android'),
								new Mobile((length++)+1,'Nokia','Lumia 730','20000/-','Windows 8'),	new Mobile((length++)+1,'Sony','Xperia M','13000/-','Android'),
								new Mobile((length++)+1,'Motorola','Moto X','18000/-','Android'),	new Mobile((length++)+1,'MicroMax','Yurekha','10000/-','Android'),
								new Mobile((length++)+1,'Celcon','Celcon Smart','7000/-','Android'),	new Mobile((length++)+1,'HTC','HTC Smart Phone','10000/-','Andoid'),
								new Mobile((length++)+1,'Apple','IPhone 6S','45000/-','IOS'),	new Mobile((length++)+1,'Samsung','Galxy Note III','25000/-','Android'),
								new Mobile((length++)+1,'Nokia','Lumia 730','20000/-','Windows 8'),	new Mobile((length++)+1,'Sony','Xperia M','13000/-','Android'),
								new Mobile((length++)+1,'Motorola','Moto X','18000/-','Android'),	new Mobile((length++)+1,'MicroMax','Yurekha','10000/-','Android'),
								new Mobile((length++)+1,'Celcon','Celcon Smart','7000/-','Android'),	new Mobile((length++)+1,'HTC','HTC Smart Phone','10000/-','Andoid'),
								new Mobile((length++)+1,'Apple','IPhone 6S','45000/-','IOS'),	new Mobile((length++)+1,'Samsung','Galxy Note III','25000/-','Android'),
								new Mobile((length++)+1,'Nokia','Lumia 730','20000/-','Windows 8'),	new Mobile((length++)+1,'Sony','Xperia M','13000/-','Android'),
								new Mobile((length++)+1,'Motorola','Moto X','18000/-','Android'),	new Mobile((length++)+1,'MicroMax','Yurekha','10000/-','Android'),
								new Mobile((length++)+1,'Celcon','Celcon Smart','7000/-','Android'),	new Mobile((length++)+1,'HTC','HTC Smart Phone','10000/-','Andoid')
							
						];

	that.pageSelection = {
					       	pages: [5,10,20,50],
					        pageSize: ko.observable(0)
    					 }
    that.mobiles = ko.observableArray(_.slice(localMobileData,0,that.pageSelection.pageSize()));
	that.pageNumbers = ko.observableArray([]);
	that.temp = ko.observable();
	that.displayRecord = ko.observable(new Mobile('','','','',''));
    that.foundRecord = ko.observableArray([]);
    that.isEdit = ko.observable(false);
    that.isNew = ko.observable(false);
    that.isFind = ko.observable(false);
    that.inputValue = ko.observable('');
    that.radioSelectedOptionValue = ko.observable("")
  
    that.pageSelection.pageSize.subscribe(function()
    {
    	
    	that.buttonClicked(1);
    	
    });
    that.buttonClicked = function(currentpage)
    {	
    	var start = ((currentpage - 1 ) * that.pageSelection.pageSize()) + 1;
    	var end = start + that.pageSelection.pageSize() - 1;
    	if(end > localMobileData.length)
    		end = localMobileData.length;
    	that.statusString(start + " - " + end + ' of ' + localMobileData.length);
    	that.mobiles(_.slice(localMobileData,start-1,end));
    	var pageNumbersCount = Math.ceil(localMobileData.length / +that.pageSelection.pageSize() );
    	
    	that.pageNumbers(_.times(pageNumbersCount,function(n){ return n+1; }));
    	that.temp(currentpage);


    }
    that.statusString = ko.observable('');
    that.pageSelection.pageSize(5);
    
    that.clickDisplay = function(clickedRow)
	{
		that.displayRecord(clickedRow);
		that.isEdit(true);
		that.isNew(true);
		
	}
	that.clickNew = function()
	{
		that.displayRecord(getEmptyObject());
		that.isNew(true);
		that.isEdit(false);
	}
	that.clickSave = function()
	{
		if( that.displayRecord().slNo != '' && that.displayRecord().mobileCompany != '' && 
			that.displayRecord().mobileModel != '' &&  that.displayRecord().mobileCost != '' &&
			that.displayRecord().mobileOS != '')
		{
				localMobileData.push(that.displayRecord());
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
		if( that.displayRecord().slNo != '' && that.displayRecord().mobileCompany != '' && 
			that.displayRecord().mobileModel != '' &&  that.displayRecord().mobileCost != '' &&
			that.displayRecord().mobileOS != '')
		{			
					that.mobiles.removeAll();
					var k = localMobileData.indexOf(clickedRow);
					localMobileData.splice(k,1,that.displayRecord());
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
		var k = localMobileData.indexOf(clickedRow);
		localMobileData.splice(k,1);
		that.buttonClicked(1);
		that.displayRecord(getEmptyObject());
		that.isEdit(false);
		that.isNew(false);
	}
	that.clickSearch = function()
	{
		that.foundRecord.removeAll();
		if(that.radioSelectedOptionValue() === 'slNo')
		{
					var temp = false;
					for(var i=0; i<localMobileData.length;i++)
					{
							if(+that.inputValue() === +localMobileData[i].slNo)
							{
								temp = true;
								that.foundRecord.push(localMobileData[i]);
							}
					}
					if(temp === false)
						 alert('Please check your submission.No such record Found');
					
						that.inputValue('');
		}
		else if(that.radioSelectedOptionValue() === "mobileCompany")
		{
					var temp = false;
					for(var i=0; i< localMobileData.length;i++)
					{
							if( that.inputValue() === localMobileData[i].mobileCompany)
							{
								temp = true;
								that.foundRecord.push(localMobileData[i]);
							}
					}
					if(temp === false)
						 alert('Please check your submission.No such record Found');
				that.inputValue('');	
						
		}
		else if(that.radioSelectedOptionValue() === 'mobileModel')
		{
					var temp = false;
					for(var i=0; i< localMobileData.length;i++)
					{
							if(that.inputValue() === localMobileData[i].mobileModel)
							{
								temp = true;
								that.foundRecord.push(localMobileData[i]);
							}
					}
					if(temp === false)
						 alert('Please check your submission.No such record Found');
					
						that.inputValue('');
		}
		else if(that.radioSelectedOptionValue() === 'mobileCost')
		{
					var temp = false;
					for(var i=0; i< localMobileData.length;i++)
					{
							if(that.inputValue() === localMobileData[i].mobileCost)
							{
								temp = true;
								that.foundRecord.push(localMobileData[i]);
							}
					}
					if(temp === false)
						 alert('Please check your submission.No such record Found');
					
						that.inputValue('');
		}
		else if(that.radioSelectedOptionValue() === 'mobileOS')
		{
					var temp = false;
					for(var i=0; i< localMobileData.length;i++)
					{
							if(that.inputValue() === localMobileData[i].mobileOS)
							{
								temp = true;
								that.foundRecord.push(localMobileData[i]);
							}
					}
					if(temp === false)
						 alert('Please check your submission.No such record Found');
					
						that.inputValue('');
		}
	}
	function getEmptyObject()
	{
		return new Mobile('','','','','');
	}


}
var mo = new MobileGridViewModel();
ko.applyBindings(mo);
