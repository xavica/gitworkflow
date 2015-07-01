var nodemailer = require("nodemailer");
var rootFolder = "logs/",
d = new Date(),
        dformat = [(d.getMonth() + 1),
                d.getDate(),
                d.getFullYear()].join('-');
var crawlerFile = rootFolder + dformat + "_crawler.txt",
    filterFile = rootFolder + dformat + "_filter.txt",
    tollFile = rootFolder + dformat + "_toll.txt";
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
    from: "Automatic Crawler Sender <XavicaMailer@gmail.com>", // sender address
    to: "gayatri.sarva@xavica.com", // list of receivers
    subject: "AAutomatic Crawler Details", // Subject line
    text: "Hello, I'm Roboty, an automatic report sending robot for crawler. You will find your files in attachment. I wish you a great day! Bye, Roboty", // plaintext body
    html: "Hello,<br/><br/>I'm Roboty, an automatic report sending robot. You will find your files in attachment.<br/><br/>I wish you a great day!<br/><br/>Bye,<br/>Roboty",
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