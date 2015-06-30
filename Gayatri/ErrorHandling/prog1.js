var casper = require('casper').create({
    verbose: true,
     logLevel: 'error'
});

var errorArray = [];
casper.start("http://www.tvdeal.in/Regular-Televisions");
casper.on('resource.received', function(resource) {
    var status = resource.status;
    if(status >= 400) {
        casper.log('Resource ' + resource.url + ' failed to load (' + status + ')', 'error');

        errorArray.push({
            url: resource.url,
            status: resource.status
        });
    }
});
casper.then(function(){
	errorArray.forEach(function(item){
		this.echo("url:  "  + item.url + "           status:  " + item.status);
	})
	this.echo("resourceErrors:  "  + resourceErrors.toString());
});
casper.run();

