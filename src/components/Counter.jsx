import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(11);

  return (
    <div className="counter-container">
      <h1>Counter - {count}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        className="btn2"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
