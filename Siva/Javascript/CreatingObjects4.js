function Book(name,author)
{
	this.name =name ;
	this.author=author;
	document.writeln("<p>"+name +": "+ author+"</p>");
};
Book.prototype.description=function(image,cost,binding,publisher)
{		
		this.image=image;
		this.cost=cost;
		this.binding=binding;
		this.publisher=publisher;
		
		// document.writeln(Book.prototype.cost);
		document.writeln("<br/> "+Book.prototype.image+"<br/> Cost:"+Book.prototype.cost +"/<br/> Binding:"+
						Book.prototype.binding+ "<br/>Publisher: "+
						Book.prototype.publisher);
};

$("book1").value=Book("Revolution","Chetan Bhagat");
$("book1").value=Book.prototype.description("<img src="+"Images/books/book1.jpeg"+">",66,"Paperback" , "Rupa & Co");
$("book2").value=Book("<br/>Half Girlfriend ","Chetan Bhagat");

$("book2").value=Book.prototype.description("<img src="+"Images/books/book2.jpeg"+">",125,"Paperback" , "Rupa 											Publication India");

$("book3").value=Book("<br/> ONE NIGHT @ THE CALL CENTRE ","Chetan Bhagat");

$("book3").value=Book.prototype.description("<img src="+"Images/books/book3.jpeg"+">", 77,"Paperback" , "Rupa 											Publication India");
