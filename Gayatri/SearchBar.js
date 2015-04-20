function SearchViewModel()
{
	var that = this;
	that.items = [ 1,2,3,4,5,6,7,8];
	// that.changeView = function(e)
	// {
	// 	console.log("inside function");
	// 	$('button').on('click',function(e) {
	// 	if ($(e).hasClass('grid'))
	// 	 {
 //        				$('#container ul').removeClass('list').addClass('grid');
 //        				console.log("grid view");
 //       	 }
 //   		 else if($(e).hasClass('list')) 
 //   		 {
	// 		        $('#container ul').removeClass('grid').addClass('list');
	// 		        console.log("lsit view");
 //    	}
 //    });
	// }
	
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
  

