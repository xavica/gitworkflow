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
	that.newAccount = ko.observable(new Account('',''));

	// that.displayAccount = ko.observable(new Account('a','b'));


	that.isNew = ko.observable(false);
	that.isEdit = ko.observable(false);

	this.clickNew = function()
	{
		that.displayAccount(getEmptyObject());
		that.isEdit(true);
	}

	that.clickSave = function()
	{
		that.accounts.push(that.displayAccount());
		that.isEdit(false);
		that.displayAccount(getEmptyObject());
		that.isNew(false);
		
	}
	that.clickUpdate = function(clickedRow)
	{
		var k = that.accounts.indexOf(clickedRow);
		that.accounts.remove(clickedRow);
		that.accounts.splice(k,0,that.displayAccount());
		that.displayAccount(getEmptyObject());
		that.isNew(false);
		that.isEdit(false);
	}

	that.clickDelete = function(clickedRow)
	{
		that.displayAccount(clickedRow);
		that.accounts.remove(clickedRow);
		that.isEdit(false);
		that.displayAccount(getEmptyObject());
		that.isNew(false);
		that.isEdit(false);
	}
	function getEmptyObject()
	{
		return new Account('','');
	}

}

var acc =  new BankAccountViewModel();
ko.applyBindings(acc);