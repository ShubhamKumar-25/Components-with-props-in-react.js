import React, { useState } from "react";
import "./Liked.css";

const Liked = () => {
  const [like, setLike] = useState("false");

  return (
    <div className="Container">
      <h1 className="heading">This is my like Button </h1>
      <h2 id="head">{like ? "❤️ Like" : "🤍 dislike"}</h2>

      <button onClick={() => setLike(!like)}>click</button>
    </div>
  );
};

export default Liked;
