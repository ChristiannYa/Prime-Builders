import nodemailer from 'nodemailer';
import { emailConfig } from '../config/email/email.mjs';

const transporter = nodemailer.createTransport(emailConfig);

transporter
  .verify()
  .then(() => console.log('Ready to send emails'))
  .catch((err) => console.log('SMPT connection error: ', err));

export const sendMail = async (mailOptions) => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
    return info;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};
