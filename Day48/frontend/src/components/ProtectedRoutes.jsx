import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoutes({children}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

  if(!isLoggedIn){
    return (
        <Navigate to="/Login" />
    );
  }
  else{
    return children;
  }  
}

export default ProtectedRoutes