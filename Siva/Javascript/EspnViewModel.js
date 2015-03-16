function TopMenu(espnLogo, menuItems,todayResults)
{
	this.espnLogo=espnLogo;
	this.menuItems=menuItems;
	this.todayResults=todayResults;
};
function MenuItem(itemName)
{
	this.itemName=itemName;
};
function TodayResult(menu,leaugeType,results)
{
	this.menu=menu;
	this.leaugeType=leaugeType;
	this.results=results;
};
function Results(finalResults){
	this.finalResults=finalResults;
};
function Menu(resultsMenu)
{
	this.resultsMenu=resultsMenu;
};
function EspnViewModel()
{
	this.espnViewResults=[	new TopMenu("Images/EspnImage.png",
							[	new MenuItem("WC 2015"),
								new MenuItem("LIVE SCORES"),
								new MenuItem("SERIES"),
								new MenuItem("COUNTRIES"),
								new MenuItem("NEWS","FEATURES"),
								new MenuItem("VIDEOS"),
								new MenuItem("BLOGS"),
								new MenuItem("PHOTOS"),
								new MenuItem("STATS"),
								new MenuItem("SHOP"),
								new MenuItem("FANTACY")
							],
							[	new TodayResult( [	new Menu("LIVE"),
													new Menu("RESULTS"),
													new Menu("FIXTURES")
												 ],
													"ICC CRICKET WORLD CUP",
													[	new Results("Banglades 288/7 v New Zealand 290/7 (48.5/50 ov) New Zealand won by 3 wickets (with 7 balls remaining)"),

														new Results("Afghanistan 111/7 v England 101/1 (18.1/25 ov, target 101) England won by 9 wickets (with 41 balls remaining) (D/L method)"),
														new Results("Zimbabwe 287 v India 83/3 (19.5/50 ov)")
													] 
												)
							]
							)
				]
};
ko.applyBindings(new EspnViewModel());