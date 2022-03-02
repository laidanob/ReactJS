import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'
import { Loader } from '../Loader/Loader';

export function RutasProtegidas({ children }) {
    const { usuario, authLoader } = useAuth();
  
    if (!usuario) return <Navigate to="/iniciar" />;
    if (authLoader) return <Loader/>;
    
  
    return <>{children}</>;
  }