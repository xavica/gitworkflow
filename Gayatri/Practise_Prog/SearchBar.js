function SearchViewModel()
{
	var that = this;
	var items = [ 'lenovo','motorola','moto G','Nike','Adidas','Asus','Asus gen'];
	this.selectedOption = ko.observable('');
	this.returnItemsArray = ko.observableArray(items);
	this.selectedOption.subscribe(function()
	{
		var filteredItems = _.filter(items,function(n)
     		{
     			return n.toLowerCase().indexOf(that.selectedOption().toLowerCase()) > -1;
     		});

     		 that.returnItemsArray(filteredItems);

	});
}



$('button').on('click',function(e) {
    if ($(this).hasClass('grid')) {
        $('#container ul').removeClass('list').addClass('grid');
       document.getElementById("btn2").disabled = true;
        document.getElementById("btn1").disabled = false;
        console.log("List view");
    }
    else if($(this).hasClass('list')) {
        $('#container ul').removeClass('grid').addClass('list');
       document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = false;
        console.log("grid view");
    }
});
ko.applyBindings(new SearchViewModel());
  

