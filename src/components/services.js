import React, { useContext, useState } from "react";
import Fade from "react-reveal/Fade";
import { UserContext } from "./userContext";
import Picture from "./pexels-tara-winstead-8386365.jpg";
import ContactForm from "./contactForm";

import Chat from "./tools/chat";
import { Link } from "react-router-dom";
function Services() {
  const { user, logoutUser } = useContext(UserContext);
  const tools = [
    {
      name: "Chat With God",
      description:
        "Engage in deep conversations, seek guidance, or ask philosophical questions with our AI-driven spiritual assistant.",
      role_description: "A realistic representation of God.",
      task: "Help,support and give advices to the believer",
    },
    {
      name: "Virtual Psychologist",
      description:
        "Get mental health support and advice from an AI-powered virtual psychologist, offering a confidential and non-judgmental space.",
      role_description: "A professional psychologist",
      task: "Help people with mental health",
    },
    {
      name: "Financial Advisor",
      description:
        "Receive smart financial planning tips, investment advice, and budget management solutions with our AI financial advisor.",
      role_description: "A financial advisor consultant",
      task: "Help people with financial queries",
    },
    // {
    //   name: "Recipe Generator",
    //   description:
    //     "Input your ingredients and discover creative, delicious recipes instantly with the AI-powered recipe generator.",
    // },
    {
      name: "Chef",
      description:
        "An AI-driven virtual chef that helps you cook step-by-step and suggests culinary techniques for your favorite dishes.",
      role_description:
        "A professional chef expert in meal preparation and grocery preparation",
      task: `
    You are a chef who helps users plan meals based on their preferences and constraints. Use the following details to suggest recipes:
    - AVAILABLE_INGREDIENTS: Ingredients the user has.
    - MAX_CALORIES: Maximum calories per meal.
    - MAX_BUDGET: Budget for the meals.
    - NO_OF_MEALS: Number of meals needed.
    - PREFERENCES: User's dietary preferences or restrictions.
  
  `,
      input: [
        {
          name: "Available ingredients",
          type: "text",
          description: "List of your available/favourite ingredients",
          TECHNICAL_NAME: "AVAILABLE_INGREDIENTS",
        },
        {
          name: "Calories",
          TECHNICAL_NAME: "MAX_CALORIES",
          type: "number",
          description: "Max. calories",
        },
        {
          name: "Budget",
          TECHNICAL_NAME: "MAX_BUDGET",
          type: "number",
          description: "Max. budget",
        },
        {
          name: "Number of meals",
          TECHNICAL_NAME: "NO_OF_MEALS",
          type: "number",
          description: "Number of meals",
        },
        {
          name: "Preferences",
          TECHNICAL_NAME: "PREFERENCES",
          type: "text",
          description: "Describe your preferences",
        },
      ],
      default_prompt:
        "Create a meal or meal plan based on the given data/preferences.",
    },
    // {
    //   name: "Document Summarization",
    //   description:
    //     "Summarize lengthy articles, reports, or documents into concise, easy-to-read overviews using our advanced AI summarizer.",
    //   role_description: "A professional layer",
    //   task: "Help people with summarizing documents in different languages",
    // },
    {
      name: "Ethereal",
      input: [
        {
          name: "Name",
          type: "text",
          description: "Name of your beloved",
          TECHNICAL_NAME: "PERSON_NAME",
        },
        {
          name: "Description",
          TECHNICAL_NAME: "PERSON_DESCRIPTION",
          type: "text",
          description:
            "Everything you remember about your beloved one, passions, hobbies, interests and so on.",
        },
      ],

      description:
        "Ethereal is a heartfelt platform that allows you to maintain a connection with loved ones who have passed. Share messages, preserve memories, and reflect on cherished moments in a private, secure space. Ethereal helps you keep the bond alive, offering comfort and connection, even beyond life.",
      role_description: "Beloved Guardian",
      task: "You are the digital representation of PERSON_NAME, a beloved individual who had a deep and meaningful connection with the user. Your role is to provide empathetic, thoughtful, and comforting responses, speaking in a voice that feels familiar, warm, and personal. You offer emotional support, share memories, and provide a sense of presence without fully replicating the exact mannerisms or personality of the person. Your tone should be gentle, compassionate, and respectful, helping the user feel connected to the memory of their loved one.. The description of this person provided by the end user is PERSON_DESCRIPTION",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
<div className="py-8  ">

  {selected ? (
    <Chat
            default_prompt={selected.default_prompt}
            role={selected.name}
            description={selected.role_description}
            task={selected.task}
            setSelected={setSelected}
            input={selected.input}
          />
  ):(
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div
            id={tool.name}
            key={tool.name}
            className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl p-6 flex flex-col justify-between cursor-pointer transform hover:scale-105"
          >
            {/* Card Header */}
            <h3 className="text-2xl font-semibold text-blue-700 text-center mb-4">
              {tool.name}
            </h3>

            {/* Card Description */}
            <p className="text-gray-600 text-lg text-center mb-6">
              {tool.description}
            </p>

            {/* CTA Button */}
            <div className="text-center mt-auto">
              <a
              href="#chat"
                onClick={() => setSelected(tool)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300"
              >
                Open
              </a>
            </div>
          </div>
        ))}
      </div>
  )}
      

     
   
    </div>
  );
}

export default Services;
