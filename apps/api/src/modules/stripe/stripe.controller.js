import express from 'express';
import { getStripeProducts } from './stripe.service.js';

const router = express.Router();

router.get('/', getStripeProducts);

export default router;
