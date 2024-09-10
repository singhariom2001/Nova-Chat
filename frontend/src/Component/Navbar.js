import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (NOVA-CHAT) */}
        <div className="text-white text-xl sm:text-2xl font-bold">
          {user ? <span>NOVA-CHAT</span> : <Link to="/">NOVA-CHAT</Link>}
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-4">
          {!user && (
            <>
              <Link to="/" className="text-white hover:text-gray-400">Home</Link>
              <Link to="/about" className="text-white hover:text-gray-400">About</Link>
            </>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className="text-white hover:text-gray-400"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu for smaller screens */}
        <div className="sm:hidden">
          <button className="text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 5h16M4 12h16m-7 7h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu (conditional rendering) */}
      <div className="sm:hidden">
        <ul className="flex flex-col space-y-4 mt-2">
          {!user && (
            <>
              <li>
                <Link to="/" className="text-white hover:text-gray-400">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-400">About</Link>
              </li>
            </>
          )}
          {user && (
            <li>
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-400"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
