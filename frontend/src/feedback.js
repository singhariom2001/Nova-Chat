import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the feedback submission logic here
    alert('Feedback submitted. Thank you!');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* Feedback Form */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">We value your feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3 py-2 border rounded-md"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 NOAV-CHAT. All rights reserved.</p>
          <Link to="/" className="text-blue-400 hover:underline">Back to Home</Link>
        </div>
      </footer>
    </div>
  );
}

export default Feedback;
