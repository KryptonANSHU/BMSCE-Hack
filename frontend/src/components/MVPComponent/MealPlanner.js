import React, { useState } from "react";
import MealList from "./MealList.js";
import './mealplanner.css'

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=ee7cb0bda7894f23afce13adda285b90&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="Appa">
      <section className="controlsa">
        <input className="inputa"
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <button className="buttona" onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default App;