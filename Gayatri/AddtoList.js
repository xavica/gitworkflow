function SimpleList(item)
{
	this.item = item;
}

function ListViewModel()
{
	var that = this,localArray;
	localArray = localArray || [ new SimpleList("Siva"),new SimpleList("Jagan"),new SimpleList("Gayatri")];

	this.itemsList = ko.observableArray(localArray);

	that.displayList = ko.observable(new SimpleList(''));
	this.itemAdd = function()
	{
		console.log(that.displayList().item);
		that.itemsList.push(that.displayList());
		that.displayList(getEmptyObject());
	}

	function getEmptyObject()
	{
		return new SimpleList('');
	}

}
var k = new ListViewModel();
ko.applyBindings(k);