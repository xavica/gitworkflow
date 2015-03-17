function Programs(slNo,program,url,description){
	// this.name='SIVA JONNALA';
	this.slNo=slNo;
	this.program = program;
	this.url=url;
	this.description = description;
	
	};


function IndexViewModel(){

	this.programs = [ 	new Programs(length++,'Entering Mobile Data To Table', "EnteringDataToTable_ko.html",'A JS program on Creating Objects, representing classes and representing mobile datda into table'),
						new Programs(length++,'KoExampleonObservable','KoExampleonObservable.html','A JS program on Creating Objects and representing classes'),
						new Programs(length++,'Example Using Knockout','KoExample.html','A JS program on Creating Objects and representing classes' ),
						new Programs(length++,' Lodash functions','takeAndtakeRight.html',' A JS program on performing lodash operations like take() And takeRight()' ),
						new Programs(length++,' _removeAndrest','removeAndrest.html','A JS program on performing lodash operations like remove() And rest()' ),
						new Programs(length++,'_intersectionAndlastIndexOf','intersectionAndlastIndexOf.html','A JS program on Creating Objects and representing classes' ),
						new Programs(length++,'_indexOfAndLast ','indexOfAndLast.html','A JS program on performing lodash operations like indexOf() And Last()' ),
						new Programs(length++,' Lodash Libraries ','pullandpullAt.html','A JS program on performing lodash operations like pull and pullAt' ),
						     
 					];
}
var m= new SivaPrograms();
ko.applyBindings(m);