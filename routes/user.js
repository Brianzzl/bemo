const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  try {
    // See if user exists
    let user = await User.findOne({ email: email });
    // let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      email,

      password,
    });
    // Encrypt password
    const salt = await bcrypt.genSalt(10); // encrypt with 10 hash
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Return jsonwebtoken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,

      process.env.JWT,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
    //
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
