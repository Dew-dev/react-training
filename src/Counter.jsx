import React, { useState } from "react";
function Counter() {
  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    margin: "0px 5px",
  };
  const container = {
    textAlign: "center",
    fontFamily: "arial, sans-serif",
  };

  const counter = {
    fontSize: "10em",
  };
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  //code below won't work
  // const increment = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container" style={container}>
      <p className="count-display" style={counter}>
        {" "}
        {count}{" "}
      </p>
      <button className="counter-button" style={styles} onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" style={styles} onClick={reset}>
        reset
      </button>
      <button className="counter-button" style={styles} onClick={increment}>
        increment
      </button>
    </div>
  );
}
export default Counter;
