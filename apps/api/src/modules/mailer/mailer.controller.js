import express from 'express';
import { sendMail } from './mailer.service.js';

const router = express.Router();

router.post('/send', sendMail);

export default router;
