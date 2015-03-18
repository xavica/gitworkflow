function Account(holderName,accountNumber)
{
	this.holderName = holderName;
	this.accountNumber = accountNumber;
}

function BankAccountViewModel()
{
	var that = this, localAccounts;
	localAccounts = [ new Account("john",1231),new Account("scott",1232),new Account("Godd",1233),new Account("Steve",1234)];

	that.accounts = ko.observableArray(localAccounts);

	that.clickDisplay = function(clickedRow)
	{
		that.displayAccount(clickedRow);
		that.isEdit(true);
		
	}

	that.displayAccount = ko.observable(new Account('',''));

	that.isNew = ko.observable(false);
	that.isEdit = ko.observable(false);

	this.clickNew = function()
	{
		that.isNew(true);
		console.log("Clicknew function");

	}

	that.clickSave = function()
	{
		that.isNew(false);
	}
	that.clickUpdate = function()
	{
		that.isEdit(false);
	}

	that.clickDelete = function()
	{
		that.isEdit(false);
	}

}

var acc =  new BankAccountViewModel();
ko.applyBindings(acc);