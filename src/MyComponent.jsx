import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    // name = "Dewd";
    setName("Dewd");
    // console.log(name);
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const updateEmployed = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p> Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p> Name: {age}</p>
      <button onClick={incrementAge}>Set Age</button>

      <p> is employed: {isEmployed ? "yes" : "no"}</p>
      <button onClick={updateEmployed}>Toggle Status</button>
    </div>
  );
}
export default MyComponent;
