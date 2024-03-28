import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({children , isLoggedIn}) {

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