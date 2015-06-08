// casper.start('http://www.amazon.in/s/ref=sr_pg_3?rh=n%3A976392031%2Cn%3A%21976393031%2Cn%3A1375458031%2Cp_76%3A1318482031&page=3&bbn=1375458031&ie=UTF8&qid=1429780903', function() {
//   // var k = this.fetchText('#result_48 > div');
//   var k = this.getElementsAttribute('#result_48 > div');
// 	console.log(k);
// });
// casper.run();
 // require('utils').dump(this.getElementInfo('#products > div.old-grid'));

    // require('utils').dump(this.getElementInfo('#products > div.old-grid > div:nth-child(3) > div:nth-child(1)')); 
    // var textData = this.getElementInfo(' #products > div.old-grid > div:nth-child(3) > div:nth-child(1) > div > div.pu-details.lastUnit > div.pu-title.fk-font-13'));
 // var textData = this.fetchText('#products > div.old-grid > div:nth-child(3) > div:nth-child(1) > div > div.pu-details.lastUnit > div.pu-title.fk-font-13');
 // textData = textData.replace(/^\s+|\s+$/g, '');
 // console.log(textData);

// var textUp = this.fetchText('#products > div.old-grid > div:nth-child(3) > div:nth-child(1)');
//  textUp = textUp.replace(/(\r\n|\n|\r)/gm,"");
//  textUp = textUp.replace(/\s+/g," ");
//   console.log(textUp);


// var textUp = this.fetchText('#products > div.old-grid');
//  textUp = textUp.replace(/(\r\n|\n|\r)/gm,"");
//  textUp = textUp.replace(/\s+/g," ");
//   console.log(textUp);


var casper = require('casper').create();
 casper.start('http://www.flipkart.com/tablets/pr?sid=tyy,hry&otracker=ch_vn_tablet_filter_Brands_ALL', function() {
 	
	var textUp = this.fetchText('#products > div.old-grid > div:nth-child(1) > div:nth-child(1)');

	 textUp = textUp.replace(/(\r\n|\n|\r)/gm,"");
	 textUp = textUp.replace(/\s+/g," ");
	  console.log(textUp);
});

 


 	
casper.run();