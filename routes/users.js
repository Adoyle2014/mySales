const express = require('express');
const router = express.Router();
const User = require('../models/users');
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.username
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: "Failed to register user!" });
        } else {
            res.json({ success: true, msg: "User registered successfully!" });
        }
    })
});

router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE ');
});

router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});




module.exports = router;