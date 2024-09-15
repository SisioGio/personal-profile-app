import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./userContext";
import { useSearchParams } from "react-router-dom";
import apiService from "../services/apiService";
import Inventory from "./inventory";
import AskRecipes from "./recipes";
import MealPrep from "./mealPrep";


// Profile Component
const Profile = () => {
  // State to handle active tab
  const [activeTab, setActiveTab] = useState("Inventory");

  // Function to switch between tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-indigo-50  py-10 px-6 h-full flex-grow">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
   

        {/* Tabs Navigation */}
        <div className="flex border-b mb-6">
          <button
            onClick={() => handleTabClick("Inventory")}
            className={`px-4 flex-grow py-2 focus:outline-none ${
              activeTab === "Inventory"
                ? "border-b-4 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
          >
            Inventory
          </button>
          
          <button
            onClick={() => handleTabClick("Recipe Generator")}
            className={`px-4  flex-grow  py-2 focus:outline-none ${
              activeTab === "Recipe Generator"
                ? "border-b-4 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
          >
            Recipe Generator
          </button>

          <button
            onClick={() => handleTabClick("Meal Prep")}
            className={`px-4  flex-grow  py-2 focus:outline-none ${
              activeTab === "Meal Prep"
                ? "border-b-4 border-indigo-600 text-indigo-600"
                : "text-gray-600"
            }`}
          >
            Meal Prep
          </button>
        </div>

        {/* Content of Active Tab */}
        <div className="mt-6">
  
          {activeTab === "Inventory" && <Inventory />}
          {activeTab === "Recipe Generator" && <AskRecipes />}
          {activeTab === "Meal Prep" && <MealPrep />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
