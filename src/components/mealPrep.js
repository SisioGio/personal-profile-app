import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function MealPrep() {
  const [data, setData] = useState(null);
  const [dayMeals, setDayMeals] = useState([]);
  const [currentDay, setCurrentDay] = useState(null);

  const [formData,setFormData] = useState({
    
  })
  const getDayData = (dayNumber) => {
    return data.plan.find((item) => item.day === dayNumber);
  };
  const response =
    '{"grocery": [{"name": "Olive oil", "quantity": 0.5, "unit_of_measure": "l"}, {"name": "Tomatoes", "quantity": 1, "unit_of_measure": "kg"}, {"name": "Cucumber", "quantity": 2, "unit_of_measure": "pc"}, {"name": "Feta cheese", "quantity": 300, "unit_of_measure": "g"}, {"name": "Oregano", "quantity": 50, "unit_of_measure": "g"}, {"name": "Whole wheat bread", "quantity": 1, "unit_of_measure": "kg"}, {"name": "Chickpeas", "quantity": 500, "unit_of_measure": "g"}, {"name": "Lemon", "quantity": 4, "unit_of_measure": "pc"}, {"name": "Garlic", "quantity": 1, "unit_of_measure": "pc"}, {"name": "Yogurt", "quantity": 500, "unit_of_measure": "g"}, {"name": "Honey", "quantity": 250, "unit_of_measure": "ml"}, {"name": "Spinach", "quantity": 300, "unit_of_measure": "g"}, {"name": "Pasta", "quantity": 500, "unit_of_measure": "g"}, {"name": "Onion", "quantity": 3, "unit_of_measure": "pc"}, {"name": "Zucchini", "quantity": 2, "unit_of_measure": "pc"}], "plan": [{"day": 1, "meals": [{"id": 1, "name": "Greek Yogurt with Honey and Whole Wheat Toast", "calories": 450, "prepration_time": 10, "description": "A simple and nutritious breakfast with Greek yogurt, honey, and whole wheat toast.", "ingredients": [{"name": "Yogurt", "quantity": 200, "unit_of_measure": "g"}, {"name": "Honey", "quantity": 30, "unit_of_measure": "ml"}, {"name": "Whole wheat bread", "quantity": 2, "unit_of_measure": "pc"}], "instructions": ["Toast two slices of whole wheat bread", "Serve yogurt in a bowl and drizzle with honey", "Enjoy toast alongside the yogurt"]}, {"id": 2, "name": "Greek Salad", "calories": 350, "prepration_time": 15, "description": "A refreshing Mediterranean salad with tomatoes, cucumber, and feta cheese.", "ingredients": [{"name": "Tomatoes", "quantity": 200, "unit_of_measure": "g"}, {"name": "Cucumber", "quantity": 1, "unit_of_measure": "pc"}, {"name": "Feta cheese", "quantity": 50, "unit_of_measure": "g"}, {"name": "Olive oil", "quantity": 15, "unit_of_measure": "ml"}, {"name": "Oregano", "quantity": 2, "unit_of_measure": "g"}], "instructions": ["Chop tomatoes and cucumber", "Crumble feta cheese", "Mix vegetables and cheese in a bowl", "Drizzle with olive oil and sprinkle oregano"]}, {"id": 3, "name": "Mediterranean Pasta", "calories": 600, "prepration_time": 25, "description": "A hearty pasta dish with Mediterranean flavors.", "ingredients": [{"name": "Pasta", "quantity": 100, "unit_of_measure": "g"}, {"name": "Tomatoes", "quantity": 150, "unit_of_measure": "g"}, {"name": "Olive oil", "quantity": 15, "unit_of_measure": "ml"}, {"name": "Garlic", "quantity": 2, "unit_of_measure": "g"}, {"name": "Spinach", "quantity": 50, "unit_of_measure": "g"}], "instructions": ["Cook pasta according to package instructions", "Saut\\u00e9 garlic in olive oil", "Add chopped tomatoes and spinach to the pan", "Mix cooked pasta with the sauce"]}]}, {"day": 2, "meals": [{"id": 1, "name": "Spinach and Feta Omelette", "calories": 400, "prepration_time": 15, "description": "A protein-rich breakfast with spinach and feta cheese.", "ingredients": [{"name": "Eggs", "quantity": 2, "unit_of_measure": "pc"}, {"name": "Spinach", "quantity": 50, "unit_of_measure": "g"}, {"name": "Feta cheese", "quantity": 30, "unit_of_measure": "g"}, {"name": "Olive oil", "quantity": 5, "unit_of_measure": "ml"}], "instructions": ["Beat eggs in a bowl", "Saut\\u00e9 spinach in olive oil", "Pour eggs over spinach and add crumbled feta", "Cook until set and fold omelette"]}, {"id": 2, "name": "Hummus with Vegetable Sticks", "calories": 300, "prepration_time": 20, "description": "Homemade hummus served with fresh vegetable sticks.", "ingredients": [{"name": "Chickpeas", "quantity": 100, "unit_of_measure": "g"}, {"name": "Lemon", "quantity": 0.5, "unit_of_measure": "pc"}, {"name": "Olive oil", "quantity": 15, "unit_of_measure": "ml"}, {"name": "Garlic", "quantity": 1, "unit_of_measure": "g"}, {"name": "Cucumber", "quantity": 0.5, "unit_of_measure": "pc"}, {"name": "Zucchini", "quantity": 0.5, "unit_of_measure": "pc"}], "instructions": ["Blend chickpeas, lemon juice, olive oil, and garlic to make hummus", "Cut cucumber and zucchini into sticks", "Serve hummus with vegetable sticks"]}, {"id": 3, "name": "Mediterranean Vegetable Stew", "calories": 450, "prepration_time": 35, "description": "A hearty vegetable stew with Mediterranean herbs.", "ingredients": [{"name": "Tomatoes", "quantity": 200, "unit_of_measure": "g"}, {"name": "Zucchini", "quantity": 1, "unit_of_measure": "pc"}, {"name": "Onion", "quantity": 1, "unit_of_measure": "pc"}, {"name": "Olive oil", "quantity": 15, "unit_of_measure": "ml"}, {"name": "Oregano", "quantity": 2, "unit_of_measure": "g"}], "instructions": ["Chop all vegetables", "Saut\\u00e9 onion in olive oil", "Add zucchini and tomatoes", "Simmer with oregano until vegetables are tender"]}]}, {"day": 3, "meals": [{"id": 1, "name": "Whole Wheat Toast with Olive Oil and Tomato", "calories": 350, "prepration_time": 10, "description": "A simple Mediterranean breakfast with whole wheat toast and fresh tomatoes.", "ingredients": [{"name": "Whole wheat bread", "quantity": 2, "unit_of_measure": "pc"}, {"name": "Tomatoes", "quantity": 100, "unit_of_measure": "g"}, {"name": "Olive oil", "quantity": 10, "unit_of_measure": "ml"}], "instructions": ["Toast whole wheat bread", "Slice tomatoes", "Place tomatoes on toast and drizzle with olive oil"]}, {"id": 2, "name": "Greek Pasta Salad", "calories": 450, "prepration_time": 20, "description": "A cold pasta salad with Greek-inspired ingredients.", "ingredients": [{"name": "Pasta", "quantity": 80, "unit_of_measure": "g"}, {"name": "Cucumber", "quantity": 0.5, "unit_of_measure": "pc"}, {"name": "Tomatoes", "quantity": 100, "unit_of_measure": "g"}, {"name": "Feta cheese", "quantity": 40, "unit_of_measure": "g"}, {"name": "Olive oil", "quantity": 10, "unit_of_measure": "ml"}, {"name": "Lemon", "quantity": 0.5, "unit_of_measure": "pc"}], "instructions": ["Cook pasta and let it cool", "Chop cucumber and tomatoes", "Mix pasta with vegetables and crumbled feta", "Dress with olive oil and lemon juice"]}, {"id": 3, "name": "Spinach and Chickpea Stew", "calories": 500, "prepration_time": 30, "description": "A nutritious stew with spinach and chickpeas.", "ingredients": [{"name": "Chickpeas", "quantity": 150, "unit_of_measure": "g"}, {"name": "Spinach", "quantity": 100, "unit_of_measure": "g"}, {"name": "Onion", "quantity": 1, "unit_of_measure": "pc"}, {"name": "Garlic", "quantity": 2, "unit_of_measure": "g"}, {"name": "Olive oil", "quantity": 15, "unit_of_measure": "ml"}, {"name": "Lemon", "quantity": 0.5, "unit_of_measure": "pc"}], "instructions": ["Saut\\u00e9 chopped onion and garlic in olive oil", "Add chickpeas and cook for 10 minutes", "Add spinach and cook until wilted", "Squeeze lemon juice over the stew before serving"]}]}, {"day": 4, "meals": [{"id": 1, "name": "Greek Yogurt with Honey and Fruit", "calories": 400, "prepration_time": 10, "description": "A light and sweet breakfast with Greek yogurt and honey.", "ingredients": [{"name": "Yogurt", "quantity": 200, "unit_of_measure": "g"}, {"name": "Honey", "quantity": 30, "unit_of_measure": "ml"}, {"name": "Whole wheat bread", "quantity": 1, "unit_of_measure": "pc"}], "instructions": ["Serve yogurt in a bowl", "Drizzle with honey", "Toast whole wheat bread and serve on the side"]}, {"id": 2, "name": "Mediterranean Veggie Sandwich", "calories": 450, "prepration_time": 15, "description": "A hearty sandwich filled with Mediterranean vegetables.", "ingredients": [{"name": "Whole wheat bread", "quantity": 2, "unit_of_measure": "pc"}, {"name": "Zucchini", "quantity": 0.5, "unit_of_measure": "pc"}, {"name": "Tomatoes", "quantity": 50, "unit_of_measure": "g"}, {"name": "Feta cheese", "quantity": 30, "unit_of_measure": "g"}, {"name": "Olive oil", "quantity": 5, "unit_of_measure": "ml"}], "instructions": ["Grill sliced zucchini", "Toast bread lightly", "Assemble sandwich with grilled zucchini, sliced tomatoes, and crumbled feta", "Drizzle with olive oil"]}, {"id": 3, "name": "Mediterranean Vegetable Pasta", "calories": 550, "prepration_time": 25, "description": "A colorful pasta dish with Mediterranean vegetables.", "ingredients": [{"name": "Pasta", "quantity": 100, "unit_of_measure": "g"}, {"name": "Tomatoes", "quantity": 100, "unit_of_measure": "g"}, {"name": "Zucchini", "quantity": 0.5, "unit_of_measure": "pc"}, {"name": "Onion", "quantity": 0.5, "unit_of_measure": "pc"}, {"name": "Olive oil", "quantity": 15, "unit_of_measure": "ml"}, {"name": "Oregano", "quantity": 2, "unit_of_measure": "g"}], "instructions": ["Cook pasta according to package instructions", "Saut\\u00e9 chopped onion and zucchini in olive oil", "Add chopped tomatoes and oregano", "Mix sauce with cooked pasta"]}]}]}';
  const parseStringToJson = () => {
    setData(JSON.parse(response));
    setDay(JSON.parse(response).plan[0]["day"]);
  };
  useEffect(() => {
    parseStringToJson();
  }, []);

  const retrieveDayMeals = (day) => {
    const output = data.plan.find((item) => item.day === day);
    setDayMeals(output.meals);
    setCurrentDay(day);
  };
  const [day, setDay] = useState(null);
  return data ? (
    <div>
      <div>
        <h3 className="text-xl ">Describe me your preference</h3>

    <form>

      <input type="text"  />
    </form>

      </div>

      {/* Plan header (days) */}
      <div className="flex gap-2  justify-between">
        {data &&
          data.plan.map((plan) => {
            return (
              <a
                onClick={(event) => retrieveDayMeals(plan.day)}
                className={`p-2 text-white text-xl flex-grow ${
                  currentDay == plan.day ? "bg-indigo-600" : "bg-indigo-900"
                } rounded-md text-center cursor-pointer hover:bg-indigo-500`}>
                Day #{plan.day}
              </a>
            );
          })}
      </div>
      {/* Day meals */}
      <div>
        {dayMeals.map((meal) => {
          return (
            <div className="flex flex-col gap-3 my-5  border border-indigo-600 p-3 rounded-xl">
              <h2 className="text-2xl text-black font-semibold">{meal.name}</h2>

              <div className="flex justify-start gap-2">
                <div className="px-2 py-1 bg-white border border-indigo-400 rounded-xl">
                  {meal.calories} calories
                </div>
                <div className="px-2 py-1 bg-white border border-indigo-400  rounded-xl">
                  {meal.prepration_time} minutes
                </div>
              </div>
              <p className="text-gray-800 text-xl">{meal.description}</p>

              <h2 className="text-2xl  text-black font-semibold mb-4">
                Ingredients
              </h2>
              <div className="grid grid-flow-col auto-cols-max mb-8 gap-4">
                {meal.ingredients.map((ingredient, index) => (
                  <div className="bg-indigo-500   p-2 rounded-xl text-white">
                    <p>
                      {" "}
                      {ingredient.name} ({ingredient.quantity}{" "}
                      {ingredient.unit_of_measure})
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl  text-black font-semibold mb-4">
                Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                {meal.instructions.map((instruction) => (
                  <li className="text-black text-lg p-2 bg-indigo-50 rounded-md">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    "Loading..."
  );
}

export default MealPrep;
