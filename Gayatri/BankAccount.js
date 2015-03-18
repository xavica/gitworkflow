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
		that.displayAccount(getEmptyObject());
		that.isNew(true);
	}

	that.clickSave = function()
	{
		that.accounts.push(that.displayAccount());
		//setEditMode(false);
		that.displayAccount(getEmptyObject());
	}
	that.clickUpdate = function(clickedRow)
	{
		that.displayAccount(clickedRow);
		that.accounts.remove(clickedRow);
		that.accounts.push(that.displayAccount());
		that.displayAccount(getEmptyObject());

		that.isEdit(false);
	}

	that.clickDelete = function(clickedRow)
	{
		that.displayAccount(clickedRow);
		that.accounts.remove(clickedRow);
		that.isEdit(false);
		that.displayAccount(getEmptyObject());
	}
	function getEmptyObject()
	{
		return new Account('','');
	}

}

var acc =  new BankAccountViewModel();
ko.applyBindings(acc);