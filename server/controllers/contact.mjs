import { successResponse, errorResponse } from '../utils/response.mjs';
import { sendMail } from '../services/mailer.mjs';

export const sendContactEmail = async (req, res) => {
  const { name, email, phone, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_FROM,
  };
};
