export default function UploadArea({ onUpload }) {
  return (
    <label className="w-full max-w-lg h-48 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 transition">
      <span className="text-4xl mb-2">📄</span>
      <span className="text-gray-500">Click to upload a PDF</span>
      <input type="file" accept=".pdf" className="hidden" onChange={onUpload} />
    </label>
  );
}