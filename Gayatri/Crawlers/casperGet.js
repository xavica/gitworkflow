var casper = require('casper').create();

casper.start().then(function() {
    this.open('http://localhost:16193/api/productstage/getall', {
        method: 'get',
        headers: {
            'Accept': 'application/json'
        }
    });
});
// casper.then(function() {
//     require('utils').dump(JSON.parse(this.getPageContent()));
// });

// casper.run(function() {
//     this.exit();
// });

casper.then(function() {
    // console.log(this.getPageContent());
    var id  = this.getFieldValue('id');
    console.log(id);
});

casper.run(function() {
    this.exit();
});