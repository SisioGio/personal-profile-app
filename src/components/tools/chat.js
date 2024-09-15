import React, { useContext, useState, useEffect } from "react";
import apiService from "../../services/apiService";
import { UserContext } from "./../userContext";
import { FaTimes } from "react-icons/fa";
import ChatConfigurator from "./chatConfigurator";
import axios from "axios";

function Chat({ role, description, task, setSelected, input, default_prompt }) {


  const [messages, setMessages] = useState([
    { role: "you", message: `Hello! How can I help you?` },
  ]);
  const [loading, setLoading] = useState(false);

  const [inputMessage, setInputMessage] = useState("");

  const [chatParams, setChatParams] = useState(null);

  const saveChatParams = (data) => {
    console.log(data);
    setChatParams(data);

    if (default_prompt) {
      handleAutomaticMessageSubmit(default_prompt, data);
    }
  };
  const handleAutomaticMessageSubmit = async (message, data) => {
    if (!message.trim()) return; // Don't submit if input is empty
    setLoading(true);
    // Add the new user message to the list
    const newMessage = { role: "user", message: message };
    var updatedMessages = [...messages, newMessage];

    // Update the messages state
    setMessages(updatedMessages);

    // Clear the input field
    setInputMessage("");
    console.log(updatedMessages);
    var newTask = task;
    if (input) {
      console.log("Updating role metadata");
      Object.values(data).forEach((param) => {
        const { TECHNICAL_NAME, value } = param;
        // Replace all instances of TECHNICAL_NAME with the value
        newTask = newTask.replaceAll(TECHNICAL_NAME, value);
      });
    }

    // Call the API with the updated messages
    try {
      const response = await axios.post("https://h0x7fb38l3.execute-api.eu-central-1.amazonaws.com/Prod/bedrock/chat",{
       "messages":updatedMessages,
      'role':role,
      'role_description':description,
      'role_task':  newTask
        
      }
        
      );
      const genAiMessage = { role: "you", message: response.data };
      updatedMessages = [...updatedMessages, genAiMessage];
      console.log(updatedMessages);
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error calling API:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleMessageSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    if (!inputMessage.trim()) return; // Don't submit if input is empty
    setLoading(true);
    // Add the new user message to the list
    const newMessage = { role: "user", message: inputMessage };
    var updatedMessages = [...messages, newMessage];

    // Update the messages state
    setMessages(updatedMessages);

    // Clear the input field
    setInputMessage("");
    console.log(updatedMessages);
    var newTask = task;
    if (input) {
      console.log("Updating role metadata");
      Object.values(chatParams).forEach((param) => {
        const { TECHNICAL_NAME, value } = param;
        // Replace all instances of TECHNICAL_NAME with the value
        newTask = newTask.replaceAll(TECHNICAL_NAME, value);
      });
    }

    console.log(newTask);
    // Call the API with the updated messages
    try {
      const response = await axios.post("https://h0x7fb38l3.execute-api.eu-central-1.amazonaws.com/Prod/bedrock/chat",{
        "messages":updatedMessages,
       'role':role,
       'role_description':description,
       'role_task':  newTask
         
       }
         
       );
      
      const genAiMessage = { role: "you", message: response.data };
      updatedMessages = [...updatedMessages, genAiMessage];
      console.log(updatedMessages);
      setMessages(updatedMessages);
    } catch (error) {
      console.error("Error calling API:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="  bg-opacity-80 flex items-center justify-center  flex-col" id='chat' >
      <div className="h-28"></div>
      <div className="w-full  bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="relative bg-white text-blue-800 border-b-blue-800 border-b-2 py-3 text-2xl text-center relative">
          <h1 className="font-semibold text-2xl lg:text-3xl">{role}</h1>
          <a
            href={"#"+role}
            onClick={() => setSelected(null)}
            className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2 focus:outline-none"
            aria-label="Close chat"
          >
            <FaTimes size={16} />
          </a>
        </div>

        <div className="flex flex-col  ">
          {input && chatParams === null ? (
            <ChatConfigurator
              input={input}
              saveChatParams={saveChatParams}
              setMessages={setMessages}
              startChat={handleMessageSubmit}
              messages={messages}
            />
          ) : (
            <>
              <div className="flex-1 p-4 bg-white rounded-lg min-h-[60vh] max-h-[calc(100vh-300px)]  overflow-h-scroll">
                <div className="flex flex-col h-full max-h-full">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`mb-3 px-4 py-2 rounded-xl max-w-lg text-md ${
                        msg.role === "user"
                          ? "bg-green-600 border-green-500 text-white   self-end"
                          : "bg-blue-700 border-blue-600 text-white  self-start"
                      }`}
                    >
                      <span>{msg.message}</span>
                    </div>
                  ))}

                  {loading && (
                    <div
                      className={`mb-2 p-2 px-5 rounded-xl text-gray-800 border-blue-600 border-2 text-left self-start`}
                    >
                      <span>.</span>
                      <span>.</span>
                      <span>.</span>
                    </div>
                  )}
                </div>
              </div>

              <form
                onSubmit={handleMessageSubmit}
                className="flex p-4 border-t border-gray-200 bg-white"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="flex-1 p-2 border text-black border-gray-300 rounded-l-lg focus:outline-none"
                  placeholder="Type your message..."
                />
                <button
                  type="submit"
                  disabled={loading || !inputMessage.trim()}
                  className={`p-2 rounded-r-lg text-white ${
                    loading || !inputMessage.trim()
                      ? "bg-red-600"
                      : "bg-green-600"
                  }`}
                >
                  Send
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
