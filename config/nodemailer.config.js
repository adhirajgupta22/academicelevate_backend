const nodemailer = require('nodemailer');

//transporter setup

const createTransporter = () => {
    return nodemailer.createTransport({
        secure: true,
        host:'smtp.gmail.com',
        port: 465,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
}

module.exports = createTransporter;