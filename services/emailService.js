// src/services/emailService.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kushalbharadwaj68@gmail.com',
    pass: 'Bunny@112005',
  },
});

exports.sendAlert = (message) => {
  const mailOptions = {
    from: 'kushalbharadwaj68@gmail.com',
    to: 'kushalestari@gmail.com',
    subject: 'Alert Notification',
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
