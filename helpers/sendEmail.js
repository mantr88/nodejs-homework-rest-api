const nodemailer = require("nodemailer");

require("dotenv").config();

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

const message = {
  to: "padre12@gmail.com",
  from: "andrey@gmail.com",
  subject: "From Node.js with love",
  html: "<p>Node.js awesome platform</p>",
  text: "Node.js awesome platform",
};

transport
  .sendMail(message)
  .then((res) => console.log(res))
  .catch((error) => console.log(error));
