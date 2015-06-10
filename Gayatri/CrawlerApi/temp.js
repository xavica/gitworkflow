
function productFilter(processArray) {
    var filterArray = [], discardedArray = [];
    for (i = 0; i < processArray.length ; i++) {
        if (processArray[i].status === true) {
            var a = processArray[i].name.split(" ");
            for (j = i + 1; j < processArray.length ; j++) {
                var b = processArray[j].name.split(" ");
                var c = _.intersection(a, b);
                var maxn = Math.max(a.length, b.length);
                var percent = Math.floor(c.length / maxn * 100);
                if (percent >= 65 && processArray[i].actualPrice === processArray[j].actualPrice) {
                    filterArray.push(processArray[j]);
                    discardedArray.push(processArray[j]);
                    processArray[j].status = false;
                }
            }
            if (filterArray.length > 0) {
                var maxDiscount = 0;
                var arrayIndex = 0;
                filterArray.push(processArray[i]);
                _.forEach(filterArray, function (s) {
                    if (this.discountPercentage >= maxDiscount) {
                        maxDiscount = this.discountPercentage;
                        arrayIndex = s;
                    }
                });
                resultArray.push(filterArray[arrayIndex]);
                filterArray = [];
            }

            else {
                resultArray.push(processArray[i]);
            }
        }
    }
}