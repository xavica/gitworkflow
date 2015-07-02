function img() {
    var imageUrlAttribute = '',
        parser = document.createElement('a');
    var ele = document.querySelectorAll('.grid-view .box.product_div .inside');
    for (i = 0; i < ele.length; i++) {
        var imageUrlElement = ele[i].querySelector('p.product_image > a > img');

        //imageUrlAttributeName = imageUrlAttribute || 'src';
        tempImageUrl = (imageUrlElement &&
                       (imageUrlAttributeName && imageUrlElement.getAttribute(imageUrlAttributeName)) || imageUrlElement.getAttribute('src'))
                       || '';
        if (tempImageUrl.indexOf("//") === 0) {
            tempImageUrl = tempImageUrl.replace("//", "");
        }
        if (!tempImageUrl.match("^http")) {
            parser.href = "http://www.homeshop18.com/laptops/categoryid:3291/search:laptops/sort:Discounts/";
            host = parser.protocol + "//" + parser.hostname;
            tempUrl = (tempImageUrl.match("^/") && tempImageUrl) || "/" + tempImageUrl;
            imageUrl = host + tempUrl;
        }
        else {
            imageUrl = tempImageUrl;
        }
        console.log(imageUrl);
    }
}


for (i = 0; i < ele.length; i++) {
    console.log(ele[i].querySelector('p.product_image > a > img').getAttribute('src'));
}