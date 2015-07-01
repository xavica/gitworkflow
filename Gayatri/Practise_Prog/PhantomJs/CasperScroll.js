var casper = require('casper').create({
    verbose: true,
    logLevel: 'error',
    pageSettings: {
        loadImages: false,
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.2 Safari/537.36'
    }
});
 
var x = require('casper').selectXPath;
var links = [];
function getLinks() {
    var links = document.querySelectorAll('#content li');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('p');
    });
}
 
casper.start('http://andersonferminiano.com/jqueryscrollpagination/', function() {
    this.scrollToBottom();
});
 
casper.wait(10000, function () {
  var numTimes = 5, page = 1;
    casper.repeat(numTimes, function () {
 this.scrollToBottom();
        casper.wait(10000, function () {
 
	})
 
    })
page=page+1;
})
 
casper.run(function() {
    // echo results in some pretty fashion
 var html = this.evaluate(function() {
		return document; 
	});	
    this.echo(html.all[0].outerHTML).exit();
 
});