casper.then(function () {
    this.echo(productsList.length);

    var tempArray = [];
    var results = [], index = 0;

    productsList.forEach(function (item) {
        tempArray.push({
            CategoryId: item.CategoryId,
            ShortDescription: item.ShortDescription,
            Description: "Description",
            RedirectUrl: item.redirectUrl,
            ImageUrl: item.imageUrl,
            StoreName: "Flipkart",
            ActualPrice: item.actualPrice,
            CurrentPrice: item.sellingPrice,
            DiscountPercentage: item.discount,
            IsShippingFree: 1,
            Star: 4,
            IsPublished: 0,
            ShowDate: "1/1/2015",
            Source: "Crawler",
            CreatedDate: "1/1/2015",
            LastUpdateDate: "1/1/2015"
        });
        if (index % 50 === 0) {
            results.push(tempArray);
            tempArray = [];
        }
        index++;
    });
    if (tempArray.length) {
        results.push(tempArray);
    }

    results.forEach(function (data) {
        casper.echo(data);
        casper.thenOpen('http://localhost:16193/api/productstagebulk', {
            method: 'post',
            data: data
        });
    });
    this.echo("pushed  Flipkart items to productstage table");
});
