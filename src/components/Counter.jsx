import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(11);

  return (
    <div className="counter-container">
      <h1>Counter : {count}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        className="btn2"
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        className="btn3"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
