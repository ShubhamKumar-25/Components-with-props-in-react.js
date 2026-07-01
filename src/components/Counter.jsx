import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count === 0) {
      return; // Prevent count from going below 0
    }
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1>Counter : {count}</h1>
      <button className="btn" onClick={handleIncrease}>
        Increase
      </button>
      <button className="btn2" onClick={handleDecrease}>
        Decrease
      </button>
      <button className="btn3" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
