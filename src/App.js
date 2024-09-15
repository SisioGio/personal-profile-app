import "./App.css";

import React, {

} from "react";

import { UserProvider } from "./components/userContext";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./profile/profileMain";
import ScrollToElement from "./profile/ScrollToElement";
import NavBar from "./components/header";

import AuthForm from "./components/authForm";

function App() {
  return (
    <UserProvider>
      <Router>
        <ScrollToElement />

        <div className="flex flex-col min-h-screen">
          <NavBar />

          <div className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home/>} />

              <Route path="/auth" element={<AuthForm />} />

             
            </Routes>
          </div>

          {/* <Footer/>  */}
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
