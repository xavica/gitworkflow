// My custom Javascript file

$(function(){

	$('#alertMe').click(function(e){
		e.preventDefault();
		$('#succesAlert').slideDown();
	});
	$('#secondalertMe').click(function(e){
			e.preventDefault();
			$('#succesAlert2').slideDown();
		});

});