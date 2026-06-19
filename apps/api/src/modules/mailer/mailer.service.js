import nodemailer from 'nodemailer';
import { SubscribeNodel } from '../../models/Subscribe';

let transporter;

const getTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  return transporter;
};

export const sendMail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    return res.status(500).json({
      message:
        'Email service is not configured. Set EMAIL_USER and EMAIL_PASS in apps/api/.env',
    });
  }

  try {
    await SubscribeNodel.findOneAndUpdate(
      { email },
      { email },
      { upsert: true, new: true },
    );

    await getTransporter().sendMail({
      from: `"Simple chocolate" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for subscribing',
      text: 'Thank you for subscribing to Simply Chocolate! We will notify you about our new chocolate first.',
      html: '<p>Thank you for subscribing to <b>Simply Chocolate</b>!</p><p>We will notify you about our new chocolate first.</p>',
    });

    return res.status(200).json({ message: 'Success! Email sent.' });
  } catch (error) {
    console.error(`Error for ${email}:`, error);
    return res
      .status(500)
      .json({ message: 'Error sending email', error: error.message });
  }
};
