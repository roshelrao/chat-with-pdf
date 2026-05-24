import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import pdfRoutes from './routes/pdf.js';
import chatRoutes from './routes/chat.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST'],
}));

app.use(express.json());

app.use('/api/pdf', pdfRoutes);
app.use('/api/chat', chatRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});