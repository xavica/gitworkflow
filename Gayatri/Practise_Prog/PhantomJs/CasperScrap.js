casper = require('casper').create()  
// casper.start 'https://www.google.co.in/search?q=flower', ->  
//     @.capture 'google-flower.png'
//     console.log("page created");



// casper.start('https://www.google.co.in/?gfe_rd=cr&ei=PWU3Vb7MA_TI8AfvyYGwBg#q=love', function() {
//     this.capture('google-love.png');
//     this.echo(this.getTitle());
//     console.log("page created");
// });


// casper.start('http://www.google.fr/', function() {
//     this.capture('google1.png', {
//         top: 100,
//         left: 100,
//         width: 500,
//         height: 400
//     });
// });


casper.start('http://www.amazon.in/s/ref=sr_pg_2?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=2&bbn=1375458031&ie=UTF8&qid=1426669276', function() {
    this.capture('amazon-mobiles.png');
    // this.captureSelector('flipkart-mobile-images.png','#fk-mainhead-id');
   // this.captureSelector('flipkart-mobile-images1.png','#prd_title');

    this.echo(this.getTitle());
    console.log("flipkart mobiles page created");
});


casper.run();