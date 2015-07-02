var nodemailer = require("nodemailer");
var rootFolder = "logs/",
    fs = require('fs'),
d = new Date(),
        dformat = [(d.getMonth() + 1),
                d.getDate(),
                d.getFullYear()].join('-');
var crawlerFile = rootFolder + dformat + "_crawler.txt",
    filterFile = rootFolder + dformat + "_filter.txt",
    tollFile = rootFolder + dformat + "_toll.txt";

var crawlerStatus = fileStatus(crawlerFile);
    //filterStatus = fileStatus(filterFile),
    //tollStatus = fileStatus(tollFile);

var subjectString = "STATUS ==> CRAWLER :: " + crawlerStatus + " , FILTER :: " + filterStatus + " , TOLL :: " + tollStatus;

var toMailIds = "gayatri.sarva@xavica.com,"; // + "xavicamailer@gmail.com," + "xavicamailer@gmail.com," + "siva.jonnala@xavica.com";

var fromMailId = "Automatic Crawler Sender <XavicaMailer@gmail.com>";

var mailBody = "Hello Team !!,<br/><br/>Good Morning, This is an automatic mail for sending Crawler Status. You will find your files in attachment.<br/><br/>I wish you a great day!<br/><br/>Bye,<br/>XAVICA TEAM";

function fileStatus(fileName) {
    var fileData = "", status = "";
    fs.readFile(fileName, 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        fileData = data;
        console.log(data);
    if (fileData.indexOf("FAIL") > -1 ) {
        status =  "FAIL";
    }
    else if (fileData.indexOf("WARN") > -1 ){
        status = "WARN";
    }
    else {
        status = "SUCCESS";
    }
    return status;
    });
}

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    transport: 'SMTP',
    host: 'smtp.gmail.com',
    auth: {
        user: "xavicamailer@gmail.com",
        pass: "?Ba^c/Q@C8W9bg\\6"     //its browser use this : ?Ba^c/Q@C8W9bg\6
    }
});

// setup e-mail data with unicode symbols
var mailOptions = {
    from: fromMailId, // sender address
    to: toMailIds, // list of receivers
    subject: subjectString, // Subject line
    //text: "Hello, I'm Roboty, an automatic report sending robot for crawler. You will find your files in attachment. I wish you a great day! Bye, Roboty", // plaintext body
    html: mailBody,
    attachments: [
        { filePath: crawlerFile },
        { filePath: filterFile },
        { filePath: tollFile }
        //add as many as you wish
    ]
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log("Message sent: " + response.message);
    }

    // if you don't want to use this transport object anymore, uncomment following line
    smtpTransport.close(); // shut down the connection pool, no more messages
});