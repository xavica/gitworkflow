
var items = [
            { "name": "Digiflip Pro XT712 (2nd Gen) with 3G Calling (Black, 16, Wi-Fi, 3G)", "discount": 26, "actualPrice": 9499 },
            { "name": "Digiflip Pro XT811 Tablet (Space Blue, 16, Wi-Fi, 3G)", "discount": 18, "actualPrice": 10999 },
            { "name": "Digiflip Pro ET701 Tablet (Grey, 8 GB, 3G via Dongle, WiFi)", "discount": 35, "actualPrice": 5999 },
            { "name": "Lenovo Yoga 2 Tablet Android 8 inch (Platinum, 16, Wi-Fi, 4G)", "discount": 15, "actualPrice": 22499 },
            { "name": "Digiflip Pro ET701 Tablet (White, 8 GB, 3G via Dongle, WiFi)", "discount": 33, "actualPrice": 5999 },
            { "name": "Digiflip Pro XT811 Tablet (Champagne Gold, 16, Wi-Fi, 3G)", "discount": 28, "actualPrice": 10999 },
            { "name": "Lenovo A7-30 3G Tablet (Black, 8, Wi-Fi, 3G)", "discount": 35, "actualPrice": 10800 },
            { "name": "Lenovo S8 Tablet (Ebony, 16, Wi-Fi, 4G)", "discount": 2, "actualPrice": 18000 },
            { "name": "Lenovo A7-30 Tablet (White, 8, Wi-Fi, 2G)", "discount": 20, "actualPrice": 7500 },
            { "name": "Huawei Honor T1 (Silver (White Panel), 8, Wi-Fi, 3G)", "discount": 10, "actualPrice": 9999 },
            { "name": "Asus Fonepad 7 2014 FE170CG Tablet (Black, 8, Wi-Fi, 3G)", "discount": 5, "actualPrice": 8499 },
            { "name": "Datawind UbiSlate 7CZ Tablet (4, Wi-Fi, 2G)", "discount": 20, "actualPrice": 4499 },
            { "name": "Google Nexus 7 2013 Tablet (Wi-Fi, 32 GB) (Black, 32, Wi-Fi Only)", "discount": 33, "actualPrice": 23999 },
            { "name": "Asus Fonepad 7 ME175CG Dual Sim Tablet (White, 8, Wi-Fi, 3G)", "discount": 30, "actualPrice": 12999 },
            { "name": "HP 7 Voice Tab (White, 8, Wi-Fi, 3G)", "discount": 31, "actualPrice": 12999 },
            { "name": "Micromax Canvas Tab P470 (Silver, 8, Wi-Fi, 3G)", "discount": 3, "actualPrice": 7499 },
            { "name": "Micromax Canvas Tab P470 (Grey, 8, Wi-Fi, 3G)", "discount": 1, "actualPrice": 7499 },
            { "name": "Apple 16GB iPad Mini with Wi-Fi (Silver, 16, Wi-Fi Only)", "discount": 3, "actualPrice": 21900 },
            { "name": "HP 10 Tablet (8, Wi-Fi, 3G)", "discount": 37, "actualPrice": 20762 },
            { "name": "Dell Venue 7 3000 Series Tablet (16GB, WiFi, 3G, Voice calling), Black", "discount": 35, "actualPrice": 14999 },
            { "name": "HP Slate 7 VoiceTab Tablet (16GB, WiFi, 3G, Voice Calling), Snow White", "discount": 44, "actualPrice": 19990 },
            { "name": "Lenovo Tab 2 A7-30 Tablet (WiFi, 3G, Voice Calling, 16GB), Ebony Black", "discount": 9, "actualPrice": 11800 },
            {"name": "iBall slide 6351-Q40 Tablet (16GB, WiFi)", "discount": 45, "actualPrice": 14299},
            { "name": "Datawind Ubislate 7CZ Tablet (4GB, WiFi, 3G via Dongle, Voice calling)", "discount": 33, "actualPrice": 5999 },
            { "name": "iBall Performance 3G Q7271-IPS20 Tablet (8GB, WiFi, 3G, Voice Calling)", "discount": 9, "actualPrice": 8999 },
            { "name": "Lava Ivory Xtron Z704 Tablet (16GB, WiFi), Silver", "discount": 27, "actualPrice": 4999 },
            { "name": "iBall Slide WQ32 Tablet (16GB, WiFi, 3G)", "discount": 53, "actualPrice": 16999 },
            { "name": "iBall Slide Performance Series 7236 2G Tablet (4GB, WiFi, Voice Calling)", "discount": 19, "actualPrice": 6499 },
            { "name": "Micromax Funbook Duo P310 Tablet (WiFi, Voice Calling, Dual SIM), Grey", "discount": 49, "actualPrice": 9999 },
            { "name": "iBall Slide 1026-Q18 Tablet (10.1 inch, 8GB, WiFi, 3G, Voice Calling), White", "discount": 1, "actualPrice": 12999 },
            { "name": "iBall Slide 3G 7803 Q900 Tablet (16GB, WiFi, 3G, Voice Calling)", "discount": 9, "actualPrice": 13999 },
            { "name": "HP 10 Tablet (8GB, WiFi,3G), Silver", "discount": 43, "actualPrice": 11590 },
            { "name": "iBall Performance Slide 3G 6095-D20 Tablet (8GB, WiFi, 3G, Voice Calling), White", "discount": 20, "actualPrice": 16363 },
            { "name": "HP Stream 8 Tablet (WiFi, 3G), Black", "discount": 21, "actualPrice": 4749 },
            { "name": "Apple iPhone 6 (Gold, with 16 GB)", "discount": 16, "actualPrice": 22500 },
            { "name": "Micromax Funbook P280 Tablet with Leather Case and Keyboard (4GB, WiFi, 3G via Dongle),Grey", "discount": 11, "actualPrice": 17490 },
            { "name": "Toshiba WT8-B Tablet (8.0-inch, 32GB, WiFi, 3G via Dongle with Y Cable), Satin Gold", "discount": 9, "actualPrice": 4749 },
            { "name": "Micromax Funbook P280 Tablet (4GB, WiFi, 3G via Dongle), White", "discount": 25, "actualPrice": 29999 },
            { "name": "Lenovo Yoga 10 Tablet (16GB, WiFi, 3G), Silver", "discount": 18, "actualPrice": 17999 },
            { "name": "iBall Q1035 Tablet (8GB, WiFi, 3G, Voice Calling)", "discount": 2, "actualPrice": 3407 },
            { "name": "Datawind Ubislate 7C+ Edge Tablet (WiFi, 3G via Dongle, Voice Calling)", "discount": 5, "actualPrice": 5800 },
            { "name": "iBall Performance Slide Q7218 Tablet (WiFi, 3G, Voice Calling)", "discount": 26, "actualPrice": 9999 },
            { "name": "Eddy - Cartoon Network Creativity Kids Tablet (WiFi), Intel Series with Bumper Case", "discount": 9, "actualPrice": 3990 },
            { "name": "Domo Slate X15 Tablet (WiFi, 3G via Dongle)", "discount": 24, "actualPrice": 17999 },
            { "name": "iBall Slide Brace X1 Tablet (WiFi, 3G, Voice Calling)", "discount": 3, "actualPrice": 10499 },
            { "name": "Iball Slide Performance 3G 9017-D50 Tablet", "discount": 31, "actualPrice": 10990 },
             { "name": "Apple iPhone 6 (Silver, with 64 GB)", "discount": 14, "actualPrice": 56750 },
            { "name": "Asus Fonepad 7 FE170CG-6DO14A (K012) Tablet (WiFi, 3G, Voice Calling, 8GB, Dual SIM, Blue", "discount": 52, "actualPrice": 7794 },
            { "name": "iBall Slide 3G 6095-Q700 Tablet (16GB, WiFi, 3G, Voice Calling)", "discount": 24, "actualPrice": 6199 },
            { "name": "Salora Pro Tab Tablet (WiFi, 3G via Dongle), White", "discount": 12, "actualPrice": 6999 },
            { "name": "Datawind UbiSlate 3G7 Tablet (WiFi, 3G, Voice Calling)", "discount": 10, "actualPrice": 14415 },
            { "name": "iBall Slide 3G-1035Q-90 Tablet (8GB, WiFi, 3G, Voice Calling)", "discount": 10, "actualPrice": 36000 },
            { "name": "HP Omni 10 Tablet (WiFi)", "discount": 20, "actualPrice": 14275 },
             { "name": "Apple iPhone 6 (Space Grey, with 128 GB)", "discount": 14, "actualPrice": 77900 },
            { "name": "HP Slate 6 Voice Tab 2 Tablet (WiFi, 3G, Voice Calling), Modern Silver", "discount": 10, "actualPrice": 13990 },
            { "name": "D-Link D100 Tablet (WiFi, 3G, Voice Calling), Pearl White", "discount": 25, "actualPrice": 9999 },
            { "name": "Eddy - Cartoon Network Ben 10 Kids Tablet (WiFi), Intel Series with Bumper Case", "discount": 11, "actualPrice": 9590 },
            { "name": "HCL ME Connect V3 Tablet (WiFi, Voice Calling, 8GB), Silver", "discount": 51, "actualPrice": 19990 },
            { "name": "Digitab DTSSP1078W Tablet (WiFi, 3G)", "discount": 47, "actualPrice": 13990 },
            { "name": "Digitab DTLM72T Tablet (WiFi, 3G, Voice Calling)", "discount": 6, "actualPrice": 9590 },
            { "name": "HCL ME Connect V3 Tablet ( 4GB, WiFi, Voice Calling), Silver", "discount": 23, "actualPrice": 10999 },
            { "name": "Swipe MTV Slash Tablet (4GB, WiFi, 3G)", "discount": 8, "actualPrice": 8990 },
            { "name": "Asus Fonepad 7 FE170CG Tablet (8GB, WiFi, 3G, Voice Calling, Dual SIM), Black", "discount": 37, "actualPrice": 3995 },
            { "name": "Arow At-70 JB Tablet (WiFi), Black", "discount": 15, "actualPrice": 17499 },
            { "name": "HP Omni 10 Tablet (WiFi)", "discount": 40, "actualPrice": 14275 },
            { "name": "Asus FonePad ME371MG-1B058A Tablet (8GB, WiFi, 3G, Voice Calling), Grey", "discount": 14, "actualPrice": 6499 },
            { "name": "HCL ME Sync 1.0 (U3) Tablet (4GB, WiFi, 3G via Dongle), White", "discount": 30, "actualPrice": 8990 },
            { "name": "Milagrow M2 Pro Tablet (8GB, WiFi, 3G, Voice Calling, 8GB), White", "discount": 24, "actualPrice": 6999 },
            { "name": "Apple iPhone 6 (Space Grey, with 16 GB)", "discount": 14, "actualPrice": 22500 },

];
function arraysInCommon(arrays) {
    var i, common,
    L = arrays.length, min = Infinity;
    while (L) {
        if (arrays[--L].length < min) {
            min = arrays[L].length;
            i = L;
        }
    }
    common = arrays.splice(i, 1)[0];
    return common.filter(function (itm, indx) {
        if (common.indexOf(itm) == indx) {
            return arrays.every(function (arr) {
                return arr.indexOf(itm) != -1;
            });
        }
    });
}
//console.log(items);
//convert into lowercase
for (i = 0; i < items.length; i++)
    items[i].name = items[i].name.toLowerCase();
//console.log(items);

//common keywords array
commonWords = [",", "/", "(", ")", " for ", " with ", " is ", " via ", " only ", " star rating", " tablet ", " mobile ", "-"];

//replace common keywords with nothing 
for (i = 0; i < items.length; i++)
    for (j = 0; j < commonWords.length; j++)
        items[i].name = items[i].name.replace(commonWords[j], "");
//console.log(items);
var processArray = items;
//looping & preparing for a ,b set.
var resultArray = [], filterArray = [], indexArray = [];
for (i = 0; i < items.length ; i++) {
        if (i in indexArray)
            continue;
    var a = items[i].name.split(" ");
    for (j = i + 1; j < items.length ; j++) {
        var b = items[j].name.split(" ");
        var c = arraysInCommon([a, b]);
        var maxn = Math.max(a.length, b.length);
        var percent = Math.floor(c.length / maxn * 100);
        if (percent >= 65 && items[i].actualPrice === items[j].actualPrice) {
            filterArray.push(items[j]);
            indexArray.push(j);
        }
    }
    if (filterArray.length > 0) {
        var maxDiscount = 0;
        var arrayIndex = 0;
        filterArray.push(items[i]);
        for (s = 0; s < filterArray.length; s++) {
            if (filterArray[s].discount >= maxDiscount) {
                maxDiscount = filterArray[s].discount;
                arrayIndex = s;
            }
        }
        resultArray.push(filterArray[arrayIndex]);
        filterArray = [];
    }

    //else {
    //    //console.log("this is inside else=" + i);
    //    resultArray.push(items[i]);
    //}
}



console.log(items.length);
console.log(resultArray.length);
console.log(resultArray);



