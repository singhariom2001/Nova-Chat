import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [registrationMessage, setRegistrationMessage] = useState('');
  const navigate = useNavigate(); 

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    
    if (!newUserEmail || !newUserPassword) {
      setRegistrationMessage('All fields are required');
      return;
    }

    try {
      console.log(`Registering new user: ${newUserEmail}`);
      setRegistrationMessage('User registered successfully');
      
      setNewUserEmail('');
      setNewUserPassword('');

      navigate('/admin');
    } catch (error) {
      console.error('Registration failed:', error);
      setRegistrationMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Register New User Button */}
      {!isRegistering && (
        <button
          onClick={handleRegisterClick}
          className="absolute top-4 right-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Register New User
        </button>
      )}

      {/* User Registration Form */}
      {isRegistering && (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleRegisterUser} className="space-y-4">
            <div>
              <label htmlFor="newUserEmail" className="block text-sm font-medium text-gray-700">New User Email</label>
              <input
                type="email"
                id="newUserEmail"
                value={newUserEmail}
                onChange={(e) => setNewUserEmail(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="newUserPassword" className="block text-sm font-medium text-gray-700">New User Password</label>
              <input
                type="password"
                id="newUserPassword"
                value={newUserPassword}
                onChange={(e) => setNewUserPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Register User
              </button>
              {registrationMessage && <p className="mt-2 text-sm text-green-600">{registrationMessage}</p>}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
