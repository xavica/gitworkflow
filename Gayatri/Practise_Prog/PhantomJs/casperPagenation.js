var navigation = [
    {url: 'http://www.t-mobile.com/cell-phones/samsung-galaxy-s-5.html?bvrrp=9060/reviews/product/1/598aea53-16d0-4c12-b53a-105157092c52.htm', 
    selectorRatings:'#BVRRRatingOverall_Review_Display > div.BVRRRatingNormalImage > img', 
    selectorDate :'#BVSubmissionPopupContainer > div.BVRRReviewDisplayStyle5Header > div.BVRRReviewDateContainer > span.BVRRValue.BVRRReviewDate'}

    ,{url: 'yourSecondUrl, etc...', 
    selectorRatings:'#BVRRRatingOverall_Review_Display > div.BVRRRatingNormalImage > img'
    ,selectorDate :'#BVSubmissionPopupContainer > div.BVRRReviewDisplayStyle5Header > div.BVRRReviewDateContainer > span.BVRRValue.BVRRReviewDate'}
    ]
    ,content = ""
    ;

    casper.start()
    //forEach works with IE versions > IE8 -> info which can be useful for trifleJS
    .then(function(){
        //loop on the array
        navigation.forEach(function(navIndex){
            //open url : property url 
            casper.thenOpen(navIndex.url)
            //wait for the page to load -> must be useless because thenOpen() do it
            .waitForUrl(navIndex.url, function(){
                //get the value of attribute title of adequate selector
                var ratings = this.getElementAttribute(navIndex.selectorRatings, 'title'),
                //get the HTML of adequate selector
                var dates = this.getHTML(navIndex.selectorDates);
                this.echo(ratings);
                this.echo(dates);
                content = content +  ' ' + ratings + ' ' + dates;
            }); 
        });
    })
    .run(function() {
            this.echo('----------- All steps done ------------\n');
            this.exit();
    });