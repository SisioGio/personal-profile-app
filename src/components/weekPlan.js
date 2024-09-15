import React, { useContext, useEffect, useState } from "react";

import apiService from "../services/apiService";

function WeekPlan() {
  const [question, setQuestion] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const sendRequestToBedrock = async (event) => {
    var recipe_details = question;
    try {
      event.preventDefault();
      setLoading(true);
      if (recipe_details == null || recipe_details == "") {
        recipe_details = "No requirements";
      }

      const result = await apiService.generateRecipe(recipe_details);

      setRecipe(result.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md my-5">
      <h1 className="text-3xl ">Recipe Generator</h1>
      <form>
        <div className="flex flex-col gap-5  ">
          <input
            onChange={(event) => setQuestion(event.target.value)}
            className="border my-5 border-indigo-300 focus:outline-none focus:border focus:border-indigo-400 focus:border-opacity-80 rounded-md px-3 py-3"
            type="text"
            value={question}
            placeholder="Enter all your details here, from type of meal to amount of calories and so on..."
          />
        </div>
      </form>

      <a
        className="bg-indigo-700 my-5 block p-3 text-white text-xl text-center rounded-xl boder hover:bg-indigo-500"
        href=""
        onClick={(event) => sendRequestToBedrock(event)}>
        Ask your private GenAi Chef
      </a>

      {loading && (
        <span className="text-indigo-500 text-xl text-center block w-full">
          Please give us a moment, we're processing your request...
        </span>
      )}
      {recipe ? (
        <div className="bg-indigo-50 min-h-screen py-10 px-6">
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            {/* Recipe Header */}
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">
              {recipe.recipe_name}
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              {recipe.recipe_description}
            </p>

            {/* Ingredients Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Ingredients
            </h2>
            <ul className="space-y-2 mb-8">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-md ${
                    ingredient.available ? "bg-green-100" : "bg-red-100"
                  }`}>
                  <span className="text-gray-700">
                    {ingredient.name} ({ingredient.quantity}{" "}
                    {ingredient.unit_of_measure})
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      ingredient.available
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}>
                    {ingredient.available ? "Available" : "Not Available"}
                  </span>
                </li>
              ))}
            </ul>

            {/* Instructions Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              Instructions
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              {recipe.instructions.map((instruction) => (
                <li
                  key={instruction.id}
                  className="text-gray-700 p-3 bg-indigo-50 rounded-md">
                  {instruction.description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default AskRecipes;
