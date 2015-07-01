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

$('div[data-pid*="TAB"]').each(function(){
	var title = $(this).find('.pu-title').text();
	var actualPrice = $(this).find('.pu-old').text();
	var discountPrice = $(this).find('div.pu-final > span').text();
	var description = 'Desc Text';
	var imageUrl = 'http://google.com/';
	var redirectUrl = "http://w3schools.com";
	var discount = '5';
	var p = new Product(title,description,imageUrl,actualPrice,discountPrice,discount,redirectUrl);
	productArray.push(p);

});

