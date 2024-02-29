import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  const handleColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="color-picker-container">
      <h1> Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>selected color : {color}</p>
      </div>
      <label htmlFor="">select color </label>
      <input type="color" value={color} onChange={handleColor} />
    </div>
  );
}

export default ColorPicker;
