import ReactMarkdown from 'react-markdown';

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';
  return (
    <div className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-100 text-gray-800 self-start'}`}>
      {isUser ? (
        message.text
      ) : (
        <ReactMarkdown>
          {message.text}
        </ReactMarkdown>
      )}
    </div>
  );
}
