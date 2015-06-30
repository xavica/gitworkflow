var casper = require('casper').create();
var log4js = require('log4js'); 
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('ch.log'), 'ch');
 
var logger = log4js.getLogger('ch');
logger.setLevel('ERROR');

    casper.start('http://www.po3w.com/', function() {
  			 logger.trace('Entering cheese testing');
				logger.debug('Got cheese.');

    });

    casper.thenOpen('http://phantomjs.org', function() {
			 logger.warn('Cheese is quite smelly.');
			logger.error('Cheese is too ripe!');
			logger.fatal('Cheese was breeding ground for listeria.');
			logger.info('Cheese is Gouda.');
    });

    casper.run();