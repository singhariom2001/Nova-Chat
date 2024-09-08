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
        <div className="text-white text-2xl font-bold">
          <Link to="/">NOVA-CHAT</Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-400">About</Link> {/* About link */}
            </li>
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
      </div>
    </nav>
  );
};

export default Navbar;
