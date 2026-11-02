require("dotenv").config();

const nodemailer = require("nodemailer");

async function sendEmail() {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Hello from Node.js",
    text: "Hello! This email was sent using Node.js and Nodemailer.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    console.log(info.response);
  } catch (error) {
    console.log("Error sending email:", error.message);
  }
}

sendEmail();
