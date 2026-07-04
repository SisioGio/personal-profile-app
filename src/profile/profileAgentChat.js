import React, { useState } from "react";
import Chat from "../components/tools/chat";

const ProfileAgentChat = () => {
  const [selected, setSelected] = useState(null);

  const profileAgent = {
    name: "Ask Alessio AI",
    role_description:
      "A profile assistant that answers questions about Alessio Giovannini, his skills, projects, certifications, and experience.",
    task:
      "Help website visitors understand Alessio's background, expertise, projects, certifications, and professional profile. Be concise, accurate, and friendly.",
  };

  return (
    <section
      id="profile-agent"
      className="relative py-20 px-5 sm:px-10 bg-gradient-to-b from-black via-slate-950 to-slate-900 text-white"
    >
      <div className="max-w-5xl mx-auto">
        {selected ? (
          <Chat
            role={selected.name}
            description={selected.role_description}
            task={selected.task}
            setSelected={setSelected}
          />
        ) : (
          <div className="flex flex-col gap-6 items-center text-center">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 font-semibold text-4xl sm:text-5xl lg:text-6xl">
              Ask Alessio AI
            </h2>
            <p className="max-w-3xl text-gray-300 text-lg sm:text-xl leading-relaxed">
              Ask about my projects, AI work, automation experience,
              certifications, or technical background.
            </p>
            <a
              href="#chat"
              onClick={() => setSelected(profileAgent)}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-7 py-3 rounded-full text-lg font-semibold transition duration-300"
            >
              Open Chat
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileAgentChat;
