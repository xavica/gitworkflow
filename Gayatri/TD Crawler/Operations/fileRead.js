var rootFolder = "../logs/",
    fs = require('fs'),
d = new Date(),
        dformat = [(d.getMonth() + 1),
                d.getDate(),
                d.getFullYear()].join('-');
var crawlerFile = rootFolder + dformat + "_crawler.txt",
    filterFile = rootFolder + dformat + "_filter.txt",
    tollFile = rootFolder + dformat + "_toll.txt";

var crawlerStatus = fileStatus(crawlerFile),
filterStatus = fileStatus(filterFile),
tollStatus = fileStatus(tollFile);

var subjectString = "STATUS ==> CRAWLER :: " + crawlerStatus + " , FILTER :: " + filterStatus + " , TOLL :: " + tollStatus;
function fileStatus(fileName) {
    var fileData = "", status = "";
    console.log(fileName);
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        fileData = data;
       
        if (fileData.indexOf("FAIL") > -1) {
            console.log(fileName + "fail");
            status = "FAIL";
        }
        else if (fileData.indexOf("WARN") > -1) {
            status = "WARN";
            console.log(fileName + "warn");

        }
        else {
            status = "SUCCESS";
        }
        return status;
    });
}
console.log(subjectString);