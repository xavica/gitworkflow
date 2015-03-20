function Header(headerName)
{
	this.headerName=headerName;
};

function Mobile(mobileCompany,mobileModel,mobileCost,mobileOS)
{
	this.mobileCompany = mobileCompany;
	this.mobileModel = mobileModel;
	this.mobileCost = mobileCost;
	this.mobileOS = mobileOS;
};
function MenuBar(topMenuBar,sideMenuBar)
{
	this.topMenuBar = topMenuBar;
	this.sideMenuBar = sideMenuBar;
}
function TopMenu(topMenu)
{ 
	this.topMenu = topMenu 
};
function SideMenu(sideMenu)
{ 
	this.sideMenu = sideMenu 
};
function MobileGridViewModel()
{
	this.topMenuBars = [	new TopMenu('| Home |'),new TopMenu(' Best Deals |'),new TopMenu('MostViewProducts |'),
							new TopMenu('Accesories |'),new TopMenu('Mobiles |')
						];
	this.sideMenuBars = [	new SideMenu('Mobile Products'),new SideMenu('Mens Accesories'),
							new SideMenu('Women Accesories'),new SideMenu('Other')
						];

	this.headers =	[	new Header('Company'),
						new Header('Model'),
						new	Header('Cost'),
						new Header('Operating System')
					];
	var	that=this, localMobileData;
	localMobileData=	[	new Mobile('Apple','IPhone 6S','45000/-','IOS'),new Mobile('Samsung','Galxy Note III','25000/-','Android'),
						new Mobile('Nokia','Lumia 730','20000/-','Windows 8'),new Mobile('Sony','Xperia M','13000/-','Android'),
						new Mobile('Motorola','Moto X','18000/-','Android'),new Mobile('MicroMax','Yurekha','10000/-','Android'),
						new Mobile('Celcon','Celcon Smart','7000/-','Android'),new Mobile('HTC','HTC Smart Phone','10000/-','Andoid'),
					]
	that.mobiles=ko.observableArray(localMobileData);

}
ko.applyBindings(new MobileGridViewModel());
