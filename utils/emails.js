const nodemailer = require("nodemailer");
require("dotenv").config();

module.exports = {
  sendContactEmail: async (recipient) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: { ciphers: "SSLv3" },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `"Hart Agency Network" <'${process.env.EMAIL_USER}'>`,
      to: recipient.email,
      subject: "Welcome to Mercury POS ✔",
      html: `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Document</title>
        </head>
        <body
          style="font-size: larger"
          style="
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
              'Lucida Sans', Arial, sans-serif;
          "
        >
          <h2>Dear <b>${recipient.name},</b></h2>
          <p>
            Thank you for reaching out.  We will get back to you during office hours. 
            -Hart Agency Network
          </p>
        </body>
      </html>
      `,
    });

    console.log("Message sent: %s", info.messageId);
  },
};
