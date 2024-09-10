import React, { useState, useRef, useEffect } from 'react';
import { FaFileUpload, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';

const UserPage = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [chatHistory]);

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(file);
      setChatHistory([...chatHistory, { type: 'system', content: `PDF "${file.name}" uploaded successfully!` }]);
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pdfFile) {
      alert('Please upload a PDF first.');
      return;
    }
    if (!question) return;

    setIsLoading(true);
    setChatHistory([...chatHistory, { type: 'user', content: question }]);

    try {
      const response = await mockApiRequest({ pdf: pdfFile, question });
      setChatHistory((prev) => [...prev, { type: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prev) => [...prev, { type: 'system', content: 'An error occurred. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }

    setQuestion('');
  };

  const mockApiRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Here is the response from your question based on the PDF!');
      }, 1000);
    });
  };

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div
        className="w-full max-w-4xl bg-gray-800 rounded-lg overflow-hidden flex flex-col shadow-2xl hover:shadow-[0px_4px_30px_5px_rgba(0,0,0,0.8)] transition-all duration-300 transform hover:-translate-y-1"
        style={{ height: '80vh', maxHeight: '800px' }}
      >
        <header className="bg-gray-900 text-white p-3">
          <h1 className="text-xl font-bold text-center sm:text-2xl">PDF Q&A Chat Assistant</h1>
        </header>

        <div className="flex flex-col md:flex-row flex-grow">
          <div className="w-full md:w-1/3 p-4 bg-gray-800 border-r border-gray-700 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4 text-pink-200">Upload PDF</h2>
            <label className="block w-full p-4 text-center border-2 border-dashed border-pink-300 rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300">
              <input type="file" onChange={handlePdfChange} className="hidden" accept="application/pdf" />
              <FaFileUpload className="mx-auto text-2xl text-pink-400 mb-2" />
              <span className="text-pink-300 text-sm">{pdfFile ? pdfFile.name : 'Click to upload PDF'}</span>
            </label>
          </div>

          <div className="flex-grow flex flex-col bg-gray-800 overflow-hidden">
            <div className="flex-grow p-4 overflow-y-auto">
              {chatHistory.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : ''}`}>
                  <div
                    className={`inline-block p-3 rounded-lg text-sm ${
                      msg.type === 'user'
                        ? 'bg-pink-600 text-white'
                        : msg.type === 'assistant'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-600 text-white'
                    }`}
                  >
                    {msg.type === 'user' && <FaUser className="inline mr-2" />}
                    {msg.type === 'assistant' && <FaRobot className="inline mr-2" />}
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-gray-900">
          <div className="flex items-center">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question about the PDF..."
              className="flex-grow p-3 bg-gray-800 text-white text-sm border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className={`p-3 bg-pink-600 text-white rounded-r-lg hover:bg-pink-700 transition duration-300 ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
