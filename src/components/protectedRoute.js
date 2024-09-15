import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import apiService from "../services/apiService";

function ProtectedRoute({ children, requestedRoute }) {

  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const checkIfIsAuthenticated = async () => {
    if (!apiService.getCurrentUser()) {
      setIsAuthenticated(false);
    }
    apiService.isAuthenticated()
        .then((res) => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          setIsAuthenticated(false);
        });
    }
  

  useEffect(() => {
    checkIfIsAuthenticated();
  }, []);

  
  if (isAuthenticated != null) {
    return isAuthenticated ? (
      children
    ) : (
      
      (<Navigate to={"/login?requestedRoute=" + requestedRoute} />)
    );

    
  } else {
    return null
  }

}


export default ProtectedRoute;
