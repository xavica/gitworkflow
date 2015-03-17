var array1=[1, 2,1,4,5,'siva', 'jagan',6,'gayatri',8,9, 3];

console.log('Original Array :'+array1)
console.log('After Without():'+_.without(array1, 1, 2));
var array2=[1, 2, 'siva', 'gayatri'];
var array3=[4,'kiran', 'Anoo', 'siva'];
console.log('Orginal Arrays:'+'\nArray1:'+array2+'\nArray2:'+array3)
console.log('After Xor():'+_.xor(array2, array3));