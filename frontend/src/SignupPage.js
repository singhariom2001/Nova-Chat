import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const SignupPage = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const handleUserLogin = (e) => {
    e.preventDefault();

    if (loginId === 'user@gmail.com' && password === 'User@2024') {
      loginUser({ role: 'user', email: loginId }); 
      navigate('/user'); // Redirect to UserPage
    } else {
      setLoginError('Wrong email or password');
    }
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (loginId === 'admin@gmail.com' && password === 'Admin@2024') {
      loginUser({ role: 'admin', email: loginId }); 
      navigate('/admin'); // Redirect to AdminPage
    } else {
      setLoginError('Wrong email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="loginId" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="text"
              id="loginId"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          {loginError && <p className="mt-1 text-sm text-red-600">{loginError}</p>}
          <div className="flex flex-col gap-4">
            <button
              onClick={handleUserLogin}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              User Login
            </button>
            <button
              onClick={handleAdminLogin}
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Admin Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
