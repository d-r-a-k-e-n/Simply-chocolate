import express from 'express';
import { getAll, create } from './response.service.js';

const router = express.Router();

router.get('/', getAll);
router.post('/new-response', create);

export default router;
