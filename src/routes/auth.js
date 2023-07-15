// auth.js
const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

router.post('/register', async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) return res.status(400).send('Email already registered.');

    const existingAlias = await User.findOne({ alias: req.body.alias });
    if (existingAlias) return res.status(400).send('Alias already exists.');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        alias: req.body.alias
    });

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email not found.');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Invalid password.');

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    res.header('auth-token', token).send(token);
});

router.post('/forgotPassword', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('No user with that email found');
    }

    const token = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000;

    await user.save();

    const transporter = nodemailer.createTransport({
        host: '10.0.0.38',
        port: 1025,
        ignoreTLS: true
    });

    const mailOptions = {
        from: 'no-reply@yourwebsite.com',
        to: user.email,
        subject: 'Password Reset',
        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
        'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
        'http://10.0.0.38:8025/resetPassword/' + token + '\n\n' +
        'If you did not request this, please ignore this email and your password will remain unchanged.\n'
    };

    transporter.sendMail(mailOptions, function(err) {
        if (err) {
            return res.status(500).json({error: 'Error sending email'});
        }
        res.status(200).json({message: 'Email sent'});
    });
});

module.exports = router;
