import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element: Component, role, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation(); 

  const isAuthenticated = user !== null;
  const hasRole = user?.role === role;

  if (!isAuthenticated) {
    return <Navigate to="/signup" state={{ from: location }} />;
  }

  if (role && !hasRole) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
