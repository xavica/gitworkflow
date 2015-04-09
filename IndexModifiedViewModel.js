function TableHeaders(header)
{
	this.header=header;
};
function Program(slNo,program,url,description){
	// this.name='SIVA JONNALA';
	this.slNo=slNo;
	this.program = program;
	this.url=url;
	this.description = description;
};
function Programtable(headers, programsData)
{ 
	this.headers=headers;
	this.programsData=programsData;
};
function IndexViewModel()
{
	this.programs=	[	new Programtable( [	new TableHeaders('SL.No'),
											new TableHeaders('PROGRAM'),
											new TableHeaders('DESCRIPTION')
										  ],
										  [	 new Program(length++,'','',''),
										  	 new Program(length++,'Mobile Info','Siva/CustomBindings.html','This program tells us displaying mobile and it is done using custom bindings'),
										  	 new Program(length++, 'Book  info display','Siva/FeaturesBootStrap.html','A program on displaying books info using Boot strap css 3 '),										
										  	 new Program(length++, 'Boot Strap CallOut','Siva/BootStrapCallout.html','A program on using Boot strap css 3 '),
										  	 new Program(length++, 'Boot strap carousel','Siva/IntroducingBootstrap.html','A program on using Boot strap css 3 displaying carousel'),						  
										  	 new Program(length++, 'W3Schools View Model','Siva/W3SchoolsView.html','A program on JS view model and usage of CSS selectors'),
										  	 new Program(length++,'Mobile Grid View Model','Siva/TelerikGridView.html','A js program using Knokout displaying mobile data in grid("This is not completed and continued")'),
										  	 new Program(length++,'Student View','Siva/StudentView.html', ' A JS program on knokout for Student View model' ),
										  	 new Program(length++,'W3SchoolsViewModel','Siva/W3Schools.html', ' A JS program on knokout for w3schools demo' ),
										  	 new Program(length++,'Lodash- Without And Xor','Siva/WithoutAndXor.html','A JS program on performing lodash operations like Without() And Xor() '),
										  	 new Program(length++,'CricBuzz Modified ViewModel','Siva/CricBuzzModifiedViewModel.html',' A JS program on Creating Objects, representing classes and representing CricBuzz Points table and it is modified as for code redundancy'),
										  	 new Program(length++,'Lodash - Zip And UnZip','Siva/ZipAndUnZip.html','A JS program on performing lodash operations like Zip() And Unzip()'),
										  	 new Program(length++,'Lodash - Union And Uniq','Siva/UnionAndUniq.html','A JS program on performing lodash operations like Union() And Uniq()'),
										  	 new Program(length++,'TakeRightWhile and TakeWhile','Siva/TakeRightWhile.html','A JS program on performing lodash operations like TakeRightWhile() and TakeWhile() '),
										  	 new Program(length++,'Espn View Model','Siva/EspnViewModel.html','A JS program on Creating Objects, representing classes  using knokout and displaying Flipkart Demo'),
										  	 new Program(length++,'FlipkartViewModel','Siva/Flipkart.html','A JS program on Creating Objects, representing classes  using knokout and displaying Flipkart Demo'),
										  	 new Program(length++,' Times of India','Siva/TimesView.html','A JS program on Creating Objects, representing classes  using knokout and displaying times of India Demo'),
										  	 new Program(length++,'CricBuzz Points table','Siva/CricBuzz.html','A JS program on Creating Objects, representing classes and representing CricBuzz Points table'),
										  	 new Program(length++,'Entering MyPrograms Data To Table','Siva/MyPrograms.html','A JS program on Creating Objects, representing classes and representing MyPrograms datda into table using knokout'),
										  	 new Program(length++,'Entering Mobile Data To Table', "Siva/EnteringDataToTable_ko.html",'A JS program on Creating Objects, representing classes and representing mobile datda into table'),
											 new Program(length++,'KoExampleonObservable','Siva/KoExampleonObservable.html','A JS program on Creating Objects and representing classes'),
											 new Program(length++,'Example Using Knockout','Siva/KoExample.html','A JS program on Creating Objects and representing classes' ),
											 new Program(length++,' Lodash functions','Siva/takeAndtakeRight.html',' A JS program on performing lodash operations like take() And takeRight()' ),
											 new Program(length++,' _removeAndrest','Siva/removeAndrest.html','A JS program on performing lodash operations like remove() And rest()' ),
											 new Program(length++,'_intersectionAndlastIndexOf','Siva/intersectionAndlastIndexOf.html','A JS program on Creating Objects and representing classes' ),
											 new Program(length++,'_indexOfAndLast ','Siva/indexOfAndLast.html','A JS program on performing lodash operations like indexOf() And Last()' ),
											 new Program(length++,' Lodash Libraries ','Siva/pullandpullAt.html','A JS program on performing lodash operations like pull and pullAt' ),
											 new Program(length++,'Seasonal message','Siva/Weather.html','A JS program on performing about weather report seasonal msg'),
											 new Program(length++,'Array Operations2','Siva/ArrayOperations2.html','A JS program on performing array operations'),
											 new Program(length++,'Array Operations','Siva/ArrayOperations.html','A JS program on performing array operations'),
											 new Program(length++,'Lodash Libraries','Siva/_flattenAnd_flattenDeep.html','A JS program on performing lodash operations like flateen and flttenEnd'),
											 new Program(length++,'Creating Objects type 3 ','Siva/CreatingObjects3.html','A JS program on creating objects and use those instances '),
											 new Program(length++,'Creating Objects type 2','Siva/CreatingObjects2.html','A JS program on creating objects and use those instances'),
											 new Program(length++,'Creating Objects type 1','Siva/CreatingObjects.html','A JS program on creating objects and use those instances'),
											 new Program(length++,'_.initial and CustomInital','Siva/customInitial.html','A JS program on lodash and this function displaying all the elements in the array except the last element'),
											 new Program(length++,'_.first and customFirst','Siva/customFirst.html',' A JS program on lodash and this function displaying first element in the array'),
											 new Program(length++,'Object Classes','Siva/ObjectClasses.html',' A JS program on displaying object classes using instances'),
											 new Program(length++,'Split String','Siva/SplitString.html','A JS program on displaying and splitting string'),
											 new Program(length++,'Search string','Siva/Search.html','A JS program on searching a string'),
											 new Program(length++,'Object Creation','Siva/JSObjects2.html','A JS program on displaying objects of arrays and isung instances'),
											 new Program(length++,'Object Creation basic','Siva/JSObjects.html','A JS program on displaying array with with creation os objects'),
											 new Program(length++,'StringMethodes','Siva/StringMethodes.html',' A JS program on displaying string indexes, uppercase and lowercase.'),
											 new Program(length++,'Lodash Arrays','Siva/Lodash3.html',' A JS program on displaying array with _.dropRight'),
											 new Program(length++,'Multidimesional Arrays','Siva/MultidimesionalArrays.html',' A JS program on declaring array of elements both numbers and strings in matrix'),
											 new Program(length++,'Passing Arrays To Functions','Siva/ArraysToFunctions.html','A JS program on Passing Arrays To Functions'),
											 new Program(length++,'Declaring Arrays','Siva/DeclareArrays.html','A JS program on declaring array of elements both numbers and strings in table'),
											 new Program(length++,'Test Array','Siva/TestArray.html','A JS program on tesing an array'),
											 new Program(length++,'LodashTest','Siva/LodashTest.html','A JS program on performing lodash arrays'),
											 new Program(length++,'TestLodash','Siva/TestLodash.html','A JS program on performing lodash arrays'),
											 new Program(length++,'Scoping of variables','Siva/Scoping.html','A JS program on performing local and global variables'),
											 new Program(length++,'Scraps Gaming','Siva/Gaming.html','A JS program on gaming of rolling2 dies '),
											 new Program(length++,'Rolling A die','Siva/RollingDie.html','A JS program on Rolling Die'),
											 new Program(length++,'Random Numbers','Siva/RandomNumbers.html','A JS program on performing Random numbers display'),
											 new Program(length++,'Maximun of three numbers','Siva/Maximum.html','A JS program on performing maximun of three numbers'),
											 new Program(length++,'Objectives','Siva/Objectives.html','A JS program on performing squqre of number and maximun of three numbers'),
											 new Program(length++,'Looping Example','Siva/Looping.html','A JS program on performing lopping and displaying numbers'),
											 new Program(length++,'Functions2','Siva/Functions2.html','A JS programm on performing Functions'),
											 new Program(length++,'Functions','Siva/Functions.html','A JS programm on performing  Functions'),
											 new Program(length++,'Logical Operators','Siva/LogicalOperators.html','A JS programm on performing logical operators'),
											 new Program(length++,'using Do..While','Siva/DoWhile.html',' A JS programm on executing do...while loop'),
											 new Program(length++,'Using Switch Case','Siva/SwitchTest.html','A JS programm on using switch case'),
											 new Program(length++,'Variables & Types','Siva/VariablesTypes.html','A JS programm on declaring variable and types also using "use strict"'),
											 new Program(length++,'SumUsingRepitition','Siva/SumUsingRepitition.html',''),
											 new Program(length++,'JSCounterControlled','Siva/JSCounterControlled.html',' A JS programm on creating loops '),
											 new Program(length++,'JavascriptObjects','Siva/JavascriptObjects.html','A JS programm on defining objects and givinf parameters'),
											 new Program(length++,'javascript5 ','Siva/JavascriptExample5.html','A JS programm on use strict'),
											 new Program(length++,'javascript4a','Siva/JavascriptExample4A.html','A JS program on Sentinel-controlled repetition to calculate a class average'),
											 new Program(length++,'javascript4','Siva/JavascriptExample4.html','A JS program on Counter-controlled repetition to calculate a class average'),
											 new Program(length++,'CallBacks','Siva/Callbacks1.html','call backs using JS programming'),
											 new Program(length++,'javascript3','Siva/JavascriptExample3.html','arthemetic operations and alert msgs using JS programming'),
											 new Program(length++,'Chatbox','Siva/ChatBox.html','just a chat box not in executed mode'),
											 new Program(length++,'Virtual chatbox','Siva/ChatBoxrevised.html',' its a virtual chatbox where we have sent the data to the chatroom'),
											 new Program(length++,'onclick action','Siva/ButtonColors.html','This gives you the changing of colors while clicking on the button'),
											 new Program(length++,'Small Claculator','Siva/JavascriptExample.html',' Performing Arthemetic operations using JavaScript program'),
											 new Program(length++,'site Navigation','gayatri/site.html','Description about site navigation example'),
											 new Program(length++,'About xavica','Siva/About.html','Just Introduction about xavica'),
											 new Program(length++,'Buisssiness Analyst','Siva/BA.html','Introduction about buissiness analyst'),
											 new Program(length++,'Designing','Siva/Designing.html','Intoduction about designing team'),
											 new Program(length++,'Developers','Siva/Dev.html','Intoduction about developers team'),
											 new Program(length++,'Our data','Siva/MyExample.html','A small example I have done on our team'),
											 new Program(length++,'bbc website dummy','Siva/bbcwebsite.html','dummt bbc website have done for practising'),
											 new Program(length++,'myamcat-revised','Siva/myamcat.html','Example on developing amcat site')
											 
											]
										 )

					]
}
ko.applyBindings(new IndexViewModel());
