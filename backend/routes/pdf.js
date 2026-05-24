import express from 'express';
import multer from 'multer';
import { extractTextFromPDF } from '../controllers/pdfController.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/upload', upload.single('pdf'), extractTextFromPDF);

export default router;