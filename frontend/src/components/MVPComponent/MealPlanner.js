import React, { useState } from "react";
import MealList from "./MealList.js";
import './mealplanner.css'

function MealPlanner() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=4197398f39a347779ebe6b83c15e846a&timeFrame=day&targetCalories=${calories}`
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
        <input className="inputa border-2"
          type="number"
          placeholder="Put Your Target Calories"
          onChange={handleChange}
        />
        <button className="buttona" onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default MealPlanner;