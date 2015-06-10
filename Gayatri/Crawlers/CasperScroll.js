var casper = require('casper').create();
casper.options.pageSettings.loadImages = false;
casper.start('http://www.amazon.in/s/ref=nb_sb_ss_i_0_6?url=search-alias%3Delectronics&field-keywords=camera&sprefix=camera%2Ccomputers%2C285');
casper.then(function () {

    this.echo("site opened");
    this.echo('started scrapping')
    this.clickLabel('2','a');
    this.echo("page Clicked");
    
    	var elements = document.querySelectorAll('li[data-asin*="B"]')
                for (i = 0; i < elements.length; i++) {

                var titleElement = elements[i].querySelector('a > h2');
                var title = titleElement && titleElement.textContent || 0;
                _utils_.echo(title);
            }
    
    

});
casper.run();