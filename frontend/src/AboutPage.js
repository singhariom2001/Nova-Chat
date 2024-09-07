import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 py-12">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-4xl text-center mx-4">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
          About <span className="text-blue-600">NOVA-CHAT</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          NOVA-CHAT is an AI-based platform designed to read and comprehend PDF files and provide precise answers to the questions based on those.
        </p>
        <div className="flex flex-col md:flex-row md:justify-around mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>AI-driven PDF reading and comprehension.</li>
              <li>Instant and accurate question answering.</li>
              <li>User-friendly interface for effortless interaction.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Devs: </h2>
            <p className="text-gray-700">
              <p>Adithya Anjanappa</p>
              <p>Ayush Pandey</p>
              <p>Hariom Singh</p>
              <p>Harsh Kumar</p>
              <p>Md Affan Jawaid</p>
              <p>Navneet Kumar</p>
              <p>Saiguhan Rajavel</p>
              <p>Shadan Alam</p>
              <p>Siddharth Goswami</p>
              <p>Suraj Kumar</p>
            </p>
          </div>
        </div>
        <a
          href="/signup"
          className="inline-block py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
