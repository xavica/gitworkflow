var ratings = [];
var dates = [];
var casper = require('casper').create({

    pageSettings: {
        loadImages:  false,         
        loadPlugins: false          
    },
    logLevel: "debug",             
    verbose: true                   
});

var fs = require('fs');

function getRatings() {
    var ratings = document.querySelectorAll('#BVRRRatingOverall_Review_Display > div.BVRRRatingNormalImage > img');
    return Array.prototype.map.call(ratings, function(e) {
        return e.getAttribute('title');
    });
}

function getDate() {
    var dates = document.querySelectorAll('#BVSubmissionPopupContainer > div.BVRRReviewDisplayStyle5Header > div.BVRRReviewDateContainer > span.BVRRValue.BVRRReviewDate');

    return Array.prototype.map.call(dates, function(e) {

        return e.innerHTML;

    });
}

casper.start('http://www.t-mobile.com/cell-phones/samsung-galaxy-s-5.html?bvrrp=9060/reviews/product/1/598aea53-16d0-4c12-b53a-105157092c52.htm', function(){

    this.echo('hi');
});

casper.then(function() {

    ratings = this.evaluate(getRatings);
    dates = this.evaluate(getDate);

    this.echo(ratings);
});


casper.run(function() {

    this.echo(ratings.length + ' ratings found:');

     for(var i=0; i<ratings.length; i++){
        ratings[i] = ratings[i]+': '+dates[i];
        dates[i] = '';
     }
    this.echo(ratings);
    var content = ratings;

    content = content.join("\n");

    fs.write("C:/Users/Karan/Copy/tweesis/implementation/scraping/samsungratings.txt", content, 'w'); 

    this.echo(dates.length + ' dates found:').exit();



});