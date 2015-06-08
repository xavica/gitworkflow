// JavaScript source code
var casper = require('casper').create();
casper.start();

// casper.open('http://localhost:16193/api/products', {
//     method: 'post',
//     data: {
//         CategoryId: 1,
//         ShortDescription: "Json ShortDesc",
//         Description: "Json Desc",
//         RedirectUrl: "Json redirecturl",
//         ImageUrl: "Json imageurl",
//         StoreName: "Json Storename",
//         ActualPrice: 1000,
//         CurrentPrice: 800,
//         DiscountPercentage: 20,
//         IsShippingFree: 1,
//         Star: 4,
//         IsPublished: 1,
//         ShowDate: "1/1/2015",
//         Source: "Json Source",
//         CreatedDate: "1/1/2015",
//         LastUpdateDate: "1/1/2015"
//     }
// });

        var request = $.ajax({
            url: "http://localhost:16193/api/productstage/getall",
            method: "GET",
            dataType: 'json',
        });
        request.done(function (data) {
            var mappedItems = _.map(data, function (item) {
                return {
                    id: item.id,
                    menuItem: item.name,
                    iconCode: that.iconCodes[item.id]
                };
            });
        });

casper.then(function () {
    this.echo(mappedItems);
    this.echo('POSTED it.');
});

casper.run();

