var	array1= [1, 2];
var array2= [4, 2];
var array3= [2, 1];

//-.intersection
console.log(_.intersection(array1,array2, array3));

//_.lastIndexOf()

console.log(_.lastIndexOf([1, 2, 1, 2], 2));
// → 3

// using `fromIndex`
console.log(_.lastIndexOf([1, 3,2, 6,8,1,8, 2], 2, 2));

