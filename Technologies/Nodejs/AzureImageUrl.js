var fs = require('fs'),
    request = require('request'),
    _ = require('lodash-node');
var storage = require('azure-storage');

var directoryName = 'Images/';

var testItems = [
                    { "name": "Digiflip Pro XT712", "actualPrice": 9499, "discount": 33, "imageUrl": "http://img6a.flixcart.com/www/promos/new/20150611-105721-vmu-1.3.2-landscape.jpg" },
                    { "name": "Digiflip Pro XT811", "actualPrice": 1099, "discount": 27, "imageUrl": "http://img6a.flixcart.com/www/promos/new/20150610-165306-satinelle.jpg" },
                    { "name": "Digiflip Pro ET701", "actualPrice": 5999, "discount": 45, "imageUrl": "http://img5a.flixcart.com/www/promos/new/20150603-151806-p1-1.jpg" }
]
//Downloading Image 
var downloadImage = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
//genarating uid for Downloaded Image 

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};
//uploading  Image 
function uploadImage(sourceFileName, destinationFileName) {
    var blobService = storage.createBlobService();
    var containerName = 'images';
    blobService.createBlockBlobFromLocalFile(
    containerName,
    destinationFileName,
    sourceFileName,
    function (error, result, response) {
        //console.log(sourceFileName);
        //console.log(destinationFileName);
        if (error) {
            console.log("Couldn't upload file %s", destinationFileName);
            console.error(error);
        } else {
            console.log('File %s uploaded successfully', destinationFileName);
        }
    });
}
testItems.forEach(function (items) {
    var downloadedFileName = generateUUID() + '.jpeg';
    downloadImage(items.imageUrl, directoryName + downloadedFileName, function () {
        console.log('download done');
        uploadImage(directoryName + downloadedFileName, downloadedFileName);
    });
    var resultImageUrl = "https://smamidi.blob.core.windows.net/images/" + downloadedFileName;
    items.imageUrl = resultImageUrl;
    console.log(resultImageUrl);
});
console.log(testItems);