var nodemailer = require("nodemailer");
var rootFolder = "/logs/";
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
    text: "Hello, I'm Roboty, an automatic report sending robot. You will find your files in attachment. I wish you a great day! Bye, Roboty", // plaintext body
    html: "Hello,<br/><br/>I'm Roboty, an automatic report sending robot. You will find your files in attachment.<br/><br/>I wish you a great day!<br/><br/>Bye,<br/>Roboty",
    attachments: [
        { filePath: rootFolder + "06-30-2015.txt" }
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