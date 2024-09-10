import React from "react";
// import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mt-2">
        Sorry, the page you're looking for doesn't exist.
      </p> */}
      {/* <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Go back to Home
      </Link> */}

      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="text-sm text-gray-500 mb-4">
        You tried to access: {location.pathname}
      </p>

      <button
        onClick={goBack}
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Go Back to Previous Page
      </button>
    </div>
  );
};

export default ErrorPage;
