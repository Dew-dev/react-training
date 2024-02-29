import React, { useState } from "react";
function UpdateArray() {
  const [foods, setFoods] = useState(["apple", "orange", "banana"]);
  const handleAddFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  };
  const handleRemoveFood = (index) => {
    setFoods(foods.filter((element, i) => i !== index));
  };

  return (
    <div>
      <h2> List of food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food"></input>
      <button onClick={handleAddFood}> add food </button>
    </div>
  );
}
export default UpdateArray;
