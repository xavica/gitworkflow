var request = require("request");
var log4js = require('log4js'); 
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('amazon.log'), 'amazon');
 
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');
// logger.info('Cheese is Gouda.');

var casper = require('casper').create();

casper.start('http://www.amazon.in/s/ref=nb_sb_ss_i_1_14?url=search-alias%3Dkitchen&field-keywords=air+conditioner&sprefix=air+conditione%2Cstripbooks%2C278&rh=n%3A976442031%2Ck%3Aair+conditioner',function(){
	var logger = log4js.getLogger('amazon');
	logger.setLevel('INFO');

	logger.info("link opened");

});

casper.then(function () {
    this.echo("site opened");
    this.echo('started scrapping');
    logger.info('have to start processing link');

});
casper.run();