var items = [
                { "name": "Digiflip Pro XT712 (2nd Gen) with 3G Calling (Black, 16, Wi-Fi, 3G)", "actualPrice": 9499, "discount": 33 },
                { "name": "Digiflip Pro XT811 Tablet (Space Blue, 16, Wi-Fi, 3G)", "actualPrice": 10999, "discount": 27 },
                { "name": "Digiflip Pro ET701 Tablet (Grey, 8 GB, 3G via Dongle, WiFi)", "actualPrice": 5999, "discount": 45 },
                { "name": "Lenovo Yoga 2 Tablet Android 8 inch (Platinum, 16, Wi-Fi, 4G)", "actualPrice": 22499, "discount": 15 },
                { "name": "Digiflip Pro ET701 Tablet (White, 8 GB, 3G via Dongle, WiFi)", "actualPrice": 5999, "discount": 45 },
                { "name": "Digiflip Pro XT811 Tablet (Champagne Gold, 16, Wi-Fi, 3G)", "actualPrice": 10999, "discount": 31 },
                { "name": "Lenovo A7-30 3G Tablet (Black, 8, Wi-Fi, 3G)", "actualPrice": 10800, "discount": 35 },
                { "name": "Lenovo S8 Tablet (Ebony, 16, Wi-Fi, 4G)", "actualPrice": 18000, "discount": 13 },
                { "name": "Lenovo A7-30 Tablet (White, 8, Wi-Fi, 2G)", "actualPrice": 7500, "discount": 20 },
                { "name": "Huawei Honor T1 (Silver (White Panel), 8, Wi-Fi, 3G)", "actualPrice": 9999, "discount": 10 },
                { "name": "Asus Fonepad 7 2014 FE170CG Tablet (Black, 8, Wi-Fi, 3G)", "actualPrice": 8499, "discount": 5 },
                { "name": "Datawind UbiSlate 7CZ Tablet (4, Wi-Fi, 2G)", "actualPrice": 4499, "discount": 25 },
                { "name": "Google Nexus 7 2013 Tablet (Wi-Fi, 32 GB) (Black, 32, Wi-Fi Only)", "actualPrice": 23999, "discount": 33 },
                { "name": "Asus Fonepad 7 ME175CG Dual Sim Tablet (White, 8, Wi-Fi, 3G)", "actualPrice": 12999, "discount": 30 },
                { "name": "HP 7 Voice Tab (White, 8, Wi-Fi, 3G)", "actualPrice": 12476, "discount": 32 },
                { "name": "Micromax Canvas Tab P470 (Silver, 8, Wi-Fi, 3G)", "actualPrice": 7499, "discount": 6 },
                { "name": "Micromax Canvas Tab P470 (Grey, 8, Wi-Fi, 3G)", "actualPrice": 7499, "discount": 3 },
                { "name": "Apple 16GB iPad Mini with Wi-Fi (Silver, 16, Wi-Fi Only)", "actualPrice": 21900, "discount": 22 },
                { "name": "HP 10 Tablet (8, Wi-Fi, 3G)", "actualPrice": 19999, "discount": 35 },
                { "name": "Asus Fonepad 7 2014 FE170CG Tablet (Blue, 8, Wi-Fi, 3G)", "actualPrice": 8499, "discount": 5 },
                { "name": "Datawind UbiSlate 7C+ Tablet (4, Wi-Fi, 2G)", "actualPrice": 5000, "discount": 36 },
                { "name": "Asus Fonepad 7 2014 FE170CG Tablet (White, 8, Wi-Fi, 3G)", "actualPrice": 8499, "discount": 5 },
                { "name": "Apple 16GB iPad Mini with Wi-Fi (Space Grey, 16, Wi-Fi Only)", "actualPrice": 21900, "discount": 28 },
                { "name": "Asus Fonepad 7 2014 FE170CG Tablet (Red, 8, Wi-Fi, 3G)", "actualPrice": 8499, "discount": 5 },
                { "name": "HP Slate 7 Voice Tab (Snow White, 16, Wi-Fi, 3G)", "actualPrice": 16264, "discount": 32 },
                { "name": "Digiflip Pro XT911 Tablet (White, 16, Wi-Fi, 3G)", "actualPrice": 15999, "discount": 25 },
                { "name": "Lenovo Yoga 2 Tablet Android 10.1 inch (Platinum, 16, Wi-Fi, 4G)", "actualPrice": 29999, "discount": 8 },
                { "name": "Dell Venue 7 3740 Tablet (Black, 16 GB, 3G, Voice Calling)", "actualPrice": 14999, "discount": 43 },
                { "name": "Digiflip Pro XT 801 Tablet (Blue, 16, Wi-Fi Only)", "actualPrice": 9999, "discount": 37 },
                { "name": "Lenovo A7-50 Tablet (16, Wi-Fi, 3G)", "actualPrice": 15500, "discount": 20 },
                { "name": "Samsung Galaxy Tab 3 Neo Tablet (Cream White, 8, Wi-Fi, 3G)", "actualPrice": 10839, "discount": 12 },
                { "name": "iBall 6351-Q40 Tablet (Grey, 8, Wi-Fi, 3G)", "actualPrice": 4999, "discount": 14 },
                { "name": "Datawind UbiSlate 3G7 Tablet (4, Wi-Fi, 3G)", "actualPrice": 6499, "discount": 10 },
                { "name": "Samsung Galaxy Tab 4 T231 Tablet (Ebony Black, 8, Wi-Fi, 3G)", "actualPrice": 19190, "discount": 14 },
                { "name": "Digiflip Pro XT901 Tablet (White, 16, Wi-Fi Only)", "actualPrice": 13999, "discount": 32 },
                { "name": "Samsung Galaxy Tab 4 T231 Tablet (White, 8, Wi-Fi, 3G)", "actualPrice": 19190, "discount": 15 },
                { "name": "HCL ME Sync 1.0 (U3) Tablet (White, 8, Wi-Fi, 2G)", "actualPrice": 7500, "discount": 13 },
                { "name": "Samsung Galaxy Tab 3 Neo Tablet (Ebony Black, 8, Wi-Fi, 3G)", "actualPrice": 14600, "discount": 32 },
                { "name": "Lenovo Idea Tab A1000 Tablet (Black, 4, Wi-Fi, 2G)", "actualPrice": 10500, "discount": 11 },
                { "name": "Google Nexus 7 C 2013 Tablet (Black, 32, Wi-Fi, 4G)", "actualPrice": 27999, "discount": 17 },
                { "name": "HCL ME Connect V3 Tablet (Silver, 4, Wi-Fi, 2G)", "actualPrice": 9499, "discount": 8 },
                { "name": "Micromax Canvas Tab P666 (Black, 8, Wi-Fi, 3G)", "actualPrice": 19999, "discount": 52 },
                { "name": "Lenovo Yoga 2 Windows Tablet 10.1 inch with Built-in Keyboard (Ebony, 32, Wi-Fi,4G", "actualPrice": 35999, "discount": 8 },
                { "name": "iBall Slide 3G 7345Q-800 Tablet (Grey, 8, Wi-Fi, 3G)", "actualPrice": 11299, "discount": 30 },
                { "name": "Micromax Funbook Mini P410i Tablet (Wi-Fi, 3G) (Black, 1, Wi-Fi, 3G)", "actualPrice": 9999, "discount": 42 },
                { "name": "HCL ME Connect 3G 2.0 (Silver, 8, Wi-Fi, 3G)", "actualPrice": 10999, "discount": 27 },
                { "name": "Apple 16 GB iPad Air with Wi-Fi (Silver, 16, Wi-Fi Only)", "actualPrice": 28990, "discount": 3 },
                { "name": "Dell Venue 7 Tablet (16, Wi-Fi, 3G)", "actualPrice": 14999, "discount": 34 },
                { "name": "Swipe Halo Fone Tablet (Black, 4, Wi-Fi, 3G)", "actualPrice": 8500, "discount": 26 },
                { "name": "Apple 16 GB iPad Air with Wi-Fi (Space Grey, 16, Wi-Fi Only)", "actualPrice": 28900, "discount": 3 },
                { "name": "Micromax Canvas Tab P666 (White, 8, Wi-Fi, 3G)", "actualPrice": 19999, "discount": 52 },
                { "name": "Apple iPad Air 2 Wi-Fi + Cellular 64 GB Tablet (Gold, 64, Wi-Fi, 4G)", "actualPrice": 52900, "discount": 1 },
                { "name": "HCL Me Champ Tablet (White, 4, Wi-Fi Only)", "actualPrice": 7399, "discount": 33 },
                { "name": "iBall 6095 D20 (Silver, 8, Wi-Fi, 3G)", "actualPrice": 7999, "discount": 18 },
                { "name": "Apple iPad Air 2 Wi-Fi 16 GB Tablet (Space Grey, 16, Wi-Fi Only)", "actualPrice": 35900, "discount": 1 },
                { "name": "Swipe MTV Slash 3G Tablet (White, 4, Wi-Fi, 3G)", "actualPrice": 8500, "discount": 27 },
                { "name": "Vox V105 4.4 Android Kitkat Calling Tablet With Keyboard (White, 4)", "actualPrice": 4999, "discount": 10 },
                { "name": "Swipe MTV Slash 3G Tablet (White, 4, Wi-Fi, 3G)", "actualPrice": 15990, "discount": 18 },
                { "name": "Vox V105 4.4 Android Kitkat Calling Tablet With Keyboard (White, 4)", "actualPrice": 7999, "discount": 10 },
                { "name": "Dell Venue 8 (16 GB) Tablet (Black, 16, Wi-Fi Only)", "actualPrice": 39900, "discount": 14 },
                { "name": "Dell Venue 8 Tablet (32, Wi-Fi, 3G)", "actualPrice": 52900, "discount": 2 },
                { "name": "Swipe MTV Slash 3G Tablet (Gold, 8, Wi-Fi, 3G)", "actualPrice": 13990, "discount": 25 },
                { "name": "Apple 16GB iPad with Retina Display and Wi-Fi Cellular (White, 16, Wi-Fi, 3G)", "actualPrice": 37900, "discount": 10 },
                { "name": "Apple iPad Air 2 Wi-Fi + Cellular 64 GB Tablet (Space Grey, 64, Wi-Fi, 4G)", "actualPrice": 18488, "discount": 9 },
                { "name": "Asus Fonepad 7 ME175CG Dual Sim Tablet (Grey, 8, Wi-Fi, 3G)", "actualPrice": 4749, "discount": 5 },
                { "name": "Apple 16GB iPad with Retina Display and Wi-Fi Cellular (Black, 16, Wi-Fi, 3G)", "actualPrice": 5000, "discount": 10 },
                { "name": "HP Stream 8 Tablet (Black, 32, Wi-Fi, 3G)", "actualPrice": 8999, "discount": 21 },
                { "name": "Micromax Funbook P280 Tablet (Grey, 4, Wi-Fi Only)", "actualPrice": 3999, "discount": 7 },
                { "name": "Digitab DT-LM711 (Black, 4, Wi-Fi, 3G)", "actualPrice": 4499, "discount": 6 },
                { "name": "iBall 7271 HD70 (Silver, 8, Wi-Fi, 3G)", "actualPrice": 6599, "discount": 31 },
                { "name": "Vox V105 4.4 Android Kitkat Calling Tablet (White & Silver, 4)", "actualPrice": 9999, "discount": 35 },
                { "name": "Vox V102 Dual Sim Calling Tablet with Android 4.4.2 Kitkat (Black, 4)", "actualPrice": 27900, "discount": 1 },
                { "name": "Micromax Funbook Mini P365 Tablet (Black, 1.6, Wi-Fi, 2G)", "actualPrice": 21500, "discount": 40 },
];
var processArray = items.map(function (item) {
    return {
        "name": item.name,
        "discount": item.discount,
        "actualPrice" : item.actualPrice,
        "status": true
    }
});
//convert into lowercase
 _.forEach(processArray, function (item) {
   item.name = item.name.toLowerCase();
 });
 console.log(processArray);
//common keywords array
commonWords = [",", "/", "(", ")", " for ", " with ", " is ", " via ", " only ", " star rating", " tablet ", " mobile ", "-"];

//replace common keywords with nothing 
for (i = 0; i < processArray.length; i++)
    for (j = 0; j < commonWords.length; j++)
        processArray[i].name = processArray[i].name.replace(commonWords[j], "");

var resultArray = [], filterArray = [], discardedArray = [];
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
                if (this.discount >= maxDiscount) {
                    maxDiscount = this.discount;
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
console.log(processArray.length);
console.log(resultArray.length);
console.log(resultArray);
console.log(discardedArray);
