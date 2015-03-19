function ListOne(item)
{
	this.item = item;
}

function ListTwo(item)
{
	this.item = item;
}


function ListViewModel()
{
	var that = this,localArray1,localArray2;

	localArray1 = localArray1 || [ new ListOne("Siva"),new ListOne("Jagan"),new ListOne("Gayatri")];
	this.itemsList1 = ko.observableArray(localArray1);
	
	localArray2 = localArray2 || [ new ListTwo("Siva"),new ListTwo("Jagan"),new ListTwo("Gayatri")];
	this.itemsList2 = ko.observableArray(localArray2);


	that.displayList = ko.observable(new ListOne(''));
	

	that.isRight = ko.observable(false);
	that.isLeft = ko.observable(false);
	
	this.moveLeft = function(clickedRow)
	{
		that.itemsList1.push(that.displayList());
		that.itemsList2.remove(clickedRow);
		that.displayList(getEmptyObject());
		that.isRight(false);
		that.isLeft(false);
	}
	this.moveRight = function(clickedRow)
	{
		that.itemsList2.push(that.displayList());
		that.itemsList1.remove(clickedRow);
		that.displayList(getEmptyObject());
		that.isRight(false);
		that.isLeft(false);
	}

	function getEmptyObject()
	{
		return new ListOne('');
	}
	that.clickDisplay1 = function(clickedRow)
	{
		that.displayList(clickedRow);
		that.isRight(true);
	}
	that.clickDisplay2 = function(clickedRow)
	{
		that.displayList(clickedRow);
		that.isLeft(true);
	}
	

}
var k = new ListViewModel();
ko.applyBindings(k);