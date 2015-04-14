var	array1=[1,'siva',2,3,4];
var array2=[2,'jagan',3,4,5];
var array3=[3,'gayatri','siva',4,5,6];
console.log('original arrays : \n'+ array1 + '\n'+ array2 + '\n'+array3);
console.log('after union ():'+_.union(array1,array2, array3));


var array4=[3,2,1,3,4,5,4,1];
console.log('original array is : \n'+ array4);

console.log('after uniq '+_.uniq(array4));


var array5 = [3,2,1,3,4,5,4,1];
console.log('original array is : \n'+ array5);

console.log('after uniq '+ _.uniq(array5));

var y = _.uniq(array5);
console.log(y);

var array5 = [1,1,2,2,3,3,4,4,5,5];
console.log('original array is : \n'+ array5);

console.log('after uniq '+ _.uniq(array5));

var y = _.uniq(array5,true);
console.log(y);

