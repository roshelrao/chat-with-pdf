export default function QuestionInput({ question, setQuestion, onAsk, loading }) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={question}
        onChange={e => setQuestion(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && onAsk()}
        placeholder="Ask a question..."
        className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-400"
      />
      <button
        onClick={onAsk}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-600 disabled:opacity-50"
      >
        Send
      </button>
    </div>
  );
}