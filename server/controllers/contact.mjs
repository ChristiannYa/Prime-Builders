import { successResponse, errorResponse } from '../utils/response.mjs';
import { sendMail } from '../services/mailer.mjs';

export const sendContactEmail = async (req, res) => {
  const { name, email, phone, message, subject } = req.body;

  const emailSubject = subject
    ? `Contact Form: ${subject}`
    : 'New Contact Form Submission';

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: emailSubject,
    text: `
  From: ${name}
  Email: ${email}
  Phone: ${phone || 'Not provided'}
  ${subject ? `Subject: ${subject}` : ''}
  Message:
  ${message}
  `.trim(),
    html: `
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
  ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
  <p><strong>Message:</strong></p>
  <p>${message.replace(/\n/g, '<br>')}</p>
  `.trim(),
  };

  try {
    await sendMail(mailOptions);
    res.json(successResponse('Email sent successfully'));
  } catch (error) {
    console.error('Emaill sending error:', error);
    res.status(500).json(errorResponse('Failed to send email'));
  }
};
