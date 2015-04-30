var casper = require('casper').create();

// casper.start('http://google.fr/', function() {
//     var k = this.getElementsInfo('#hplogo');
//     console.log(k);
//     this.echo(this.fetchText('#hplogo'));
// });


casper.start('http://google.fr/',function(){
	this.each(this.exists('#hplogo'),function()
	{
		this.echo(this.fetchText('#hplogo'));
	})
});


// each(links, function(self, link) {
//     self.thenOpen(link, function() {
//         this.echo(this.getTitle());
//     });
// });
// if (this.exists('#my_super_id')) {
//         this.echo('found #my_super_id', 'INFO');
//     } else {
//         this.echo('#my_super_id not found', 'ERROR');
//     }
casper.run();