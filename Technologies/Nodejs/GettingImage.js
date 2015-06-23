
var fs = require('fs'),
    request = require('request');
var storage = require('azure-storage');

var downloadedFileName = generateUUID() + '.jpeg';
var directoryName = 'Images/';
var url = 'https://cdn1.urbanladder.com/media/slideshow/Lights.gif?1433420196';
//**************** Downloading Image *****************************************//
var downloadImage = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
//****************genarating uid for Downloaded Image *****************************************//

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};


//**************************** uploading  Image *****************************************//
//*********uploadImage(sourceFileName, destinationFileName);

function uploadImage(sourceFileName, destinationFileName) {
    var blobService = storage.createBlobService();
    var containerName = 'images';
    blobService.createBlockBlobFromLocalFile(
    containerName,
    destinationFileName,
    sourceFileName,
    function (error, result, response) {
        console.log(sourceFileName);
        console.log(destinationFileName);

        if (error) {
            console.log("Couldn't upload file %s", destinationFileName);
            console.error(error);
        } else {
            console.log('File %s uploaded successfully', destinationFileName);
        }
    });

}
downloadImage(url, directoryName + downloadedFileName, function () {
    console.log('download done');
    uploadImage(directoryName + downloadedFileName, downloadedFileName);
    console.log("https://smamidi.blob.core.windows.net/images/Images/" + downloadedFileName)
});


