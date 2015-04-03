function TopMenuItem(topMenuItems)
{
	this.topMenuItems=topMenuItems;
}
function TopMenu(logoImageUrl,topMenuItem)
{	this.logoImageUrl = logoImageUrl;
	this.topMenuItem=topMenuItem;
}
function LeftMenu(leftMenuItems)
{
	this.leftMenuItems = leftMenuItems;
}
function W3body(selector, example, exampleDescription, cssVersion)
{
	this.selector = selector;
	this.example = example;
	this.exampleDescription = exampleDescription;
	this.cssVersion = cssVersion;
}

function W3ViewModel()
{
	this.topMenu = [	new TopMenu('Images/W3logotest2.png', [	new TopMenuItem('HTML'),new TopMenuItem('CSS'),
																new TopMenuItem('JAVASCRIPT'),new TopMenuItem('PHP'),
																new TopMenuItem('jQUERY'),new TopMenuItem('BOOTSTRAP'),
																new TopMenuItem('ANGULAR'),new TopMenuItem('TUTORIALS'),
																new TopMenuItem('REFERENCES'),new TopMenuItem('EXAMPLES'),
																new TopMenuItem('FORUM')
															 ]
									)

					];
	this.leftMenu = [	new LeftMenu('CSS Reference'),new LeftMenu('CSS Selectors'),new LeftMenu('CSS Reference Aural'),
						new LeftMenu('CSS Web Safe Fonts'),new LeftMenu('CSS Units'),new LeftMenu('CSS PX-EM Converter'),
						new LeftMenu('CSS Colors'),new LeftMenu('CSS Color Values'),new LeftMenu('CSS Color Names'),
						new LeftMenu('CSS Color HEX'),new LeftMenu('CSS3 Browser Support')

					];
	this.bodyContents = [
							new W3body('.class','.intro','Selects all elements with class="intro"',1),
							new W3body('#id','.#firstName','Selects the element with id="firstname"',1),
							new W3body('*','*','Selects all elements ',2),
							new W3body('element,element','div,p','Selects all <div> and <p> elements',1),
							new W3body('element element','div p','Selects all <p> elements inside <div> elements',1),
							new W3body('element>element','div > p','Selects all <p> elements where the parent is a <div> element',2)

						]
}
ko.applyBindings(new W3ViewModel());