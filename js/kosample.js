function Knock1(){
	this.firstName = 'John';
	this.lastName = 'Gadd';

}

var k1 = new Knock1();
//ko.applyBindings(k1);


function Knock2(){
	this.firstName = ko.observable('');
	this.lastName = ko.observable('');
	this.fullName = ko.computed(function() {
    return this.firstName() + " " + this.lastName();    
}, this);
}
var k2 = new Knock2();

function Book(name, author){
	this.name = name;
	this.author = author;
}

function BookViewModel(){
	var that = this;
	
	this.books = [ new Book('JS', 'Kyle'),
new Book('You dont know js', 'Scott'),
new Book('you dont know this','Joel Rumerman') ];

/*this.books = ko.observableArray([ new Book('JS', 'Kyle'),
new Book('You dont know js', 'Scott'),
new Book('you dont know this','Joel Rumerman') ]);*/
}

var k = new BookViewModel();

//ko.applyBindings(k2);
ko.applyBindings(k);