const express = require("express");
const router = express.Router();
const transporter = require("../config");

router.post("/send", (req, res) => {
  console.log(req.body);
  try {
    const mailOptions = {
      from: req.body.email,
      to: process.env.email,
      subject: req.body.name,
      html: req.body.msg,
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "Something went wrong. Try again later",
        });
      } else {
        res.send({
          success: true,
          message: "Thanks for contacting us. We will get back to you shortly",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong. Try again later",
    });
  }
});

module.exports = router;
