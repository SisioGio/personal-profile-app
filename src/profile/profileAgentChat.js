import React, { useEffect, useRef, useState } from "react";
import { FaComments, FaPaperPlane, FaRobot, FaTimes } from "react-icons/fa";
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
  const [chatHeight, setChatHeight] = useState(null);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      role: "you",
      message:
        "Hi, I am Alessio's AI assistant. Ask me about his projects, skills, certifications, or experience.",
    },
  ]);

  const quickPrompts = [
    "What projects is Alessio proud of?",
    "Summarize Alessio's cloud skills.",
    "Which certifications does Alessio have?",
  ];

  useEffect(() => {
    if (!open) return;

    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  useEffect(() => {
    if (!open) return;

    const setStableChatHeight = () => {
      setChatHeight(`${window.innerHeight - 24}px`);
    };

    setStableChatHeight();
    window.addEventListener("orientationchange", setStableChatHeight);

    return () => {
      window.removeEventListener("orientationchange", setStableChatHeight);
    };
  }, [open]);

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
    <div
      className={`fixed inset-x-3 z-50 flex flex-col items-end sm:inset-x-auto sm:right-5 ${
        open
          ? "top-3 sm:bottom-5 sm:top-auto"
          : "bottom-[calc(env(safe-area-inset-bottom)+0.75rem)]"
      }`}
    >
      {open && (
        <div
          className="flex w-full flex-col overflow-hidden rounded-[28px] border border-white/15 bg-slate-950 text-white shadow-[0_24px_80px_rgba(2,6,23,0.45)] sm:h-[620px] sm:max-h-[680px] sm:w-[410px]"
          style={{ height: chatHeight || "calc(100svh - 1.5rem)" }}
        >
          <div className="relative overflow-hidden border-b border-white/10 bg-slate-950 px-4 pb-4 pt-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.28),transparent_36%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.18),transparent_38%)]" />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30">
                  <FaRobot size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Profile assistant
                  </p>
                  <h2 className="truncate text-xl font-semibold leading-tight">
                    Ask Alessio AI
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                aria-label="Close assistant"
              >
                <FaTimes size={16} />
              </button>
            </div>

            <div className="relative mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setInputMessage(prompt)}
                  className="shrink-0 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-left text-xs font-medium text-cyan-50 transition hover:bg-white/15"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto bg-[linear-gradient(180deg,#f8fafc_0%,#eef9fc_48%,#f8fafc_100%)] px-3 py-4 sm:px-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 flex items-end gap-2 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role !== "user" && (
                  <div className="mb-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-cyan-200 shadow-sm min-[380px]:flex">
                    <FaRobot size={14} />
                  </div>
                )}
                <div
                  className={`max-w-[86%] whitespace-pre-wrap rounded-[22px] px-4 py-3 text-[15px] leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "rounded-br-md bg-slate-950 text-white shadow-slate-900/20"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-800"
                  }`}
                >
                  {msg.message}
                </div>
              </div>
            ))}

            {loading && (
              <div className="mb-3 flex items-end gap-2">
                <div className="mb-1 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-cyan-200 shadow-sm min-[380px]:flex">
                  <FaRobot size={14} />
                </div>
                <div className="rounded-[22px] rounded-bl-md border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
                  <span className="typing-dots" aria-label="Assistant is thinking">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-200 bg-white p-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] sm:pb-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1.5 shadow-inner">
              <input
                type="text"
                value={inputMessage}
                onChange={(event) => setInputMessage(event.target.value)}
                className="h-12 min-w-0 flex-1 bg-transparent px-3 text-[16px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                placeholder="Ask about Alessio..."
              />
              <button
                type="submit"
                disabled={loading || !inputMessage.trim()}
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-950/20 transition hover:bg-cyan-400 disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
                aria-label="Send message"
              >
                <FaPaperPlane size={15} />
              </button>
            </div>
          </form>
        </div>
      )}

      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-cyan-400 text-slate-950 shadow-[0_18px_48px_rgba(8,145,178,0.45)] transition hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-cyan-200/60"
          aria-label="Open assistant"
        >
          <FaComments size={24} />
        </button>
      )}
    </div>
  );
};

export default ProfileAgentChat;
