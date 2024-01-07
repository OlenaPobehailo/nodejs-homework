const nodemailer = require("nodemailer");

require("dotenv").config();

const config = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: process.env.META_User,
    pass: process.env.META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = (data) => {
  const emailOptions = {
    ...data,
    from: process.env.META_User,
  };

  transporter
    .sendMail(emailOptions)
    .then((info) => console.log(info))
    .catch((err) => console.log(err));

  return true;
};

// sendEmail({
//   to: "wihonov643@telvetto.com",
//   subject: "Nodemailer test",
//   text: "Привіт. Ми тестуємо надсилання листів!",
// });

module.exports = sendEmail;

