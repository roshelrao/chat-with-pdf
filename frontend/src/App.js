import { useState } from 'react';
import UploadArea from './components/UploadArea.jsx';
import ChatWindow from './components/ChatWindow.jsx';
import QuestionInput from './components/QuestionInput.jsx';

const API_URL = process.env.REACT_APP_API_URL;

export default function App() {
  const [pdfText, setPdfText] = useState('');
  const [filename, setFilename] = useState('');
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFilename(file.name);
    const formData = new FormData();
    formData.append('pdf', file);
    const res = await fetch(`${API_URL}/api/pdf/upload`, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setPdfText(data.text);
  };

  const handleAsk = async () => {
    if (!question.trim()) return;
    const userMessage = { role: 'user', text: question };
    setMessages(prev => [...prev, userMessage]);
    setQuestion('');
    setLoading(true);
    const res = await fetch(`${API_URL}/api/chat/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, pdfText }),
    });
    const data = await res.json();
    setMessages(prev => [...prev, { role: 'ai', text: data.answer }]);
    setLoading(false);
  };

  const handleReset = () => {
    setPdfText('');
    setFilename('');
    setMessages([]);
    setQuestion('');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Chat with your PDF</h1>
      <p className="text-gray-500 mb-8">Upload a PDF and ask anything about it</p>

      {!pdfText ? (
        <UploadArea onUpload={handleUpload} />
      ) : (
        <div className="w-full max-w-lg">
          <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-4">
            <span className="text-blue-700 text-sm">✅ {filename} uploaded successfully</span>
            <button
              onClick={handleReset}
              className="text-xs text-blue-500 hover:text-blue-700 underline ml-4 whitespace-nowrap"
            >
              Upload a different PDF
            </button>
          </div>
          <ChatWindow messages={messages} loading={loading} />
          <QuestionInput
            question={question}
            setQuestion={setQuestion}
            onAsk={handleAsk}
            loading={loading}
          />
        </div>
      )}
    </div>
  );
}
