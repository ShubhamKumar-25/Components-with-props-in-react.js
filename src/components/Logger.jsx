import React, { useEffect, useState } from "react";
import "./Logger.css";

const Logger = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("Hey How are you");
  }, [count]);

  //   useEffect(() => {
  //     document.title = `Counter ${count}`;
  //   }, [count]);

  return (
    <div className="Logger-container">
      <h1>Use of UseEffect :</h1>
      <h1>{count}</h1>
      <button className="btn1" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button
        className="btnn2"
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Logger;
