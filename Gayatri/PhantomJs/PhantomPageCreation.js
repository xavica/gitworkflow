var page = require('webpage').create();

page.open('http://www.amazon.in/s/ref=amb_link_187531447_2?ie=UTF8&bbn=4192584031&rh=i%3Aelectronics%2Cn%3A976419031%2Cn%3A!1499770031%2Cn%3A!1499772031%2Cn%3A4192584031%2Cn%3A1389401031%2Cn%3A1389432031%2Cp_76%3A1318482031%2Cn%3A!1499772031%2Cn%3A!1499770031%2Cn%3A!1499770031%2Cn%3A!1499772031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-4&pf_rd_r=16TBXW68H28SSXRMMTWG&pf_rd_t=101&pf_rd_p=606804847&pf_rd_i=1389401031',function(status)
	{
		console.log("status is :  " + status);
		if(status === 'success')
			page.render('google.png');

		phantom.exit();
	});



