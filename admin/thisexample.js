

var obj = {
	this.name = 'gayatri',
	this.display = function(){
		console.log(this.name);
	}
};

var obj2{
	this.name = 'jagan'
};

obj2.display = obj.display;

function add(a,b){
	return a+b;
}