const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const DanceDetails = require('./models/dance-details');

// Load environment variables
require('dotenv').config();

// Email configuration
const transporter = nodemailer.createTransport({
    host: "localhost",
    port: 3000,
    secure: false,
    tls: { rejectUnauthorized: false },
  });


router.post('/send-email', async (req, res) => {
  console.log("🚀 ~ router.post ~ req:", req.body)
  const { music_lower, dance_count, music, dance_steps, level, dance_walls, choreographer, dance_name } = req.body;

  try {
    // const danceDetails = new DanceDetails({ music_lower, dance_count, music, dance_steps, level, dance_walls, choreographer, dance_name });
    // console.log("🚀 ~ router.post ~ danceDetails:", danceDetails)
    // await danceDetails.save();

    const mailOptions = {
      from: "NewDanceSubmission@RLD.com",
      to: 'rhythmlinedance@gmail.com',
      subject: 'New Dance Details Submission',
      text: `Dance Details:
      Music Lower: ${music_lower}
      Dance Count: ${dance_count}
      Music: ${music}
      Dance Steps: ${dance_steps}
      Level: ${level}
      Dance Walls: ${dance_walls}
      Choreographer: ${choreographer}
      Dance Name: ${dance_name}`,
      auth: {
        user: 'user@gmail.com',
        pass: 'password'
    }
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).send('Email sent: ' + info.response);
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
