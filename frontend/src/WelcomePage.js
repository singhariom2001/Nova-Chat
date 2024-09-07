import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-12 rounded-lg shadow-lg text-center max-w-lg mx-4">
        <h1 className="text-5xl font-extrabold mb-6 text-gray-850">
          Welcome to <span className="text-blue-950">NOVA-CHAT</span>
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          An AI-driven answering application.
        </p>
        <button
          onClick={handleGetStarted}
          className="py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get Started
        </button>
        <div className="mt-6 text-gray-600">
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
