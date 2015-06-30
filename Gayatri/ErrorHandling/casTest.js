// var request = require('request');
var log4js = require('log4js'); 
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file('chs1.log'), 'chs1');
 
var logger = log4js.getLogger('chs1');
logger.setLevel('ERROR');
logger.error('Cheese is too ripe!');

var casper = require('casper').create();
casper.start();
casper.then(function(){
	this.echo("hello");
});
casper.run();