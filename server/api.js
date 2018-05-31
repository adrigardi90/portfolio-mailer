const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const getMessage = require('./util');

router.post('/sendEmail', (req, res) => {
    console.log(req.headers.host)
    const message = getMessage(req.body);
    console.log(message)
    const transporter = nodemailer.createTransport({
        service: 'Hotmail',
        auth: {
            user: 'adrigar90@hotmail.com',
            pass: 'xxx'
        }
    });

    const mailOptions = {
        from: 'Adrian',
        to: 'adrigar90@gmail.com',
        subject: 'New opinion - portfolio',
        text: message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("error", error.message)
            res.sendStatus(500);
        } else {
            res.status(200).send({ message: 'Success'});
        }
    });
});

module.exports = router;