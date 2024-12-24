const express = require('express');
const router = express.Router();

const sendEmail = require('../services/email.service');

router.get('/check', (req, res) => {
    res.send('Welcome to the form route!');
});

router.post('/', async (req, res) => {
    try {
        //console.log('req.body is :', req.body);
        //console.log(req.headers);
        await sendEmail(req.body);
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('error is :', error);
        res.status(500).send('An error occurred while sending the email');
    }
});

module.exports = router;