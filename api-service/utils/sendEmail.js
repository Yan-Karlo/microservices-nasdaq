const nodemailer = require('nodemailer');

module.exports = sendEmail = ({ to, subject, text }) => {
  const email = {
    from: 'yankarlo@hotmail.com',
    to,
    subject,
    text,
  }
  console.log(email)
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
      ciphers: 'SSLv3'
    },
//    service: 'Hotmail',
    auth: {
      user:process.env.EMAIL_USER,
      pass:process.env.EMAIL_PASSWORD,
    },
  })

  transporter.sendMail(email, function (error) {
    if (error) {
      throw new Error(error.message);
    }
  });

}