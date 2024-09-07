// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import Navbar from './Navbar';
import WelcomePage from './WelcomePage';
import SignupPage from './SignupPage';
import AdminPage from './AdminPage';
import UserPage from './UserPage';
import AboutPage from './AboutPage';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar /> {/* Add Navbar component here */}
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/user" element={<PrivateRoute element={UserPage} />} />
          <Route path="/admin" element={<PrivateRoute element={AdminPage} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
