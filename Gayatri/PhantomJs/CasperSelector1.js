var casper = require('casper').create({ verbose: true});

casper.start('http://www.flipkart.com/', function() {
	
    if (this.exists('body.HomePage')) {
    	console.log("flipkart opened");
        this.echo('Its Contains Body');
   }
});
// casper.then('http://www.flipkart.com/', function() {
	
//     if (this.exists('div.menu-header-content')) {
//     	this.echo('flipkart Contains menu-header-content');
//     }
// });



casper.run();