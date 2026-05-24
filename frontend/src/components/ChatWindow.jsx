import { useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';

export default function ChatWindow({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <div className="flex flex-col gap-3 bg-white border border-gray-200 rounded-2xl p-4 h-80 overflow-y-auto mb-4">
      {messages.map((msg, i) => (
        <MessageBubble key={i} message={msg} />
      ))}
      {loading && (
        <div className="text-sm text-gray-400 self-start animate-pulse">Thinking...</div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}
