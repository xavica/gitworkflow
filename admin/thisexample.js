

var obj = {
	name : 'gayatri',
	display : function(){
		console.log(this.name + this.firstName);
	}
};
obj.firstName = 'asfdsf';
obj.display();

var obj2{
	name : 'jagan'
};

obj2.display = obj.display;

function add(a,b){
	this.name = 'asfsaf';
	return a+b;

}

obj.displayabc = add;
obj.displayabc(10,20);

add(10,20);

$(document).ready(function(){
	this.a = 10;
	console.log(this.name);
});

$('#btnClick').click(function(){
	this.a = 19;
	console.log(this.name);
});

function add(a,b, customfunction){
	customfunction(a+b);
}

add(10,20, function(result){
	console.log(this.name);
	console.log(result);
});


