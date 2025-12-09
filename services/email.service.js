const { Resend } = require('resend');
const dotenv = require('dotenv');
dotenv.config();

const resend = new Resend(process.env.RESEND_KEY);

const sendEmail = async (data) => {
  const { name, email, number, city } = data;

  const { data: resData, error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.EMAIL,
    subject: 'New Contact Form Submission',
    html: `
      <div style="
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        background-color: #f4f4f5;
        padding: 24px;
      ">
        <div style="
          max-width: 520px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
          overflow: hidden;
        ">
          <div style="padding: 16px 20px; border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
            <h2 style="margin: 0; font-size: 18px; color: #111827;">
              New Contact Form Submission
            </h2>
            <p style="margin: 4px 0 0; font-size: 13px; color: #6b7280;">
              Someone just submitted the form on your website.
            </p>
          </div>

          <div style="padding: 20px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tbody>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563; width: 120px;">
                    Name
                  </td>
                  <td style="padding: 8px 0; color: #111827;">
                    ${name || '-'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">
                    Email
                  </td>
                  <td style="padding: 8px 0; color: #111827;">
                    <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">
                      ${email || '-'}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">
                    Number
                  </td>
                  <td style="padding: 8px 0; color: #111827;">
                    ${number || '-'}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: 600; color: #4b5563;">
                    City
                  </td>
                  <td style="padding: 8px 0; color: #111827;">
                    ${city || '-'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="padding: 14px 20px; border-top: 1px solid #e5e7eb; background: #f9fafb;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">
              This email was generated automatically from your contact form.
            </p>
          </div>
        </div>
      </div>
    `
  });

  if (error) {
    console.error('Resend error:', error);
    throw new Error('Failed to send email');
  }

  console.log('Resend response:', resData);
};

module.exports = sendEmail;



// const createTransporter = require('../config/nodemailer.config');

// // Email sending function
// const sendEmail = async (data) => {
//     const { name, email, number,course } = data;
//     const transporter = createTransporter();

//     const mailOptions = {
//         // from: process.env.EMAIL,
//         to: process.env.EMAIL,
//         subject: 'New message from contact form',
//         text: `Name: ${name}\nEmail: ${email}\nContact Number: ${number} \nCourse to Buy: ${course}`
//     };

//     return transporter.sendMail(mailOptions);
// };

// module.exports = sendEmail;
