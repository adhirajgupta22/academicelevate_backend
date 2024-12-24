const createTransporter = require('../config/nodemailer.config');

// Email sending function
const sendEmail = async (data) => {
    const { name, email, number,course } = data;
    const transporter = createTransporter();

    const mailOptions = {
        // from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: 'New message from contact form',
        text: `Name: ${name}\nEmail: ${email}\n Contact Number: ${number} \n Course to Buy: ${course}`
    };

    return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
