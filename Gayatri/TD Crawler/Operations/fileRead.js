fs = require('fs');

var fileName = "logs/" + dformat + "_toll.txt";

fs.readFile(fileName, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data);
});