import express from 'express';
import { getAll } from './product.service.js';

const router = express.Router();

router.get('/', getAll);

export default router;
