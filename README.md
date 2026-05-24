# Chat with PDF 📄

An AI-powered web app that lets you upload a PDF and ask questions about its content using natural language.

## Tech Stack

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express
- **AI:** Google Gemini API
- **PDF Parsing:** pdf-parse

## Features

- Upload any PDF file
- Ask questions about the content in natural language
- Clean chat interface with message history
- Upload a different PDF at any time

## Getting Started

### Prerequisites
- Node.js installed
- Google Gemini API key (free at [aistudio.google.com](https://aistudio.google.com))

### Backend
```bash
cd backend
npm install
echo "GEMINI_API_KEY=your_key_here" > .env
echo "PORT=5000" >> .env
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.