import { successResponse, errorResponse } from '../utils/response.mjs';
import { sendMail } from '../services/mailer.mjs';

export const sendContactEmail = async (req, res) => {
  const { name, email, phone, message, subject } = req.body;

  // Create a more descriptive subject line
  const emailSubject = subject ? `${subject}` : 'Prime Builders - No Subject';

  // Improved email body formatting
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: emailSubject,
    text: `
New contact form submission from ${name}

CONTACT DETAILS
--------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

MESSAGE
--------------
${message}
`.trim(),
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 5px;">
  <h2 style="color: #242f4d; border-bottom: 2px solid #00000020; padding-bottom: 10px;">Contact Form Submission.</h2>
  
  <div style="margin-bottom: 20px;">
    <h3 style="color: #f59e0b; margin-bottom: 10px;">Contact Details</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
  </div>
  
  <div>
    <h3 style="color: #f59e0b; margin-bottom: 10px;">Message</h3>
    <p style="background-color: #f9f9f9; padding: 15px; border-radius: 4px;">${message.replace(
      /\n/g,
      '<br>'
    )}</p>
  </div>
  
  <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
    <p>This email was sent from the Prime Builders contact form.</p>
  </div>
</div>
`.trim(),
  };

  try {
    await sendMail(mailOptions);
    res.json(successResponse('Email sent successfully'));
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json(errorResponse('Failed to send email'));
  }
};
