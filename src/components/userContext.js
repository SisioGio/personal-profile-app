import React, { createContext, useEffect, useState } from 'react';
import apiService from '../services/apiService';
// Create UserContext
const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Create a state to hold the user data
  const [user, setUser] = useState(null);

  // This function can be used to update the user data
  const loginUser = (userData) => {
    setUser(userData);
  };

  // This function can be used to clear user data (logout)
  const logoutUser = () => {
    apiService.logout()
    setUser(null);
  };

  const checkIfAuthenticated = async()=>{
try{
  await apiService.isAuthenticated()
  const user = apiService.getUserFromToken()
  setUser(user)

} catch(err){
  setUser(null)
}
    
  }

  useEffect(()=>{
    checkIfAuthenticated()
    console.log("CHECKING USER")
  },[])
  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
