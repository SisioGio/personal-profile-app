import React, { useState, useContext } from "react";
import Login from "./login";
import Register from "./register";

function AuthForm() {
  const [login, setLogin] = useState(true);
  return (
    <div className=" flex flex-grow flex-col">
      <div className="h-24"></div>
      <div className="flex justify-center items-center h-full bg-blue-600 w w-full flex-grow">
        <div className="mx-auto w-1/4 min-h-24 bg-white rounded-xl shadow-md drop-shadow-none shadow-white">
          {login ? <Login /> : <Register setLogin={setLogin} />}
          <p className="text-center py-2">
            {login ? "Need an account?" : "Already have an account?"}

            <a
              className="cursor-pointer text-blue-600"
              onClick={() => (login ? setLogin(false) : setLogin(true))}>
              {login ? " Click here so sign up" : " Click here to sign in"}
            </a>
          </p>
        </div>
      </div>

      {/* login ? <Login/>: <Register/> */}
    </div>
  );
}

export default AuthForm;
