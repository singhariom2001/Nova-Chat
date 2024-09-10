// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Component/AuthContext';
import Navbar from './Component/Navbar';
import WelcomePage from './Page/WelcomePage';
import SignupPage from './Page/SignupPage';
import AdminPage from './Page/AdminPage';
import UserPage from './Page/UserPage';
import AboutPage from './Page/AboutPage';
import PrivateRoute from './Component/PrivateRoute'; // Import PrivateRoute
import ErrorPage from './Page/ErrorPage';

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
          <Route path = '*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
