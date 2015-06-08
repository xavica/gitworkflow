var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start('http://www.flipkart.com/tablets/pr?sid=tyy,hry&otracker=ch_vn_tablet_filter_Brands_ALL');
var productsList;
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping');

});
casper.then(function () {
    	this.echo('started evaluting');
	     this.evaluate(function () {
	    	 __utils__.echo("hai"); 
			var elements = document.querySelectorAll('div[data-pid*="TAB"]');
			var k = elements.length;
			__utils__.echo(k);
	

});
this.echo("end");
});
casper.run();