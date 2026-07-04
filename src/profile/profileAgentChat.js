import React, { useState } from "react";
import { FaComments, FaPaperPlane, FaTimes } from "react-icons/fa";
import apiService from "../services/apiService";

const profileAgent = {
  role: "Ask Alessio AI",
  description:
    "A profile assistant that answers questions about Alessio Giovannini, his skills, projects, certifications, and experience.",
  task:
    "Help website visitors understand Alessio's background, expertise, projects, certifications, and professional profile. Be concise, accurate, and friendly.",
};

const ProfileAgentChat = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "you",
      message:
        "Hi, I am Alessio's AI assistant. Ask me about his projects, skills, certifications, or experience.",
    },
  ]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!inputMessage.trim() || loading) return;

    const userMessage = { role: "user", message: inputMessage.trim() };
    let updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInputMessage("");
    setLoading(true);

    try {
      const response = await apiService.sendMessageToChat(
        updatedMessages,
        profileAgent.role,
        profileAgent.description,
        profileAgent.task
      );

      updatedMessages = [
        ...updatedMessages,
        { role: "you", message: response.data },
      ];
      setMessages(updatedMessages);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "you",
          message:
            "I could not reach the assistant right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-4 w-[calc(100vw-40px)] max-w-[390px] h-[560px] max-h-[calc(100vh-120px)] bg-white text-slate-900 border border-slate-200 shadow-2xl flex flex-col overflow-hidden rounded-2xl">
          <div className="bg-slate-950 text-white px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm text-cyan-300 font-medium">Profile assistant</p>
              <h2 className="text-lg font-semibold leading-tight">Ask Alessio AI</h2>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
              aria-label="Close assistant"
            >
              <FaTimes size={14} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-slate-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-cyan-600 text-white rounded-br-md"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-md"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}

            {loading && (
              <div className="mb-3 flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-3 text-sm text-slate-500 shadow-sm">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(event) => setInputMessage(event.target.value)}
                className="min-w-0 flex-1 h-11 px-3 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                placeholder="Ask about Alessio..."
              />
              <button
                type="submit"
                disabled={loading || !inputMessage.trim()}
                className="h-11 w-11 rounded-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-300 text-white flex items-center justify-center transition"
                aria-label="Send message"
              >
                <FaPaperPlane size={14} />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="h-16 w-16 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-2xl flex items-center justify-center border border-white/30 transition"
        aria-label={open ? "Close assistant" : "Open assistant"}
      >
        {open ? <FaTimes size={22} /> : <FaComments size={24} />}
      </button>
    </div>
  );
};

export default ProfileAgentChat;
