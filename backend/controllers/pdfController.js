import { PDFParse } from 'pdf-parse';

export const extractTextFromPDF = async (req, res) => {
    try {
        const parser = new PDFParse({ data: req.file.buffer });
        const result = await parser.getText();
        res.json({ text: result.text });
    } catch (error) {
        console.error('PDF parse error:', error);
        res.status(500).json({ error: error.message });
    }
}