import React, { createContext, useState, useContext } from 'react';

// Create the Auth Context
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component to wrap around your app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // `user` will be `null` when logged out

  const loginUser = (userDetails) => {
    setUser(userDetails); // Set user details when logged in
  };

  const logout = () => {
    setUser(null); // Clear user details when logged out
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
