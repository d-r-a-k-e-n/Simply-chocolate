import express from 'express';
import { createCheckoutSession } from './checkout.service.js';

const router = express.Router();

router.post('/create-session', createCheckoutSession);

export default router;
