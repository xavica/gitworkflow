var array1=[1,4];
var	array2=[2,5];
var array3=[3,6];
console.log('original arrays :\n'+ array1+'\n'+array2+'\n'+array3);
var zipped = _.zip(array1, array2, array3);
console.log('after zip :');
console.log(zipped[0]);
console.log(zipped[1])
var unzipped = _.unzip(zipped);
console.log('after unzipped :');

console.log(unzipped[0]);
console.log(unzipped[1]);
console.log(unzipped[2]);



