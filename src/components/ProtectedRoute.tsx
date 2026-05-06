import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { User } from '../types';

interface ProtectedRouteProps {
  user: User | null;
  redirectPath?: string;
}

export default function ProtectedRoute({ 
  user, 
  redirectPath = '/login' 
}: ProtectedRouteProps) {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
}
