
var _ = require('lodash-node');
console.log("Heloo ");
console.log("this is a Sample Progrm In node js");
var links = [{
    url: "",
    selectors: {
        imageUrl: "Some LInk",
        nameSite: "Amazon",
        dealType: "Today Deals"
    },
    id: "123",
    idScroll: true
},
{
    url: "",
    selectors: {
        imageUrl: "Some LInk",
        nameSite: "FlipKart",
        dealType: "Today Deals"
    },
    id: "123",
    idScroll: true
},
{
    url: "",
    selectors: {
        imageUrl: "Some LInk",
        nameSite: "Amazon",
        dealType: "Today Deals"
    },
    id: "123",
    idScroll: true
},
{
    url: "",
    selectors: {
        imageUrl: "Some LInk",
        nameSite: "FlipKart",
        dealType: "Today Deals"
    },
    id: "123",
    idScroll: true
},
{
    url: "",
    selectors: {
        imageUrl: "Some Link",
        nameSite: "India Times",
        dealType: "Today Deals"
    },
    id: "123",
    idScroll: true
},
  {
      url: "",
      selectors: {
          imageUrl: "Some LInk",
          nameSite: "SnapDeal",
          dealType: "Today Deals"
      },
      id: "123",
      idScroll: false
  }];
console.log("The Containing Object is:", links);
//to print the names in the array

var names = ['Jagan', 'Siva', 'Sai', 'Jagan', 'Kiran', 'Jagan']
_.each(names, function (name) {
    console.log(name);
});
//to print the names in the array

var names = ['Jagan', 'Siva', 'Sai', 'Jagan', 'Kiran', 'Jagan']
_.forEach(names, function (name) {
    console.log(name);
});
//to print the Objects 
var employees = [{
    firstName: 'Siva',
    lastName: 'Jonnala'
}, {
    firstName: 'Gayatri',
    lastName: 'Sarva'
}, {
    firstName: 'Sai',
    lastName: 'Bandreddi'
}];
_.forEach(employees, function (employee) {
    console.log(employee.firstName + " " + employee.lastName);
});

var count = 0;
_.forEach(names, function (name) {
    if (name == 'Jagan') {
        count += 1;
    }
});
console.log("your name exists " + count + " times");

var fruits = ['apple', 'apple', 'mango', 'strawberry', 'strawberry', 'mango', 'apple', 'mango'];

var result = {};
_.each(fruits, function (fruitName) {
    fruitName = fruitName.toLowerCase();
    if (result[fruitName]) {
        result[fruitName] = result[fruitName] + 1;
    } else result[fruitName] = 1;
});
console.log(result);