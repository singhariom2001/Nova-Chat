import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg text-center max-w-md md:max-w-lg mx-4">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Welcome to <span className="text-blue-600">NOVA-CHAT</span>
        </h1>
        <p className="text-base md:text-lg text-gray-800 mb-8">
          An AI-driven answering application.
        </p>
        <button
          onClick={handleGetStarted}
          className="py-2 px-4 md:py-3 md:px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
