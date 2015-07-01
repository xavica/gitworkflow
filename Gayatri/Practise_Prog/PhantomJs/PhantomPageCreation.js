var page = require('webpage').create();

page.open('http:wikipedia.com',function(status)
	{
		console.log("status is :  " + status);
		if(status === 'success')
			page.render('wiki.png');

		phantom.exit();
	});



