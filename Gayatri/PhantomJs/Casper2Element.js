var casper = require('casper').create();

casper.start("http://www.flipkart.com/tablets/pr?sid=tyy%2Chry&offer=s%3Awsr%3Ac%3A03ac6f5707.&icmpid=bro_facet_2_s%3Awsr%3Ac%3A03ac6f5707.#jumpTo=200|3", function() {
    if (this.exists('a.pu-image fk-product-thumb')) {
        this.echo('the class for the product image exists');
    }
});

casper.then('http://domain.tld/page.html', function() {
    if (this.exists('a.fk-display-block')) {
        this.echo('the heading for the product exists');
    }
});

casper.run();