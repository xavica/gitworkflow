console.log(_.dropRightWhile([0,1,2,3,'siva',4,5,45,'jagan',6,7,8,9], function(n) {
  return n<45;
}));

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

// using the `_.matches` callback shorthand
console.log(_.pluck(_.dropRightWhile(users, { 'user':'pebbles', 'active': false }), 'user'));


// using the `_.matchesProperty` callback shorthand
console.log(_.pluck(_.dropRightWhile(users, 'active', false), 'user'));


// using the `_.property` callback shorthand
console.log(_.pluck(_.dropRightWhile(users, 'user'), 'user'));



////

