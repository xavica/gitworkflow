var array1=[1,'siva', 2, 1, 2]

//_.indexOf
console.log(_.indexOf(array1, 'siva'));

// using `fromIndex`

console.log(_.indexOf(array1, 2, 2));

// performing a binary search
console.log(_.indexOf(array1, 'siva',true));

var array2= ['siva','jagan', 'gayatri','xavica'];

console.log(_.indexOf(array2, 'siva',true));
////////////////////////////////////
///////////////////////////////////
//-.last()
console.log(_.last(array1));
console.log(_.last(array2));


