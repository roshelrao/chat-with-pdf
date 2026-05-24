import express from 'express';
import { chatWithPDF } from '../controllers/chatController.js';

const router = express.Router();

router.post('/ask', chatWithPDF);

export default router;