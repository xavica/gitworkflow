var array = [1, 2,6,5,8, 3, 4];
console.log("orginal array: "+ array)
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});

console.log("after remove : " + array);


console.log("seperated even numbers after remove:"+evens);

var array2=[12,3,4,5,6,7,8];
console.log("original array :"+ array2);
console.log("after rest:"+(_.rest(array2)));