var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "marwenzitouni2020@gmail.com",
    pass: "hirqynmap*****",
  },
});

var mailOptions = {
  from: "marwenzitouni2020@gmail.com",
  to: "abdelhafidh.bensalem1990@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hello ABS",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
