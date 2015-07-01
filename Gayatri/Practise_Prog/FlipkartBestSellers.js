function product(image_url,pname,price)
{
               this.image_url = image_url;
               this.pname = pname;
               this.price = price;
};


function BestSellerViewModel()
{
    this.items = [ 
       		new product("lenovo-a6000.jpeg","lenovo-A6000", "Rs.6,999"),
       		new product("MotoG.jpeg", "Moto G", "Rs.12,999"),
        	new product("Redmi Note 4G.jpeg", "Redmi Note 4G", "Rs.9,999"),
       		new product("lenovo-a7-30.jpeg", "Lenovo A7 Tablet", "Rs.6,799"),
                                            
        ];
}
var bs = new BestSellerViewModel();
ko.applyBindings(bs);
