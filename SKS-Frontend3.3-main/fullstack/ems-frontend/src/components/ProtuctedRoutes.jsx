import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Kullanıcının giriş yapmış olması gereken rotaları koruyan bileşen
const ProtectedRoute = ({ path, element }) => {
  const { user } = useAuth();

  return user ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;