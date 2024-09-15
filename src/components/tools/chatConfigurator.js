import React, { useContext, useState, useEffect } from "react";
import apiService from "../../services/apiService";
import { UserContext } from "../userContext";
import { FaTimes } from "react-icons/fa";

function ChatConfigurator({ input, saveChatParams }) {
  // Initialize the state with empty values for each input field
  const [formValues, setFormValues] = useState(
    input.reduce((acc, field) => {
      acc[field.name] = { value: "", TECHNICAL_NAME: field.TECHNICAL_NAME }; // Initialize each field with an empty string
      return acc;
    }, {})
  );

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name],
        value: value,
      }, // Update the state for the specific input field
    }));
  };

  return (
    <div className="bg-white   flex-grow relative flex justify-center items-center flex-col gap-3 p-3 overflow-y-scroll">
      <h1 className="text-2xl text-gray-700">Chat Configurator</h1>

      {input.map((input) => {
        return (
          <div className="w-full">
            <label htmlFor="" className="block text-gray-700 text-lg  mb-2">
              {input.name}
            </label>

            <input
              value={formValues[input.name].value}
              onChange={(event) => handleChange(event)}
              name={input.name}
              placeholder={input.name}
              type={input.type}
              className="w-full px-4 py-2 border text-gray-700 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <small className="text-gray-500">{input.description}</small>
          </div>
        );
      })}

      <button
        type="submit"
        onClick={() => saveChatParams(formValues)}
        className=" bg-blue-600 px-3 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition duration-300 text-xl">
        Start Chat
      </button>
    </div>
  );
}

export default ChatConfigurator;
