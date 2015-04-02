function ListItem(item)
{
	this.item = item;
}
function ListViewModel()
{
	var that = this;

	this.availableStates = ko.observableArray([new ListItem("AndhraPradesh"),new ListItem("Maharastra"),new ListItem("Goa"),
											new ListItem("UttarPradesh"),new ListItem("WestBengal"),new ListItem("Gujarat")]);
	this.selectedStates = ko.observableArray([ ]);

	that.selectedState = ko.observable(new ListItem(''));
	
	that.isRight = ko.observable(false);
	that.isLeft = ko.observable(false);
	
	this.moveLeft = function(clickedRow)
	{
		that.availableStates.push(that.selectedState());
		that.selectedStates.remove(that.selectedState());
		that.isRight(false);
		that.isLeft(false);
	}
	this.moveRight = function(clickedRow)
	{

		that.selectedStates.push(that.selectedState());
		that.availableStates.remove(that.selectedState());
		that.isRight(false);
		that.isLeft(false);
	}

	that.availableStatesClick = function(clickedRow)
	{
		that.selectedState(clickedRow);
		that.isRight(true);
		console.log(that.selectedState().item);
	}
	that.selectedStatesClick = function(clickedRow)
	{
		that.selectedState(clickedRow);
		that.isLeft(true);
	}
	

}
var k = new ListViewModel();
ko.applyBindings(k);