function Product(imageUrl,name, discount, originalPrice, price )
{
	this.imageUrl=imageUrl;
	this.name=name;
	this.discount=discount;
	this.originalPrice=originalPrice;
	this.price=price;

};
function HeaderFlipkart(logo)
{
	this.logo=logo;

};

function BestSellersViewModel()
{
	this.headerFlipkart=[ new HeaderFlipkart("flip5.png")

						];
	this.products=	[	new Product("bulb1.jpeg","Eveready Combo Pack 0.5 W LED Bulb (White, Pack of 3)","--","--","RS.270"),
						new Product("flip2.jpeg","Nashware Cpcn Chopper (Green)","51 OFF","Rs.999","RS.485"),
						new Product("flip3.jpeg","DP Rotating 3 W LED Bulb","84%","Rs.399","RS.60"),
						new Product("flip4.jpeg","Cenizas Cotton Geometric Double Bedsheet (1 Bedsheet, 2.)","68% OFF","RS.1999","RS.629")
					]
}
ko.applyBindings(new BestSellersViewModel());
