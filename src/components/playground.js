import Login from "./login";
import AskRecipes from "./recipes";
import Chat from "./tools/chat";
import { UserContext } from "./userContext";
import React, { useContext, useState, useEffect } from "react";

function Playground() {
  const tools = ["God",'Psychologist','Financial Advisor', "Recipe Generator","Chef"];
  const [tool, setTool] = useState(tools[0]);
  const { user, logoutUser } = useContext(UserContext);
  return (
    <div className="">
      <div className="h-56"></div>
      <h1 className="text-center text-5xl text-blue-900">
        Let's have some fun now...
      </h1>
      {user ? (
        <>
          <h1 className="text-blue-900 text-3xl text-center py-5">
            Nice, you're logged in and you can you my tools!
          </h1>

          <div className="  bg-blue-800 lg:p-10">
            <div className="flex gap-2 w-full  md:w-5/6 xl:w-2/5 mx-auto">
              {tools.map((item) => {
                return (
                  <a
                    className={`flex-grow text-center rounded-b-none rounded-t-xl cursor-pointer hover:bg-indigo-600 px-5 py-2 ${
                      tool === item ? "bg-blue-800 " : "bg-indigo-800"
                    } text-white`}
                    onClick={() => setTool(item)}>
                    {item}
                  </a>
                );
              })}
            </div>
            <div className="w-full  md:w-5/6 xl:w-2/5 mx-auto">
              {tool === "God" && <Chat role="God" description="A realistic representation of God." task="Help,support and give advices to the believer" />}
              {tool === "Psychologist" && <Chat role="Psychologist" description="A professional psychologist" task="Help people with mental health" />}
              {tool === "Financial Advisor" && <Chat role="Financial Advisor" description="A financial advisor consultant" task="Help people with financial queries" />}
              {tool === "Chef" && <Chat role="Chef" description="A professional chef expert in meal preparation and grocery preparation" task="Help people with cooking and meal/kitchen management" />}
              
              
              {tool === "Recipe Generator" && <AskRecipes />}
            </div>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-3xl text-blue-900 text-center py-5">
            You need an account first
          </h3>
          <Login />
        </>
      )}

      {/* <Chat /> */}
    </div>
  );
}

export default Playground;
