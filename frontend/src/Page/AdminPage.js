import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete'; // Import Material UI Delete icon

const AdminPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [newUserName, setNewUserName] = useState(''); // Added state for user name
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');
  const [users, setUsers] = useState([]); // State to store registered users
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    if (!newUserName || !newUserEmail || !newUserPassword) {
      toast.error('All fields are required');
      return;
    }

    try {
      // Add the new user to the list of users
      setUsers((prevUsers) => [
        ...prevUsers,
        { name: newUserName, email: newUserEmail, password: newUserPassword, id: Date.now() },
      ]);

      // Reset input fields and show success message
      toast.success('User registered successfully');
      setNewUserName('');
      setNewUserEmail('');
      setNewUserPassword('');
      setIsRegistering(false); // Close the registration form

      navigate('/admin');
    } catch (error) {
      console.error('Registration failed:', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  // Function to delete a user
  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== id);
      toast.success('User deleted successfully');
      return updatedUsers;
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Register New User Button */}
      {!isRegistering && (
        <button
          onClick={handleRegisterClick}
          className="absolute top-4 right-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Register New User
        </button>
      )}

      {/* User Registration Form */}
      {isRegistering && (
        <div className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg w-full max-w-lg">
          <form onSubmit={handleRegisterUser} className="space-y-4">
            <div>
              <label htmlFor="newUserName" className="block text-sm font-medium text-gray-700">New User Name</label>
              <input
                type="text"
                id="newUserName"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
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
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm sm:text-base font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Register User
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Dashboard to show registered users */}
      {!isRegistering && users.length > 0 && (
        <div className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg w-full max-w-4xl mt-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Registered Users</h2>
          <ul className="space-y-4">
            {users.map((user) => (
              <li key={user.id} className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded-md">
                <div>
                  <p className="text-lg font-medium text-gray-800">{user.name} ({user.email})</p>
                </div>
                <DeleteIcon
                  onClick={() => handleDeleteUser(user.id)}
                  className="mt-2 sm:mt-0 text-red-500 cursor-pointer hover:text-red-600"
                  fontSize="large"
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Show message if there are no users registered */}
      {!isRegistering && users.length === 0 && (
        <div className="text-center mt-4">
          <p className="text-gray-600">No users registered yet.</p>
        </div>
      )}

      {/* Toastify container */}
      <ToastContainer />
    </div>
  );
};

export default AdminPage;
