function Product(title,description,imageUrl,actualPrice,discountPrice,discount,redirectUrl)
{
	this.title =title;
	this.description = description;
	this.imageUrl = imageUrl;
	this.actualPrice = actualPrice;
	this.discountPrice = discountPrice;
	this.discount = discount;
	this.redirectUrl = redirectUrl;
	
}
	var productArray = [];
var casper = require('casper').create();
 casper.start('http://www.flipkart.com/tablets/pr?sid=tyy,hry&otracker=ch_vn_tablet_filter_Brands_ALL', function() {

 

 		casper.each('div[data-pid*="TAB"]',(function(){
				var title = $(this).find('.pu-title').text();
				title = title.replace(/(\r\n|\n|\r)/gm,"");
				title = title.replace(/\s+/g," ");
				var actualPrice = $(this).find('.pu-old').text();
				var discountPrice = $(this).find('div.pu-final > span').text();
				var description = 'Desc Text';
				var imageUrl = 'http://google.com/';
				var redirectUrl = "http://w3schools.com";
				var discount = '5';
				var p = new Product(title,description,imageUrl,actualPrice,discountPrice,discount,redirectUrl);
				productArray.push(p);
				this.echo(p);


			}));


 	console.log(productArray);
 	this.echo("site opened");
			

});


casper.run();
