import React, { useState, useContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { UserContext } from "./userContext";
import apiService from "../services/apiService";
import { Navigate } from "react-router-dom";
function Login() {
  const location = useLocation();
  const [isSuccess, setIsSuccess] = useState(false);
  // State to store email and password
  const [email, setEmail] = useState("test@example.com");
  const [password, setPassword] = useState("Password123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const { user, loginUser, logoutUser } = useContext(UserContext);
  const params = new URLSearchParams(location.search);
  const requestedUrl = params.get("requestedRoute");
  // Function to handle login
  const loginUserForm = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setLoading(true);

    setError(""); // Reset error message
   

    try {
      var userObj = await apiService.signin(email,password)
      loginUser(userObj);
      
      setIsSuccess(true)
      // Handle successful login (e.g., save token, redirect user, etc.)
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        setError(error.response.data.message || "Login failed");
      } else if (error.request) {
        // Request was made but no response received
        setError("No response from server");
      } else {
        console.log(error)
        // Something else happened while setting up the request
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
   

    <div className=" flex items-center justify-center">
       {isSuccess ? (
     
          <Navigate to={"/home#services"} />
       
      ) : null}


      <div className=" p-8 rounded-lg  w-full ">
        <h1 className="text-3xl  text-center text-blue-700 mb-6">
          Welcome Back!
        </h1>
        <form onSubmit={loginUserForm}>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg  mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter your email"
              value={email}
              name = "email"
              default="test@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg  mb-2">
              Password
            </label>
            <input
            default="Password123"
              type="password"
              className="w-full px-4 py-2 border rounded-lg  text-gray-700  focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 text-xl"
            disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>


        </form>
      </div>
    </div>
  );
}

export default Login;
