// PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Adjust based on how you track login status

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
