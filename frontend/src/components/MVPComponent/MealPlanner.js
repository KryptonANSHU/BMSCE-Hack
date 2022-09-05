import React, { useState } from "react";
import MealList from "./MealList.js";
import './mealplanner.css'

function MealPlanner({calorie}) {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=2e12e7f89b8e45a79819e091d85876ae&timeFrame=day&targetCalories=${calorie}`
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
          value={calorie}
        />
        <button className="buttona" onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>
  );
}

export default MealPlanner;