
var log4js = require('log4js');
var logger = log4js.getLogger('uploader');

var Q = require('q');

var items = [{ id: 0, 'name': '' }, { id: 1, 'name': '' }, { id: 2, 'name': '' }]

var lastPromise = items.reduce(function (promise, item) {
    return promise.then(function (result) {
        if (result) {
            console.log('succes');
        }
        return printOne(item);
    });
}, Q.resolve());

lastPromise
    .then(function () {
        console.log(items);
    });

function printOne(item) {
    var deferred = Q.defer();
    setTimeout(function () {
        var names = ['A', 'B', 'C', 'D', 'E'];
        item.name = names[item.id];
        deferred.resolve(true);
    }, 10);
    return deferred.promise;
}

function printTwo() {
    var deferred = Q.defer();   
    console.log('print two');
    setTimeout(function () {
        console.log('print two result got it');
        deferred.resolve();
    }, 1000);
    return deferred.promise;
}

function printThree() {
    console.log('print three');
    setTimeout(function () {
        console.log('print three result got it');
    }, 500);
}

function getCategories() {
    var deferred = Q.defer();
    setTimeout(function () {
        console.log('print two result got it');
        deferred.resolve(['Laptops','Tablets', 'Cameras',]);
    }, 500);

    return deferred.promise;
}

function getProducts() {
    var deferred = Q.defer();
    setTimeout(function () {
        console.log('print two result got it');
        deferred.resolve(['p1', 'p2', 'p3', ]);
    }, 500);

    return deferred.promise;
}

function getReviews() {
    var deferred = Q.defer();
    setTimeout(function () {
        console.log('print two result got it');
        deferred.resolve(['r1', 'r2', 'r3', ]);
    }, 500);

    return deferred.promise;
}

//printOne();
//printTwo();

//printOne()
//.then(printTwo)
//.then(printThree);


